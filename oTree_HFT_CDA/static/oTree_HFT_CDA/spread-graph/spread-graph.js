import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class SpreadGraph extends PolymerElement {
  constructor() {
    super();
    //First we access the shadow dom object were working with
    this.spread_graph_shadow_dom = document.querySelector("spread-graph").shadowRoot;
    //Second we add the HTML neccessary to be manipulated in the constructor and the subsequent functions
    this.spread_graph_shadow_dom.innerHTML = `
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
      </style>
      <svg id="spread-graph"></svg>
    `;

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
    //Getting the Shadow DOM variable to be able to use to be selected by d3
    this.spread_svg_dom = this.spread_graph_shadow_dom.querySelector("#spread-graph");
    this.spread_svg_dom.style.width = Graph_Features.spread_width;
    this.spread_svg_dom.style.height = Graph_Features.spread_height;

    //d3 Selection of the SVG we will be using this variable from now on
    this.spread_svg = d3.select(this.spread_svg_dom);

    
    var spread_line = this.spread_svg.append("svg:line")
      .attr("x1", this.spread_width/2)
      .attr("y1", 0)
      .attr("x2", this.spread_width/2)
      .attr("y2", this.spread_height)
      .style("stroke", "lightgrey")
      .style("stroke-width", 5);

    var spread_line_fundamental_price = this.spread_svg.append("svg:line")
      .attr("x1", 0 + 45)
      .attr("y1", this.spread_height/2)
      .attr("x2", this.spread_width - 45)
      .attr("y2", this.spread_height/2)
      .style("stroke", "grey")
      .style("stroke-width", 5);
   }


                                


  }

window.customElements.define('spread-graph', SpreadGraph);
