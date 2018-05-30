import {Element as PolymerElement} from "...";


export class SpreadGraph extends PolymerElement {
 	static get template(){
 		return '<h1> hello yeet</h1>';
 	}
 	static get properties(){
 		return {
 			type : String
 		};
 	}
 }
 customElements.define("spread-graph", SpreadGraph);