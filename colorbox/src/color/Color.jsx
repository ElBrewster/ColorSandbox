import React, { useState } from "react";
import "./Color.scss";

export default function Color({color}) {
    const [myHover, setMyHover] = useState(false);
    const [myClick, setMyClick] = useState(false);

    const toggleHexOnClick = myClick === true ? <p className="click-color-hex" style={{alignSelf: "end"}}>{color}</p> : null;

    const toggleHexOnHover = myHover === true ? <p className="click-color-hex" style={{alignSelf: "end", opacity: ".7"}}>{color}</p> : null;

    const handleClick = () => {
        // console.log("clicked: ", color);
        setMyClick(prevClick => !prevClick);
        if(myHover && myClick) {
            setMyHover(false);
            console.log("1. myClick, myHover :", myClick, myHover)
            
        }
        if(myHover && !myClick) {
            setMyHover(true)
            console.log("2. myClick, myHover :", myClick, myHover)
        }
    }
    console.log("3. myClick, myHover :", myClick, myHover)

    const handleMouseEnter = () => {
        // console.log("mouse enter: ", color);
        if(myClick){
            return;
        }
        setMyHover(true);
    }

    const handleMouseLeave = () => {
        // console.log("mouse leave: ", color);
        setMyHover(false);
    }

    return(
        <div className="color-box stacked" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: color ? color :"#09c"}}>
            {toggleHexOnClick}
            {toggleHexOnHover}
        </div>
    );
}

//keep track of what you want to show up and when you want it to show up
//conditional rendering
//could do a toggle that happens with the click
//the this && this conditional rendering
