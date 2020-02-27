import React from "react";
import "./Image.css";

function Image(props) {
  return <img src={props.src} alt={props.alt} onClick={props.onClick} />;
}

export default Image;
