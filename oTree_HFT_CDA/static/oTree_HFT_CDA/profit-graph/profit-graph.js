import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class ProfitGraph extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <svg id="profit-graph"  >
            
      </svg>
      <h2>[[prop1]]</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'profit-graph'
      }
    };
  }

}

window.customElements.define('profit-graph', ProfitGraph);