import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class ProfitGraph extends PolymerElement {
  static get template() {
    return html`
      <style>

      </style>
<svg id="spread-graph" style="width:[[width]]; height:[[height]];"></svg>
      <h2>[[prop1]]</h2>
    `;
  }
  static get properties() {
    return {
      width: {
        type: String,
        value: Graph_Features.profit_width
      },
      height: {
        type: String,
        value: Graph_Features.profit_height
      }
    };  }

}

window.customElements.define('profit-graph', ProfitGraph);
