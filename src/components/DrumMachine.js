import React from "react";
import DrumPad from "./DrumPad";

class DrumMachine extends React.Component {
    constructor(){
        super();
        this.state={
          controlKeys: ['q','w','e','a','s','d','z','x','c']
        }

        this.detectKeyDown = this.detectKeyDown.bind(this);
    }

    detectKeyDown(e) {
      if(this.state.controlKeys.includes(e.key)){
      document.getElementById(e.key).play();
      }
    }  
    
   componentDidMount(){
    document.addEventListener('keydown', this.detectKeyDown, true);
   }

    render(){
        const drumPads = this.state.controlKeys.map(pad => <DrumPad key={pad + 1} btn={pad}/>)

        return(
         <div id="drum-machine">
          <div id="display"></div>
          {drumPads}
         </div>
        ) 
    }
}


export default DrumMachine;