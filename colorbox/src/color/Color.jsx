import React from "react";
import "./Color.scss";

export default function Color({color}) {
    const defaultColor = "#1e9bf0";



    function handleMouseOver(){
        console.log("oh waoh mouse over");
        //change the color hex in some way using JavaScript string handling. Maybe just reverse it?
        //you could do so many things with this, reverse, add 2, RGB converter and make a value 0 (or figure out the hex rgb relationship)
    }

    return(
        <section className="color-box" onMouseOver={handleMouseOver} style={{backgroundColor: color ? color :"#1e9bf0"}}>
            {/* style={{display: preprocessCSS.color ? "block" : "none"}} */}

        </section>
    );
}