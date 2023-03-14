import { useState } from 'react'
import './App.scss';
import Color from "../color/Color"
import colorData from  "../../data/data";
import Form from '../form/Form';
import Window from '../window/Window';
import Header from '../header/Header';
import RandomBox from '../randombox/RandomBox';

function App() {
  const [randomColor, setRandomColor] = useState("");
  const [myColorData] = useState(colorData);
  const [userAddedColors, setUserAddedColors] = useState([])

  const mapColors = myColorData.map(color => {
    return <Color key={color.id} color={color.hex}/>
  })

  function handleClickAll() {
    console.log("Get my colors!")
  }

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
      <div className="my-paint-box">
        <button className="get-my-colors" onClick={handleClickAll}>Get My Colors</button> 
        <div className="grid-box">
          {mapColors} 
        </div>
      </div>
    </div>
  )
}

export default App
