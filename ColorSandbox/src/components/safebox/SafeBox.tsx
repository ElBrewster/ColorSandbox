import { useState } from "react";
import Color from "../color/Color";
import "./SafeBox.scss";

type SafeProps = {
  mySafeColors: object[];
  setUserAddedColors: Function;
};

export default function SafeBox({
  mySafeColors,
  setUserAddedColors,
}: SafeProps) {
  const [clickSafe, setClickSafe] = useState(false);

  function handleClickGetSafeColors() {
    setClickSafe((prevState) => !prevState);
  }

  const mapSafeColors = mySafeColors.map((color) => {
    return (
      <Color
        key={color.id}
        id={color.id}
        color={color.hex}
        setUserAddedColors={setUserAddedColors}
      />
    );
  });

  const showMySafeColors = clickSafe === true ? mapSafeColors : "";
  const toggleSafeColorsButtonText =
    clickSafe === true ? 'Hide "Safe" Colors' : 'Get "Safe" Colors';
  return (
    <div className="safe-paintbox">
      <button
        className="get-really-safe-colors"
        onClick={handleClickGetSafeColors}
      >
        {toggleSafeColorsButtonText}
      </button>
      <div className="grid-box">{showMySafeColors}</div>
    </div>
  );
}
