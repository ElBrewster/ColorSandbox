import { useEffect, useState } from 'react'
import './App.scss';
import Color from "../color/Color"
import elColors from  "../../data/elColors";
import basicColors1999 from '../../data/basicColors1999';
import reallySafeColors from '../../data/reallySafeColors';
import webSafe216Colors from "../../data/webSafe216Colors";
import Form from '../form/Form';
import Window from '../window/Window';
import Header from '../header/Header';
import RandomBox from '../randombox/RandomBox';
import PaintBox from '../paintbox/PaintBox';

export default function App() {
  const [randomColor, setRandomColor] = useState("");
  const [myColorData] = useState(elColors);
  const [userAddedColors, setUserAddedColors] = useState(() => JSON.parse(localStorage.getItem("userAddedColors")) || []);

  console.log("userAddedColors: ", userAddedColors)

  useEffect(() => {
    localStorage.setItem("userAddedColors", JSON.stringify(userAddedColors))
  }, [userAddedColors])

  return (
    <div className="App">
      <div className="top-container">
        <RandomBox setRandomColor={setRandomColor} randomColor={randomColor} myColorData={myColorData}/>
        <div className="form-container">
          <Form setUserAddedColors={setUserAddedColors}/>
        </div>
        <div className="window-container">
          <Window />
        </div>
      </div>
      <Header />
      <PaintBox myColorData={myColorData}/>
    </div>
  );
}
