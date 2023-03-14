import { useState } from 'react'
import './App.scss';
import Color from "../color/Color"
import colorData from  "../../data/data";
import Form from '../form/Form';
import Window from '../window/Window';
import Header from '../header/Header';
import RandomBox from '../randombox/RandomBox';
import PaintBox from '../paintbox/PaintBox';

export default function App() {
  const [randomColor, setRandomColor] = useState("");
  const [myColorData] = useState(colorData);
  const [userAddedColors, setUserAddedColors] = useState([])

  return (
    <div className="App">
      <div className="top-container">
        <RandomBox setRandomColor={setRandomColor} randomColor={randomColor} myColorData={myColorData}/>
        <div className="form-container">
          <Form />
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
