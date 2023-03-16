import { useEffect, useState } from 'react'
import './App.scss';
import elColors from  "../../data/elColors";
import basicColors1999 from '../../data/basicColors1999';
import reallySafeColors from '../../data/reallySafeColors';
import webSafe216Colors from "../../data/webSafe216Colors";
import Form from '../form/Form';
import Window from '../window/Window';
import Header from '../header/Header';
import RandomBox from '../randombox/RandomBox';
import PaintBox from '../paintbox/PaintBox';
import ReallySafePaintBox from '../reallysafebox/ReallySafePaintBox';
import SafeBox from '../safebox/SafeBox';
import BasicColors1999Box from '../basicbox/BasicColors1999Box';

export default function App() {
  const [randomColor, setRandomColor] = useState("");
  const [myColorData] = useState(elColors);
  const [myBasicColors1999] = useState(basicColors1999);
  const [mySafeColors] = useState(webSafe216Colors);
  const [myReallySafeColors] = useState(reallySafeColors);
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
      {/* //clicked Color boxes should be saved in local storage and kept "clicked" */}
      <PaintBox myColorData={myColorData} />
      <BasicColors1999Box myBasicColors1999={myBasicColors1999} />
      <SafeBox mySafeColors={mySafeColors} />
      <ReallySafePaintBox myReallySafeColors={myReallySafeColors} />
    </div>
  );
}
