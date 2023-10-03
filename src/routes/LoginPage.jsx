import React from "react";
import NavBar from "../navigation";
import Login from "../login";
import { Outlet } from "react-router-dom";

function LOGIN() {
    return (
        <div>
            <Login/>
        </div>
    ) 
}

export default LOGIN