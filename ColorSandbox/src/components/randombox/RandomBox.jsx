import React from "react";
import "./RandomBox.scss";
import Color from "../color/Color";

export default function RandomBox({setRandomColor, randomColor, allStateColors, setUserAddedColors}) {

    function handleClickRandom() {
        const indexNum = Math.floor(Math.random() * allStateColors.length)
        const oneColor = allStateColors.at(indexNum);
        setRandomColor(oneColor);
        console.log("random color:", oneColor)
    }

    return(
        <div className="random-color-box">
          <button className="show-one-color" onClick={handleClickRandom}>Get One</button>
          <Color key={randomColor.id} id={randomColor.id} color={randomColor.hex} setUserAddedColors={setUserAddedColors}/>
        </div>
    );
}