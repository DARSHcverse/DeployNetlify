import React from "react";
import Image from "../Img";
import FirstSec from "../firstsec";
import SecondSec from "../secondsec";
import ThirdSec from "../thirdsec";
import BTN from "../btn";
import CUSPAGE from "../cuspage";
import CUPAGESEC from "../cupagesec";
import CUPAGETHI from "../cupagethi";
import BTN2 from "../btn2";
import EMAIL from "../email";
import LastSec from "../lastsec";
import DEVLINK from "../devlink";

function Home() {
    return (
        <div>
            <Image />
            <div className="Container">
                <FirstSec />
                <SecondSec />
                <ThirdSec />
            </div>
            <BTN/>
            <div className="Container">
                <CUPAGESEC/>
                <CUSPAGE/>
                <CUPAGETHI/>
            </div>
            <BTN2/>
            <EMAIL/>

            <div className="ContainerL">
                <LastSec/>
            </div>
            <div className="CenterDev">
                <DEVLINK/>
            </div>
        </div>
    ) 
}

export default Home