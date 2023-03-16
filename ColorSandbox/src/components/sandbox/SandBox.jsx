import React from "react";
import Color from "../color/Color";
import "./SandBox.scss";

export default function SandBox({userAddedColors}) {
    const mySandBoxColors = userAddedColors.map(color => {
        return <Color key={color.id} color={color.hex} />
    })

    return (
        <div className="sandbox">
            <div className="grid-box">
                {mySandBoxColors}
            </div>
            <button className="delete-my-colors">Empty My SandBox</button>
        </div>
    );
}