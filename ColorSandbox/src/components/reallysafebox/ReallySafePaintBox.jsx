import React, { useState } from "react";
import Color from "../color/Color";
import "./ReallySafePaintBox.scss";

export default function ReallySafePaintBox({myReallySafeColors}) {
    const [clickReallySafe, setClickReallySafe] = useState(false);

    function handleClickGetReallySafeColors() {
        setClickReallySafe(prevState => !prevState);
    }
    
    const mapReallySafeColors = myReallySafeColors.map(color => {
        return <Color key={color.id} color={color.hex} />
    })

    const showReallySafeColors = clickReallySafe === true ? mapReallySafeColors : "";
    const toggleReallySafeButtonText = clickReallySafe === true ? 'Hide "Really Safe" Colors' : 'Get "Really Safe" Colors';

    return (
        <div className="really-safe-paintbox">
            <button className="get-really-safe-colors" onClick={handleClickGetReallySafeColors}>{toggleReallySafeButtonText}</button>
            <div className="grid-box">
                {showReallySafeColors}
            </div>
        </div>
    );
}