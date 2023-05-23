import React, { useEffect, useState } from "react";
import "./Window.scss";

export default function Window() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchHeight = () => setWindowHeight(window.innerHeight);

    window.addEventListener("resize", watchHeight);

    return function () {
      window.removeEventListener("resize", watchHeight);
    };
  }, [windowHeight]);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  return (
    <section className="window-size-box">
      <h4 className="sizer">Window Sizer Checker</h4>
      <p className="window-height">
        {windowHeight}
        <span className="px-span">&nbsp;px</span>
        &nbsp;height
      </p>
      <p className="window-width">
        {windowWidth}
        <span className="px-span">&nbsp;px</span>
        &nbsp;width
      </p>
    </section>
  );
}

//thanks and credit to Bob Ziroll for some of this walkthrough <3
