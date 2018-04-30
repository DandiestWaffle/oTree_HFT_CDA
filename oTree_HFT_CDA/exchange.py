import logging
logger = logging.getLogger(__name__)
import time
from twisted.internet import reactor
from twisted.internet.protocol import Protocol, ClientFactory
import numpy as np



class OUCH(Protocol):

    def __init__(self):
        super()
        self.bytes_needed = []
        self.buffers = []

    def connectionMade(self):
        logging.info("Connection made")

        
    def dataReceived(self, data):
        if data[0] == ord('S'):
            self.bytes_needed.append(10)
        elif data[0] == ord('E'):
            self.bytes_needed.append(49)
        elif data[0] == ord('C'):
            self.bytes_needed.append(28)
        elif data[0] == ord('U'):
            self.bytes_needed.append(80)
        elif data[0] == ord('A'):
            self.bytes_needed.append(66)
        else:
            raise ValueError('Invalid message header {}: {}'.format(data[0], data))

        if len(data) >= self.bytes_needed[0]:
            remainder = self.bytes_needed.pop(0)
            self.buffers[0].extend(data[:remainder])
            buf = self.buffers.pop(0)
            data = data[remainder:]
            self.factory.group.recv_message(bytes(buf))

        if len(data):
            self.bytes_needed[0] -= len(data)
            self.buffers[0].push(data)

    def sendMessage(self, msg):
        
        msg = msg.tobytes()
        self.buffers.append([])
        self.transport.write(msg)


class OUCHConnectionFactory(ClientFactory):
    protocol = OUCH

    def __init__(self, group, addr):
        super()
        self.group = group
        self.addr = addr
        self.connection = None

    def buildProtocol(self, addr):
        logging.info('connecting to exchange server at %s', addr)
        self.connection = ClientFactory.buildProtocol(self, addr)
        return self.connection

    def clientConnectionLost(self, connector, reason):
        logging.error('lost connection to exchange at %s: %s', self.addr, reason)

    def clientConnectionFailed(self, connector, reason):
        logging.error('failed to connect to exchange at %s: %s', self.addr, reason)


exchanges = {}
def connect(group, host, port, wait_for_connection=False):
    addr = '{}:{}'.format(host, port)
    if addr not in exchanges:
        factory = OUCHConnectionFactory(group, addr)
        exchanges[addr] = factory
        reactor.connectTCP(host, port, factory)
    else:
        if exchanges[addr].group != group:
            raise ValueError('Exchange at {} already has a group'.format(addr))
        exchanges[addr].group = group
    while not exchanges[addr].connection and wait_for_connection:
        logging.info('waiting for connection to %s...', addr)
        time.sleep(0.01)
    return exchanges[addr]


def disconnect(group, host, port):
    addr = '{}:{}'.format(host, port)
    exchanges[addr].group = None
