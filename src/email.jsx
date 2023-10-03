import React from "react";


function EMAIL(){

  return (
    <div>
      <form action="/" method="post">
        <h4 className="contain">SIGN UP FOR OUR DAILY INSIDER
          <input className="inpt" type="Email" name="Email" id="Email" placeholder="Enter your email" />
        </h4>
        <button className="BTN" type="submit">Subscribe</button>
      </form>
      <br /><br />
    </div>
  );
}

export default EMAIL;