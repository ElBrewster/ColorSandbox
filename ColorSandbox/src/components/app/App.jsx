import { useState } from 'react'
import './App.scss';
import Color from "../color/Color"
import colorData from  "../../data/data";
import Form from '../form/Form';
import Window from '../window/Window';
import Header from '../header/Header';

function App() {
  const [myColorData, setCount] = useState(colorData);
  const [randomColor, setRandomColor] = useState("");

  const mapColors = myColorData.map(color => {
    return <Color key={color.id} color={color.hex}/>
  })

  function handleClickAll() {
    console.log("Get my colors!")
  }

  function handleClickRandom() {
    const getOneColorNum = Math.floor(Math.random() * myColorData.length + 1);
    const oneColor = myColorData.find(color => color.id === getOneColorNum);
    setRandomColor(oneColor);
    console.log("oneColor", oneColor)
  }

  return (
    <div className="App">
      <div className="top-container">
        <div className="random-color-box">
          <button className="show-one-color" onClick={handleClickRandom}>Get One</button>
          <Color key={randomColor.id} color={randomColor.hex}/>
        </div>
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
