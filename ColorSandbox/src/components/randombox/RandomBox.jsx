import React from "react";
import "./RandomBox.scss";
import Color from "../color/Color";

export default function RandomBox({setRandomColor, myColorData, randomColor}) {

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