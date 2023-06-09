import { useState } from "react";
import "./Form.scss";
import { nanoid } from "nanoid";
import Color from "../color/Color";

type FormProps = {
  setUserAddedColors: Function;
};

export default function Form({ setUserAddedColors }: FormProps) {
  const [inputColor, setInputColor] = useState("");
  const [submittedColor, setSubmittedColor] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const hashHex = "#" + inputColor;
    const newColor = { id: nanoid(), hex: hashHex };
    setSubmittedColor(newColor);
    setUserAddedColors((prevColors) => {
      const look = prevColors.find(
        (prevColor) => prevColor.hex === submittedColor.hex
      );
      if (look) {
        return prevColors;
      } else {
        return [...prevColors, newColor];
      }
    });
    clearInput();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const result = e.target.value.replace(/[^a-z0-9]/gi, "");
    setInputColor(result);
  }

  function clearInput() {
    console.log("");
    //don't forget to add clear form functionality!
  }

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="hex" className="hex-input-label">
          #&nbsp;
        </label>
        <input
          type="text"
          name="hex"
          id="hex"
          placeholder="FF8F8F"
          minLength="6"
          maxLength="6"
          pattern="[a-zA-Z0-9-]+"
          required
          className="color-input"
          onChange={handleChange}
          value={inputColor}
        />
      </div>
      <button className="submit-button">Add One</button>
      <div className="color-preview">
        <Color
          key={submittedColor.id}
          id={submittedColor.id}
          color={submittedColor.hex}
          setUserAddedColors={setUserAddedColors}
        />
      </div>
    </form>
  );
}
