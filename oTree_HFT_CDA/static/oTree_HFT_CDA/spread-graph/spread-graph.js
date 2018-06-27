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
    console.log(this.spread_svg + "What the fuck");
    /*Drawing the start state when the window opens*/
    var spread_line = this.spread_svg.append("svg:line")
                       .attr("x1", this.spread_width/2)
                       .attr("y1", 0)
                       .attr("x2", this.spread_width/2)
                       .attr("y2", this.spread_height)
                       .style("stroke", "lightgrey")
                       .style("stroke-width", 5);

    var spread_line_fundamental_price = this.spread_svg.append("svg:line")
                       .attr("x1", 45)
                       .attr("y1", this.spread_height/2 - 65)
                       .attr("x2", this.spread_width - 45)
                       .attr("y2", this.spread_height/2 - 65)
                       .style("stroke", "grey")
                       .style("stroke-width", 5);

    //Adding an event listener when the spread-graph svg is clicked
    // this.spread_svg_dom.addEventListener('click', svg_object => {this.svgClickListener(svg_object)});
    console.log(this.spread_svg);
    this.spread_svg.on('click',function(d) { 
      var role = document.querySelector('info-table').player_role;
        if(role == "Maker"){

          var spread_x = Graph_Features.spread_x;
          var spread_y = Graph_Features.spread_y;

          var svg_middle_x = this.spread_width / 2;
          var fp_line_y = this.spread_height / 2;

          console.log(fp_line_y);
          var clicked_point = {
            x:(d3.event.clientX - spread_x),
            y:(d3.event.clientY - spread_y)
          };

          var distance_from_middle = Math.abs(clicked_point.y - fp_line_y);

        }
  });
  //   console.log(this.spread_svg);
  }
  svgClickListener(svg_object) {
    //Role gives you the player_role that is in the info-table
    // var role = document.querySelector('info-table').player_role;
    // if(role == "Maker"){
    //   var spread_x = svg_object.target.getBoundingClientRect().left;
    //   var spread_y = svg_object.target.getBoundingClientRect().top;
    //   console.log(spread_x + " " + spread_y);

    //   var svg_middle_x = this.spread_width / 2;
    //   var fp_line_y = this.spread_height / 2;
    //   var clicked_point = {
    //     x:(d3.event.clientX - spread_x),
    //     y:(d3.event.clientY - spread_y)
    //   };
    // }
    // console.info(svg_object.target);
  }


                                


  }

window.customElements.define('spread-graph', SpreadGraph);
