import React from "react";
import DrumPad from "./DrumPad";

class DrumMachine extends React.Component {
  constructor() {
    super();
    this.state = {
      controlKeys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
      audioClips: [
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
          title: "Heater1",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
          title: "Heater2",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
          title: "Heater3",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
          title: "heater4",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
          title: "Clap",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
          title: "TSk",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
          title: "Kick-hat",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
          title: "Bass",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
          title: "Tsk2",
        },
      ],
      soundTitle: "",
    };

    this.detectKeyDown = this.detectKeyDown.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }


 


  /*Key presses*/
  detectKeyDown(e) {
    const keyPressed = String(e.key).toUpperCase();
    if (this.state.controlKeys.includes(keyPressed)) {
      document.getElementById(keyPressed).parentNode.click();
    }
  }

  
   buttonClick(clip , title){
    clip.play();
    this.setState({
      soundTitle: title,
    });
   }
 


  componentDidMount() {
    document.addEventListener("keydown", this.detectKeyDown, true);
  }

  render() {
    const drumPads = this.state.controlKeys.map((pad, i) => (
      <DrumPad
        key={pad + 1}
        btn={pad}
        clip={this.state.audioClips[i].link}
        btnClick={this.buttonClick}
        title={this.state.audioClips[i].title}
      />
    ));

    return (
      <div id="drum-machine">
        {drumPads}
        <div id="display">{this.state.soundTitle}</div>
      </div>
    );
  }
}

export default DrumMachine;
