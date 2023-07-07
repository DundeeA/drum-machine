import React from "react";
import { useRef } from "react";

const DrumPad = (props) => {
  const btnRef = useRef(null);

  return (
    <button className="drum-pad" onClick={() => btnRef.current.play()}>
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
