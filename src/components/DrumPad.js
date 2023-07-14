import React, { useState } from "react";
import { useRef } from "react";

const DrumPad = (props) => {
  const btnRef = useRef(null);

   const [isClicked, setClicked] = useState(false);
     
    function clicked(){
      setClicked(true); 
      setTimeout(() => {
        setClicked(false);
      }, 200);
    }

  return (
    <button className={isClicked ? 'drum-pad clicked' : 'drum-pad'} id={props.title} onClick={() => {props.btnClick(btnRef.current, props.title); clicked()}}>
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
