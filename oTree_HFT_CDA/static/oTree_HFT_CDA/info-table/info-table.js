import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class InfoTable extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <table class="info_table" style="width:100%">
        <strong>
        <!-- Row 1 of info box -->
        <tr>
            <td class="info_text">Player ID:            [[player_id]]   </td>
            <td class="info_text">Number of Traders:    [[num_traders]] </td>
            <td class="info_text">Role:                 [[player_role]] </td>
            <td class="info_text">Fundamental Value:    [[fp]]          </td>
        </tr>
        <!-- Row 2 of info box -->
        <tr>
            <td class="info_text">Period:               [[period_id]]    </td>
            <td class="info_text">Number of Makers:     [[num_makers]]   </td>
            <td class="info_text">Spread:               [[spread_value]] </td>
            <td class="info_text">Current Buy Offer:    [[curr_bid]]     </td>
        </tr>
        <!-- Row 3 of info box -->
        <tr>
            <td class="info_text">Speed Cost:           [[speed_cost]]   </td>
            <td class="info_text">Number of Snipers:    [[num_snipers]]  </td>
            <td class="info_text">Your Profit:          [[profit]]       </td>
            <td class="info_text">Current Sell Offer:   [[curr_ask]]     </td>
        </tr>
      </strong>
    </table>
    `;
  }
  static get properties() {
    return {
      player_id: {
        type: String,
        value:"this"
      },
      num_traders: {
        type: String,
        value:"this"
      },
      player_role: {
        type: String,
        value:"this"
      },
      fp: {
        type: String,
        value:"this"
      },

      period_id: {
        type: String,
        value:"this"
      },
      num_makers: {
        type: String,
        value:"this"
      },
      spread_value: {
        type: String,
        value:"this"
      },
      curr_bid: {
        type: String,
        value:"this"
      },

      speed_cost: {
        type: String,
        value:"this"
      },
      num_snipers: {
        type: String,
        value:"this"
      },
      profit: {
        type: String,
        value:"this"
      },
      curr_ask: {
        type: String,
        value:"this"
      }
    };
  }
}

window.customElements.define('info-table', InfoTable);