import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class SpreadGraph extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
       <svg id="spread-graph" ></svg> 
      <h2>[[prop1]]</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'spread-graph'
      }
    };
  }

}

window.customElements.define('spread-graph', SpreadGraph);