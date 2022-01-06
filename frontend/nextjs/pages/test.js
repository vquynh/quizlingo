import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  MobileStepper,
  Stack,
  Stepper,
  Typography,
} from "@mui/material";
import { fragen } from "../src/fragen";
import styles from "../styles.module.css";

export default function App() {
  const [myColor, setMyColor] = useState("blue");
  const [className, setClassName] = useState(styles.menu);
  const [backgroundCol, setbackgroundCol] = useState("gray");
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = fragen.length;

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
      <Divider sx={{ my: 4 }} />

      <Box sx={{ backgroundColor: backgroundCol, color: "white" }}>
        Ich bin ein Test
      </Box>
      <Box onClick={() => setbackgroundCol("red")}>
        Klick mich, um die Farbe der Box rot einzufärben.
      </Box>
    </div>
  );
}
