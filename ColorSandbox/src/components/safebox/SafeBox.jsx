import React, { useState } from "react";
import Color from "../color/Color";
import "./SafeBox.scss";

export default function SafeBox({mySafeColors}) {
    const [clickSafe, setClickSafe] = useState(false);

    function handleClickGetSafeColors() {
        setClickSafe(prevState => !prevState);
    }

    const mapSafeColors = mySafeColors.map(color => {
        return <Color key={color.id} color={color.hex} />
    });

    const showMySafeColors = clickSafe === true ? mapSafeColors : "";
    const toggleSafeColorsButtonText = clickSafe === true ? 'Hide "Safe" Colors' : 'Get "Safe" Colors';
    return(
        <div className="really-safe-paintbox" onClick={handleClickGetSafeColors}>
            <button className="get-really-safe-colors">{toggleSafeColorsButtonText}</button>
            <div className="grid-box">
                {showMySafeColors}
            </div>
        </div>
    );
}
