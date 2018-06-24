import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class SpreadGraph extends PolymerElement {
  static get template() {
    return html`
      <style>
        #spread-graph{
          width: 25%;
          height:100%;
          margin-left:10px;
          background-color:white;
        }
      </style>
       <svg id="spread-graph" ></svg> 
       <h1>[[prop1]]</h1>
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