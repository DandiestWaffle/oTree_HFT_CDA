import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */
class InputSection extends PolymerElement {
  static get template() {
    return html`
<style>
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
input{
  margin-left: 35%;
  margin-top: 50%;
}

/* The switch - the box around the slider */
.switch {
position: relative;
display: inline-block;
width: 60px;
height: 34px;

}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
}

.slider:before {
position: absolute;
content: "";
height: 26px;
width: 26px;
left: 4px;
bottom: 4px;
background-color: white;
-webkit-transition: .4s;
transition: .4s;
}

input:checked + .slider {
background-color: #1fd15a;
}

input:focus + .slider {
box-shadow: 0 0 1px #1fd15a;
}

input:checked + .slider:before {
-webkit-transform: translateX(26px);
-ms-transform: translateX(26px);
transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
border-radius: 34px;
}

.slider.round:before {
border-radius: 50%;
}
</style>

  <input id="maker" value="maker" class="button-off" on-click="makerClick" type="button" style="width:80px"></input>
<br>
  <input id="sniper" value="sniper" class="button-off" on-click="sniperClick" type="button" style="width:80px" ></input> 
<br>
  <input id="out" value="out" class="button-on" on-click="outClick" type="button" style="width:80px"></input>
<br>

      <p style="text-align: center; margin-left: 50%; margin-top:50px;">Speed</p>
<label class="switch" style="margin-left: 45%; margin-top: -20px;" >
          <br>
          <input type="checkbox" on-click="updatespeed">
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
    this.speed = false;
  }

  makerClick(button_object){
    if ((button_object.path[0].className  == "button-off") && (button_object.path[0].className != "button-pressed")){
    //     //IF BUTTON IS NOT PRESSED OR ON THEN TURN IT ON AFTER DELAD (Button_Pressed())

        /* 
        * Some Wizadry to differentiate between the inputs inside of the input-selection DOM element
        * button_object.path[0] is the button that is being clicked
        * button_object.path[1] is the actual input-selection element (Shadow DOM that we create using Polymer 3.0), once we access this -
        * the querySelector can then access each input and we can */
        button_object.path[0].className = "button-pressed";

        var msg = {
            type: 'role_change',
            id: oTreeConstants.player_id ,
            id_in_group: oTreeConstants.player_id_in_group,
            state: "MAKER"
        };
        if (this.socket.readyState === this.socket.OPEN) {
          this.socket.send(JSON.stringify(msg));
        }

       this.Button_Pressed(button_object);
       document.querySelector('info-table').setAttribute("player_role","Maker"); 

    //     // Spread_Graph.spread(); // Auto Input Spread
    //     // Spread_Graph.drawMyLine(); // Auto input spread
    }
       console.log(msg);
     
     button_object.path[1].querySelector("#out").className = "button-off";
     button_object.path[1].querySelector("#sniper").className = "button-off";
  }
  sniperClick(button_object){
    if ((button_object.path[0].className  == "button-off") && (button_object.path[0].className != "button-pressed")){
    //     //IF BUTTON IS NOT PRESSED OR ON THEN TURN IT ON AFTER DELAD (Button_Pressed())

        /* 
        * Some Wizadry to differentiate between the inputs inside of the input-selection DOM element
        * button_object.path[0] is the button that is being clicked
        * button_object.path[1] is the actual input-selection element (Shadow DOM that we create using Polymer 3.0), once we access this -
        * the querySelector can then access each input and we can */
        button_object.path[0].className = "button-pressed";

        var msg = {
            type: 'role_change',
            id: oTreeConstants.player_id ,
            id_in_group: oTreeConstants.player_id_in_group,
            state: "SNIPER"
        };
        if (this.socket.readyState === this.socket.OPEN) {
          this.socket.send(JSON.stringify(msg));
        }

       this.Button_Pressed(button_object);
       document.querySelector('info-table').setAttribute("player_role","Sniper"); 

    //     // Spread_Graph.spread(); // Auto Input Spread
    //     // Spread_Graph.drawMyLine(); // Auto input spread
    }
       console.log(msg);
     
     button_object.path[1].querySelector("#maker").className = "button-off";
     button_object.path[1].querySelector("#out").className = "button-off";
  }
  outClick(button_object){
    if ((button_object.path[0].className  == "button-off") && (button_object.path[0].className != "button-pressed")){
    //     //IF BUTTON IS NOT PRESSED OR ON THEN TURN IT ON AFTER DELAD (Button_Pressed())

        /* 
        * Some Wizadry to differentiate between the inputs inside of the input-selection DOM element
        * button_object.path[0] is the button that is being clicked
        * button_object.path[1] is the actual input-selection element (Shadow DOM that we create using Polymer 3.0), once we access this -
        * the querySelector can then access each input and we can */
        button_object.path[0].className = "button-on";

        var msg = {
            type: 'role_change',
            id: oTreeConstants.player_id ,
            id_in_group: oTreeConstants.player_id_in_group,
            state: "Out"
        };
        if (this.socket.readyState === this.socket.OPEN) {
          this.socket.send(JSON.stringify(msg));
        }


       document.querySelector('info-table').setAttribute("player_role","Out"); 

    //     // Spread_Graph.spread(); // Auto Input Spread
    //     // Spread_Graph.drawMyLine(); // Auto input spread
    }
       console.log(msg);
     
     button_object.path[1].querySelector("#maker").className = "button-off";
     button_object.path[1].querySelector("#sniper").className = "button-off";
  }

   Button_Pressed(button_object){
        //Wait .5 seconds for button pressed to even for fast players
        // to eliminate spam clicking
        var button_timer = setTimeout(this.Button_Change.bind(null,button_object),500);
    }
   Button_Change(button_object){
        //turning button on after the delay
        button_object.path[0].className = "button-on";
    }
    updatespeed(){
        this.speed = !this.speed;
        if(this.speed){
            document.querySelector('info-table').setAttribute("speed_cost",oTreeConstants.speed_cost);
        }else {
            document.querySelector('info-table').setAttribute("speed_cost",0);
        }
        var msg = {
            type: 'speed_change',
            id: oTreeConstants.player_id ,
            id_in_group: oTreeConstants.player_id_in_group,
            speed: this.speed
        };
        if (this.socket.readyState === this.socket.OPEN) {
            this.socket.send(JSON.stringify(msg));
        }
        console.log(msg);
    }


}


window.customElements.define('input-section', InputSection);