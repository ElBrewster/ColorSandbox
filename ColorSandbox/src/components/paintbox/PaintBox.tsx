import { useState } from "react";
import "./PaintBox.scss";
import Color from "../color/Color";

type PaintBoxProps = {
  myColorData: object[];
  setUserAddedColors: Function;
};

export default function PaintBox({
  myColorData,
  setUserAddedColors,
}: PaintBoxProps) {
  const [clickPaintBox, setClickPaintBox] = useState(false);

  function handleClickGetPaintBox() {
    setClickPaintBox((prevState) => !prevState);
  }

  const mapColors = myColorData.map((color) => {
    return (
      <Color
        key={color.id}
        id={color.id}
        color={color.hex}
        setUserAddedColors={setUserAddedColors}
      />
    );
  });

  const showPaintBox = clickPaintBox === true ? mapColors : "";
  const toggleButtonText =
    clickPaintBox === true ? "Hide El's PaintBox" : "Get El's PaintBox";

  return (
    <div className="my-paint-box">
      <button className="get-my-colors" onClick={handleClickGetPaintBox}>
        {toggleButtonText}
      </button>
      <div className="grid-box">{showPaintBox}</div>
    </div>
  );
}
