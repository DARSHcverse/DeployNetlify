import React from "react";
import { Link } from "react-router-dom";

function EXP() {
  return (
    <div className="Cont">
      <p className="Header">&nbsp;&nbsp;&nbsp;Experience</p>
      <p className="Exp">
        This section is designed based on the type of the job. <br />
        It could be developed by conditional rendering.
      </p>
      <p>
        Experienced in &nbsp;&nbsp;
        <input type="text" name="Exp" className="Textbox" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        For at least
        <input type="text" name="Exp" className="Textbox" />
        <br /><br />
        <button className="pay"><Link to="/pay" style={{ textDecoration: 'none'}}> Pay </Link></button>
      </p>
    </div>
  );
}

export default EXP;
