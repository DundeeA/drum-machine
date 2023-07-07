import React from "react";
import { useRef } from "react";

const DrumPad = (props) => {
  const btnRef = useRef(null);

  return (
    <button className="drum-pad" id={props.title} onClick={() => {btnRef.current.play(); props.setTitle(props.title);}}>
      <audio
        ref={btnRef}
        className="clip"
        id={props.btn}
        src={props.clip}
      ></audio>
      {props.btn} 
    </button>
  );
};

export default DrumPad;
