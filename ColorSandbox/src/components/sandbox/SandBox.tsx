import { useState } from "react";
import Color from "../color/Color";
import "./SandBox.scss";

type SandBoxProps = {
  userAddedColors: object[];
  setUserAddedColors: Function;
};

export default function SandBox({
  userAddedColors,
  setUserAddedColors,
}: SandBoxProps) {
  const [currentSandBox] = useState(userAddedColors);

  const mySandBoxColors = userAddedColors.map((color) => {
    return (
      <Color
        key={color.id}
        id={color.id}
        color={color.hex}
        setUserAddedColors={setUserAddedColors}
        currentSandBox={currentSandBox}
      />
    );
  });

  function handleEmptyClick() {
    setUserAddedColors([]);
  }
  //add functionality to remove item from local storage here? or in Color component?
  return (
    <div className="sandbox">
      <div className="grid-box">{mySandBoxColors}</div>
      <button className="delete-my-colors" onClick={handleEmptyClick}>
        Empty My SandBox
      </button>
    </div>
  );
}
