import React, { useState } from "react";
import "./Color.scss";

export default function Color({color}) {
    const [myHover, setMyHover] = useState(false);
    const [myClick, setMyClick] = useState(false);

    const toggleHexOnClick = myClick === true ? <p className="click-color-hex" style={{alignSelf: "end"}}>{color}</p> : null;

    const toggleHexOnHover = myHover === true ? <p className="click-color-hex" style={{alignSelf: "end", opacity: ".6"}}>{color}</p> : null;

    const handleClick = () => {
        setMyClick(prevClick => !prevClick);

        if((myHover && !myClick) || (!myHover && myClick)) {
            setMyHover(true)
        }
    }

    const handleMouseEnter = () => {
        if(myClick){
            return;
        }
        setMyHover(true);
    }

    const handleMouseLeave = () => {
        setMyHover(false);
    }

    return(
        <div className="color-box stacked" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: color ? color :"#DCDCDC"}}>
            {toggleHexOnClick}
            {toggleHexOnHover}
        </div>
    );
}

//keep track of what you want to show up and when you want it to show up
//conditional rendering
//could do a toggle that happens with the click
//the this && this conditional rendering
