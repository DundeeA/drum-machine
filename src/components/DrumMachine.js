import React from "react";
import DrumPad from "./DrumPad";

class DrumMachine extends React.Component {
  constructor() {
    super();
    this.state = {
      controlKeys: ["q", "w", "e", "a", "s", "d", "z", "x", "c"],
      audioClips: [
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
          title: "Heater 1",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
          title: "Heater 2",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
          title: "Heater 3",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
          title: "heater 4",
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
          title: "Kick/hat",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
          title: "Bass",
        },
        {
          link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
          title: "Tsk 2",
        },
      ],
    };

    this.detectKeyDown = this.detectKeyDown.bind(this);
  }

  detectKeyDown(e) {
    if (this.state.controlKeys.includes(e.key)) {
      document.getElementById(e.key).play();
    }
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
        title={this.state.audioClips[i].title}
      />
    ));

    return (
      <div id="drum-machine">
        {drumPads}
        <div id="display"></div>
      </div>
    );
  }
}

export default DrumMachine;
