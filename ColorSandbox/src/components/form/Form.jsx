import React, { useState } from "react";
import "./Form.scss";

export default function Form({setUserAddedColors}) {
    const [inputColor, setInputColor] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setUserAddedColors(prevState => {
            return [...prevState,
                {
                    id: Date.now(),
                    hex: inputColor
                }
            ];
        })
    }
    
    function handleChange(e) {
        const result = e.target.value.replace(/[^a-z0-9]/gi, "");
        setInputColor(result)
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
            <button className="submit-button" >Add One</button>
        </form>
    );
}