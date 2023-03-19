import React, { useState } from "react";
import { BiGhost, BiPlus, BiMinus } from "react-icons/bi";
import { TbMoodSadDizzy, TbPlayerStopFilled, TbPlayerStop } from "react-icons/tb"
// import { IoPlayCircleOutline, IoPlayCircle } from "react-icons/io";
import { CgDisplayGrid } from "react-icons/cg";
//how do display something when no color is rendered? for boo box?
import "./Color.scss";

export default function Color({color}) {
    const [myHover, setMyHover] = useState(false);
    const [myClick, setMyClick] = useState(false);
    const [ghostClick, setMyGhostClick] = useState(false);
    const [myAdd, setMyAdd] = useState(true);

    const toggleHexOnClick = myClick === true ? <p className="click-color-hex" style={{alignSelf: "end"}}>{color}</p> : null;

    const toggleHexOnHover = myHover === true ? <p className="click-color-hex" style={{alignSelf: "end", opacity: ".6"}}>{color}</p> : null;

    const toggleAddOrRemove = myAdd === true ? <button className="plus-button"><BiPlus className="plus-button-icon"/></button> : <button className="minus-button"><BiMinus className="minus-button-icon"/></button>;


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

    const handleButtonClick = (e) => {
        e.stopPropagation();
        setMyGhostClick(prevState => !prevState);
    }

    return(
        <div className="color-box stacked" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: color ? color : "#DCDCDC", color: ghostClick ? "#FFFFFF" : "inherit"}}>
            <div className="button-container">
                <button className="ghost-button" onClick={handleButtonClick}><BiGhost className="ghost-button-icon" style={{color: ghostClick ? "#FFFFFF" : "inherit"}}/></button>
                {toggleAddOrRemove}
            </div>
            {toggleHexOnClick}
            {toggleHexOnHover}
        </div>
    );
}

//keep track of what you want to show up and when you want it to show up
//conditional rendering
//could do a toggle that happens with the click
//the this && this conditional rendering
