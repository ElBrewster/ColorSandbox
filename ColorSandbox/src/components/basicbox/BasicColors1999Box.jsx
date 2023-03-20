import React, { useState } from "react"; 
import Color from "../color/Color";
import "./BasicColors1999Box.scss";

export default function BasicColors1999Box({ myBasicColors1999, setUserAddedColors }) {
    const [clickBasic, setClickBasic] = useState(false);

    function handleClickGetBasicColors() {
        setClickBasic(prevState => !prevState);
    }

    const mapBasicColors = myBasicColors1999.map(color => {
        return <Color key={color.id} id={color.id} color={color.hex} setUserAddedColors={setUserAddedColors}/>
    });

    const showMyBasicColors = clickBasic === true? mapBasicColors : "";
    const toggleBasicColorsButtonText = clickBasic === true ? 'Hide "Basic 1999" Colors' : 'Get "Basic 1999" Colors';

    return(
        <div className="basic-paintbox">
            <button className="get-basic-colors" onClick={handleClickGetBasicColors}>{toggleBasicColorsButtonText}</button>
            <div className="grid-box">
                {showMyBasicColors}
            </div>
        </div>
    );
}