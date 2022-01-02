import React, { useState } from "react";
import {
  Box,
  MobileStepper,
  Stack,
  Stepper,
  Typography,
  Button,
} from "@mui/material";
import { fragen } from "../src/fragen";

export default function TextMobileStepper() {
  const showAll = false;
  const [activeStep, setActiveStep] = React.useState(0);
  const [reveal, setReveal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const maxSteps = fragen.length;

  function meinTimeout() {
    setReveal(true);

    setTimeout(function () {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setReveal(false);
    }, 3000);
  }

  function answersBackground(index) {
    selectedAnswer = setSelectedAnswer(index);
    const rightAnswer = fragen[activeStep].correctAnswer;
    const answers = document.querySelectorAll(".example");
    answers[rightAnswer].style.backgroundColor = "green";
    if (index != rightAnswer) {
      answers[index].style.backgroundColor = "red";
    }
    setTimeout(function () {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setReveal(false);
      answers[index].style.backgroundColor = "";
      answers[rightAnswer].style.backgroundColor = "";
    }, 2000);
  }

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1, p: 2 }}>
      <Typography gutterBottom>{fragen[activeStep].taskText}</Typography>
      <Typography variant="h3">{fragen[activeStep].questionText}</Typography>
      {fragen[activeStep].options.map((option, index) => (
        <p id={index} class="example" onClick={() => answersBackground(index)}>
          {option}
        </p>
      ))}
      {showAll ? (
        <React.Fragment>
          <Button onClick={answersBackground}>Button</Button>
          <Stack spacing={2}>
            {fragen[activeStep].options.map((option, index) => (
              <Box
                class="example"
                id={index}
                onClick={meinTimeout}
                sx={{
                  display: "flex",
                  boxShadow: 0,
                  p: 2,
                  backgroundColor: "lightgray.lighter",
                  borderRadius: 4,
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Box
                  typography="body1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {option}
                </Box>
              </Box>
            ))}
          </Stack>
        </React.Fragment>
      ) : (
        ""
      )}

      <Stepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}
