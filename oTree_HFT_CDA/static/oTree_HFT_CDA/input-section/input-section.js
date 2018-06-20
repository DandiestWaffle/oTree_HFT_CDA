import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class InputSection extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      .button-on{
        background-color:steelblue;
        border-color: solid black 5px;
        color:white;
      }
      .button-pressed{
        background-color:#444444;
        color:white;
      }
      .button-off{
        background-color:#666666;
        color:white;
      }
      </style>
      <input id="maker" value="maker" class="button-off" on-click="makerClick" type="button" style="width:80px"></input>
          <br>
      <input id="sniper" value="sniper" class="button-off" on-click="sniperClick" type="button" style="width:80px" ></input> 
            <br>
            <input id="out" value="out" class="button-on" on-click="outClick" type="button" style="width:80px"></input>
            <br>

            <p  style="text-align: center; margin-left: 30px; margin-top:50px;">Speed</p>
            <label class="switch" style="margin-left: 40px; margin-top: -5px;" >
                <br>
                <input type="checkbox" onclick="updatespeed()">
                <span class="slider round"></span>
      </label>
    `;
  }

  static get properties() {
    return {

      player_id: {
        type: String,
        value:"this"
        }
      };

  }

  constructor() {
  super();
  this.socket = socketActions.socket;
  }

  makerClick(){
    // if ((document.getElementById("maker").className == "button-off") && (document.getElementById("maker").className != "button-pressed")){
    //     //IF BUTTON IS NOT PRESSED OR ON THEN TURN IT ON AFTER DELAD (Button_Pressed())
    // $("#maker").toggleClass('button-off button-pressed');
        var msg = {
            type: 'role_change',
            id: oTreeConstants.player_id ,
            id_in_group: oTreeConstants.player_id_in_group,
            state: "MAKER"
        };
        if (this.socket.readyState === this.socket.OPEN) {
          this.socket.send(JSON.stringify(msg));
        }

    //this.Button_Pressed("maker");
    // $('#player_role').html('Maker');

    //     // Spread_Graph.spread(); // Auto Input Spread
    //     // Spread_Graph.drawMyLine(); // Auto input spread
    // }
    console.log(msg);
     // $("#out").attr('class', 'button-off');
     // $("#sniper").attr('class', 'button-off');
  }
  sniperClick(){
    // if ((document.getElementById("maker").className == "button-off") && (document.getElementById("maker").className != "button-pressed")){
    //     //IF BUTTON IS NOT PRESSED OR ON THEN TURN IT ON AFTER DELAD (Button_Pressed())
    //     // $("#maker").toggleClass('button-off button-pressed');
        var msg = {
            type: 'role_change',
            id: oTreeConstants.player_id ,
            id_in_group: oTreeConstants.player_id_in_group,
            state: "SNIPER"
        };
        if (this.socket.readyState === this.socket.OPEN) {
          this.socket.send(JSON.stringify(msg));
        }

    //     // this.Button_Pressed("maker");
    //     // // $('#player_role').html('Maker');

    //     // Spread_Graph.spread(); // Auto Input Spread
    //     // Spread_Graph.drawMyLine(); // Auto input spread
    // }
    console.log(msg);
    // $("#out").attr('class', 'button-off');
    // $("#sniper").attr('class', 'button-off');
  }
  outClick(){
    // if ((document.getElementById("maker").className == "button-off") && (document.getElementById("maker").className != "button-pressed")){
    //     //IF BUTTON IS NOT PRESSED OR ON THEN TURN IT ON AFTER DELAD (Button_Pressed())
    //     // $("#maker").toggleClass('button-off button-pressed');
        var msg = {
            type: 'role_change',
            id: oTreeConstants.player_id ,
            id_in_group: oTreeConstants.player_id_in_group,
            state: "OUT"
        };
        if (this.socket.readyState === this.socket.OPEN) {
          this.socket.send(JSON.stringify(msg));
        }


    //     // this.Button_Pressed("maker");
    //     // // $('#player_role').html('Maker');

    //     // Spread_Graph.spread(); // Auto Input Spread
    //     // Spread_Graph.drawMyLine(); // Auto input spread
    // }
    console.log(msg);
    // $("#out").attr('class', 'button-off');
    // $("#sniper").attr('class', 'button-off');
  }

   Button_Pressed(id_name){
        //Wait .5 seconds for button pressed to even for fast players
        // to eliminate spam clicking
        button_timer = setTimeout(Button_Change.bind(null,id_name),500);
    }
   Button_Change(id_name){
        //TURNING BUTTON ON
        $("#"+id_name).toggleClass('button-pressed button-on');
    }


}

window.customElements.define('input-section', InputSection);