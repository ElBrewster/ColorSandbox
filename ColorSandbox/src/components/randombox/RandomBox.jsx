import React from "react";
import "./RandomBox.scss";
import Color from "../color/Color";

export default function RandomBox({setRandomColor, myColorData, randomColor}) {

//we might need to have access to all data sets instead of just myColorData, or clarify what is randomized through UI display
//we could pass everything here and spread it into a monster array? is that mutating state though? just map it into something new?
    function handleClickRandom() {
        const getOneColorNum = Math.floor(Math.random() * myColorData.length + 1);
        const oneColor = myColorData.find(color => color.id === getOneColorNum);
        setRandomColor(oneColor);
        console.log("oneColor", oneColor)
    }

    return(
        <div className="random-color-box">
          <button className="show-one-color" onClick={handleClickRandom}>Get One</button>
          <Color key={randomColor.id} color={randomColor.hex}/>
        </div>
    );
}