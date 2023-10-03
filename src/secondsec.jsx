import React from "react";
import Draggable from "react-draggable";

function SecondSec() {
  return (
    <div class="Second_Section">
            <a href=""><img src={require('./Image/AdobeStock_241083104-540x420.jpg.webp')}  alt="Pic2" className="pic"/></a>
            <p className="name">Darshan S</p>
            <p className="P">Deakin Student in Australia studying Computer Science,
                he is better devveloper
                e.g., C#, javascript, React
                c++ and java.
            </p>
            <p> <img src={require('./Image/pngtree-star-vector-icon-png-image_3725282.jpg')} alt="star" className="star"/>5</p>
    </div>
  );
}
export default SecondSec