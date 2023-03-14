import React, { useState } from "react";
import "./Form.scss";

export default function Form() {
    const [inputColor, setInputColor] = useState({hex: ""});
//need regex [a-z] \d
    function handleSubmit(e) {
        e.preventDefault();
        // we want to submit this: {id: Date.Now(), hex:""}
        if((inputColor.hex.length === 3) || (inputColor.hex.length === 6)) {
            console.log("inputColor.hex.length: ", inputColor.hex)
//maybe ignore the 3 character option and hope that people who know about that will also to double them to their 6 character equivalent
        }

    }
    
    function handleChange(e) {
        const result = e.target.value.replace(/[^a-z0-9]/gi, "");
        setInputColor({hex: result})
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
                    value={inputColor.hex}
                />
            </div>
            <button className="submit-button" >Add One</button>
        </form>
    );
}