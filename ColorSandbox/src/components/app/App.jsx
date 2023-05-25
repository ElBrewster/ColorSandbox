import { useEffect, useState, useContext } from "react";
import "./App.scss";
import elColors from "../../data/elColors";
import basicColors1999 from "../../data/basicColors1999";
import reallySafeColors from "../../data/reallySafeColors";
import webSafe216Colors from "../../data/webSafe216Colors";
import htmlColorNames140 from "../../data/htmlColorNames140";
import Form from "../form/Form";
import Window from "../window/Window";
import Header from "../header/Header";
import RandomBox from "../randombox/RandomBox";
import PaintBox from "../paintbox/PaintBox";
import ReallySafePaintBox from "../reallysafebox/ReallySafePaintBox";
import SafeBox from "../safebox/SafeBox";
import BasicColors1999Box from "../basicbox/BasicColors1999Box";
import SandBox from "../sandbox/SandBox";
import HTMLColors from "../htmlColorNames/HTMLColorNames";

export default function App() {
  const [randomColor, setRandomColor] = useState("");
  const [myColorData] = useState(elColors);
  const [myBasicColors1999] = useState(basicColors1999);
  const [mySafeColors] = useState(webSafe216Colors);
  const [myReallySafeColors] = useState(reallySafeColors);
  const [myHTMLColors] = useState(htmlColorNames140);
  const [userAddedColors, setUserAddedColors] = useState(
    () => JSON.parse(localStorage.getItem("userAddedColors")) || []
  );
  const [allStateColors, setAllStateColors] = useState([
    ...myColorData,
    ...myBasicColors1999,
    ...mySafeColors,
    ...myReallySafeColors,
    ...myHTMLColors,
    ...userAddedColors,
  ]);

  //use setAllStateColors to add in new sumbissions

  useEffect(() => {
    localStorage.setItem("userAddedColors", JSON.stringify(userAddedColors));
  }, [userAddedColors]);

  return (
    <div className="App">
      <div className="top-container">
        <div className="random-color-wrapper">
          <RandomBox
            setRandomColor={setRandomColor}
            randomColor={randomColor}
            allStateColors={allStateColors}
            setUserAddedColors={setUserAddedColors}
          />
          <button>toggle gray context</button>
        </div>
        <div className="form-wrapper">
          <Form
            userAddedColors={userAddedColors}
            setUserAddedColors={setUserAddedColors}
          />
        </div>
        <div className="window-sizer-wrapper">
          <Window />
          <Header />
        </div>
      </div>
      <div className="top-right-wrapper">
        <SandBox
          userAddedColors={userAddedColors}
          setUserAddedColors={setUserAddedColors}
        />
      </div>
      <div className="color-boxes-wrapper">
        <PaintBox
          myColorData={myColorData}
          setUserAddedColors={setUserAddedColors}
        />
        <BasicColors1999Box
          myBasicColors1999={myBasicColors1999}
          setUserAddedColors={setUserAddedColors}
        />
        <ReallySafePaintBox
          myReallySafeColors={myReallySafeColors}
          setUserAddedColors={setUserAddedColors}
        />
        <SafeBox
          mySafeColors={mySafeColors}
          setUserAddedColors={setUserAddedColors}
        />
        <HTMLColors
          myHTMLColors={myHTMLColors}
          setUserAddedColors={setUserAddedColors}
        />
      </div>
    </div>
  );
}
