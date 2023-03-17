import React from "react";
import Color from "../color/Color";
import "./SandBox.scss";
import { TbMoodSadDizzy, TbPlayerStopFilled, TbPlayerStop } from "react-icons/tb";
// import { IoPlayCircleOutline, IoPlayCircle } from "react-icons/io";
import { CgDisplayGrid } from "react-icons/cg";

export default function SandBox({userAddedColors, setUserAddedColors}) {
    const mySandBoxColors = userAddedColors.map(color => {
        return <Color key={color.id} color={color.hex} />
    })

    function handleEmptyClick() {
        setUserAddedColors([])
    }
    
    return (
        <div className="sandbox">
            <div className="grid-box">
                {mySandBoxColors}
            </div>
            <button className="delete-my-colors" onClick={handleEmptyClick}>Empty My SandBox</button>
        </div>
    );
}