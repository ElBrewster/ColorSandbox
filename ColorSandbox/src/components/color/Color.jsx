import React, { useState } from "react";
import { BiGhost, BiPlus, BiMinus } from "react-icons/bi";
import { TbMoodSadDizzy, TbPlayerStopFilled, TbPlayerStop } from "react-icons/tb"

import { CgDisplayGrid } from "react-icons/cg";
//how do display something when no color is rendered? for boo box? Add a 'boo' button to form display that will make a list in local storage that cannot be deleted, and user is prevented from entering those combos
import "./Color.scss";

export default function Color({color, id, setUserAddedColors}) {
    const [myHover, setMyHover] = useState(false);
    const [myClick, setMyClick] = useState(false);
    const [ghostClick, setMyGhostClick] = useState(false);
    const [myAdd, setMyAdd] = useState(true);

    const toggleHexOnClick = myClick === true ? <p className="click-color-hex" style={{alignSelf: "end"}}>{color}</p> : null;

    const toggleHexOnHover = myHover === true ? <p className="click-color-hex" style={{alignSelf: "end", opacity: ".6"}}>{color}</p> : null;

    const toggleAddOrRemove = myAdd === true ? <BiPlus className="plus-button-icon"/> : <BiMinus className="minus-button-icon"/>


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

    const handleAddClick = (e) => {
        e.stopPropagation();
        setMyAdd(prevState => !prevState);
        setUserAddedColors(prevColors => {
            if (!color ) {
                return prevColors;
            }

            const look = prevColors.find(prevColor => prevColor.hex === color);
            const lookAgain = prevColors.find(prevColor => prevColor.id === id);

            console.log("look: ", look)
            if (look || lookAgain) {
                setMyAdd(false);
                return prevColors;
            } else {
                setMyAdd(false);
                console.log("prevColors before adding new one", prevColors);
                return [...prevColors, {id: id, hex: color}];
            }
        })
    }
    
    return(
        <div className="color-box stacked" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: color ? color : "#DCDCDC", color: ghostClick ? "#FFFFFF" : "inherit"}}>
            <div className="button-container">
                <button className="ghost-button" onClick={handleButtonClick}><BiGhost className="ghost-button-icon" style={{color: ghostClick ? "#FFFFFF" : "inherit"}}/></button>
                <button className="plus-button" onClick={handleAddClick}>{toggleAddOrRemove}</button>
            </div>
            {toggleHexOnClick}
            {toggleHexOnHover}
        </div>
    );
}

