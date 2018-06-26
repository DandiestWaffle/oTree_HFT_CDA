import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class SpreadGraph extends PolymerElement {
  static get template() {
    return html`
      <style>
.line {
    stroke: steelblue;
    stroke-width: 3.5px;
    fill: none;
}
.my_line{
  stroke:steelblue;
  stroke-width:2px;
}
.others_line{
  stroke:rgb(2, 3, 4);
  stroke-width:2px;
}
.green_bar{
  fill:#6edd68;
  opacity: 0.5;
}

.blue_bar{
  fill:#00ffff;
  opacity: 0.5;
}
.transaction_bar_light{
  fill:#00cc00;
  opacity: 0.5;
}
.transaction_bar_dark{
  fill:#006600;
  opacity: 0.5;
}
    <svg id="spread-graph" style="width:[[width]]; height:[[height]];"></svg>
</style>

    `;
  }
  static get properties() {
    return {
      width: {
        type: String,
        value: Graph_Features.spread_width
      },
      height: {
        type: String,
        value: Graph_Features.spread_height
      }
    };
  }
  constructor() {
    super();
  /*  Spread Constant Information 
     *   oTreeConstants.max_spread = {{Constants.max_spread}}; 
     *   oTreeConstants.default_spread = {{Constants.default_spread}};
     *   oTreeConstants.smallest_spread = {{Constants.smallest_spread}};
  */ 

  /*
     *   Initialize all the values needed for the spread graph and draw the start state
  */

    this.Spread_Graph = {};
    this.spread_lines = {};




    this.spread_width  = Graph_Features.spread_width;
    this.spread_height = Graph_Features.spread_height;

    // document.querySelector("spread-graph").shadowRoot;
    console.log(document.querySelector("spread-graph").shadowRoot);
    // this.drawStartState();
   }

   // drawStartState(){
   //    // console.log(this.spread_width + " " + this.spread_height + " " + this.spread_svg);

   //    var spread_line = this.spread_svg.append("svg:line")
   //              .attr("x1", this.spread_width/2)
   //              .attr("y1", 0)
   //              .attr("x2", this.spread_width/2)
   //              .attr("y2", this.spread_height)
   //              .style("stroke", "lightgrey")
   //              .style("stroke-width", 25);


   //    var spread_line_fundamental_price = this.spread_svg.append("svg:line")
   //              .attr("x1", 0 + 45)
   //              .attr("y1", this.spread_height/2)
   //              .attr("x2", this.spread_width - 45)
   //              .attr("y2", this.spread_height/2)
   //              .style("stroke", "grey")
   //              .style("stroke-width", 5);
   // }
                                


  }

window.customElements.define('spread-graph', SpreadGraph);
