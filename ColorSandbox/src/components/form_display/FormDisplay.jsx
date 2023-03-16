import React from "react";
import Color from "../color/Color";
import "./FormDisplay.scss";

export default function FormDisplay({inputColor, setUserAddedColors}) {
    return (
        <div className="color-preview">
            <button className="save-color-preview" >Save</button>
            <Color key={inputColor.id} color={inputColor.hex} />
        </div>
    );
}