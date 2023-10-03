import React from "react";

function LastSec(){
    return(
        <><div className="First_Section">
            <h3>For Dev</h3>
            <p>How it works</p>                         {/* REMEBER TO TO PUT LINK */}
            <p>How it create a profile</p>              {/* REMEBER TO TO PUT LINK */}
            <p>Find jobs</p>                            {/* REMEBER TO TO PUT LINK */}
        </div><div className="Second_Section">
            <h3>For Clients</h3>
            <p>How it works</p>                         {/* REMEBER TO TO PUT LINK */}
            <p>How to post a job</p>                    {/* REMEBER TO TO PUT LINK */}
            <p>Find dev</p>                             {/* REMEBER TO TO PUT LINK */}
            </div>
            <div className="Third_Section">
                <h3>Stay Connected</h3>
                <img src={require('./Image/5365678_fb_facebook_facebook logo_icon.png')} alt="Burwood Campus" className="social" />
                <img src={require('./Image/5296516_tweet_twitter_twitter logo_icon.png')} alt="Burwood Campus" className="social" />
                <img src={require('./Image/6929237_instagram_icon.png')} alt="Burwood Campus" className="social" />
                <br /></div></>
    )
}

export default LastSec;