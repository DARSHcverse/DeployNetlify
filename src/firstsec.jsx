import React from "react";
import Draggable from "react-draggable";

function FirstSec() {
  return (

    <div className="First_Section">
      <a href=""><img src={require('./Image/85.jpeg')} alt="Pic1" className="pic" /></a>
      <p className="name">Darshan S</p>
      <p className="P">Deakin Student in Australia studying Computer Science,
        he is a better developer
        e.g., C#, JavaScript, React,
        C++ and Java.
      </p>
      <p><img src={require('./Image/pngtree-star-vector-icon-png-image_3725282.jpg')} alt="Burwood Campus" className="star" />5</p>
    </div>
  );
}
export default FirstSec