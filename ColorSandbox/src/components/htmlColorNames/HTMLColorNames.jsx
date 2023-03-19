import React, { useState } from "react";
import Color from "../color/Color";
import "./HTMLColorNames.scss";

export default function HTMLColors({myHTMLColors, setUserAddedColors}) {
    const [clickHTMLColors, setClickHTMLColors] = useState(false);

    function handleClickGetHTMLColors() {
        setClickHTMLColors(prevState => !prevState);
    }

    const mapHTMLColors = myHTMLColors.map(color => {
        return <Color key={color.id} id={color.id} color={color.hex} setUserAddedColors={setUserAddedColors}/>
    });

    const showMyHTMLColors = clickHTMLColors === true ? mapHTMLColors : "";
    const toggleHTMLColorsButtonText = clickHTMLColors === true ? "Hide Named HTML Colors" : "Get HTML Named Colors";

    return (
        <div className="html-paintbox">
            <button className="get-html-colors" onClick={handleClickGetHTMLColors}>{toggleHTMLColorsButtonText}</button>
            <div className="grid-box">
                {showMyHTMLColors}
            </div>
        </div>
    );
}