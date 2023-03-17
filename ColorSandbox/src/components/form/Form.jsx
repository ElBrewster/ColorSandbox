import React, { useState } from "react";
import "./Form.scss";
import { nanoid } from "nanoid";
import Color from "../color/Color";

export default function Form({setUserAddedColors}) {
    const [inputColor, setInputColor] = useState("");
    const [submittedColor, setSubmittedColor] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const hashHex = "#" + inputColor;
        const newColor = {id: nanoid(), hex: hashHex};
        setSubmittedColor(newColor);
        setUserAddedColors(prevState => {
            return [...prevState, newColor];
        });
        clearInput();
    }

    function handleChange(e) {
        const result = e.target.value.replace(/[^a-z0-9]/gi, "");
        setInputColor(result)
    } 

    function clearInput() {
        console.log("")
    }

    return(
            <form className="my-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="hex" className="hex-input-label">#&nbsp;</label>
                    <input 
                        type="text" 
                        name="hex" 
                        id="hex"
                        placeholder="FF8F8F" 
                        minLength="6"
                        maxLength="6"
                        pattern="[a-zA-Z0-9-]+" required
                        className="color-input" 
                        onChange={handleChange}
                        value={inputColor}
                    />
                </div>
                <button className="submit-button">Add One</button>
                <div className="color-preview">
                    <Color id={submittedColor.id} color={submittedColor.hex}/>
                </div>
            </form>
    );
}