import React, { useState } from "react";
import "./PaintBox.scss";
import Color from "../color/Color";

export default function PaintBox({myColorData}) {
    const [clickPaintBox, setClickPaintBox] = useState(false);
    
    function handleClickGetPaintBox() {
        setClickPaintBox(prevState => !prevState);
    }
    
    const mapColors = myColorData.map(color => {
        return <Color key={color.id} color={color.hex}/>
    });

    const showPaintBox = clickPaintBox === true ? mapColors : "";
    const toggleButtonText = clickPaintBox === true ? "Hide PaintBox" : "Get PaintBox";
    
    return(
        <div className="my-paint-box">
            <button className="get-my-colors" onClick={handleClickGetPaintBox}>{toggleButtonText}</button> 
            <div className="grid-box">
                {showPaintBox} 
            </div>
        </div>
    );
}