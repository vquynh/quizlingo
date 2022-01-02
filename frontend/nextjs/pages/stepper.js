import React, { useState } from "react";
import {
  Box,
  MobileStepper,
  Stack,
  Stepper,
  Typography,
  Button,
} from "@mui/material";
import { fragen } from "./fragen";

const antworten = ["A", "B", "C", "D"];

export default function TextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = fragen.length;

  const [reveal, setReveal] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  function meinTimeout() {
    setReveal(true);

    setTimeout(function () {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setReveal(false);
    }, 3000);
  }

  function revealAnswer() {
    return (
      <Box>Die richtige Antwort lautet: {fragen[activeStep].correctAnswer}</Box>
    );
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = React.useState(100);

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Typography>{fragen[activeStep].questionText}</Typography>

      <Stack spacing={2}>
        {fragen[activeStep].options.map((option, index) => (
          <Box
            id={index}
            onClick={meinTimeout}
            sx={{
              display: "flex",
              boxShadow: 0,
              px: 1,
              py: 1,
              backgroundColor: "lightgray.lighter",
              borderRadius: 4,
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Box
              typography="h1"
              sx={{
                display: "flex",
                color: "#B89614",
                backgroundColor: "white",
                boxShadow: 0,
                borderRadius: 12,
                width: 56,
                height: 56,
                fontSize: 32,
                fontWeight: 400,
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
              }}
            >
              {antworten[currentQuestion]}
            </Box>

            <Box
              typography="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {option}
            </Box>
          </Box>
        ))}
      </Stack>

      <Box>{reveal ? revealAnswer() : ""}</Box>

      <Stepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}
