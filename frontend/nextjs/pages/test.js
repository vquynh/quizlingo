import React, { useState } from "react";
import styles from "../styles.module.css";

export default function App() {
  const [myColor, setMyColor] = useState("blue");
  const [className, setClassName] = useState(styles.menu);

  const divStyle = {
    color: myColor,
  };

  function changeColor() {
    setMyColor("pink");
  }
  function changeFarbe() {
    setClassName(styles.menu2);
  }

  return (
    <div>
      <div style={divStyle} onClick={changeColor}>
        Hello World! Change color on click
      </div>
      <div className={className} onClick={changeFarbe}>
        Hello World! Change CSS class on click
      </div>
    </div>
  );
}
