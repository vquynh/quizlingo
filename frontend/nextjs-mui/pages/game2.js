import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  MobileStepper,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import theme from "../src/theme";
import { fragen } from "../src/fragen";

export default function TextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [progress, setProgress] = React.useState(100);
  const maxSteps = fragen.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const optionStyle = {
    backgroundColor: theme.palette.lightgray.lighter,
    padding: 16,
    borderRadius: 16,
  };

  // Set countdown to 10 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = 0.1;
        const newProgress = Math.floor((oldProgress - diff) * 10) / 10;
        if (newProgress < -10) {
          console.log("Zeit abgelaufen!");
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function answersBackground(index) {
    selectedAnswer = setSelectedAnswer(index);
    const rightAnswer = fragen[activeStep].correctAnswer;
    const answers = document.querySelectorAll(".example");
    setProgress(0);

    if (index === rightAnswer) {
      answers[index].style.backgroundColor = "green";
      setScore(score + 1);
    } else {
      answers[index].style.backgroundColor = "red";
      answers[rightAnswer].style.backgroundColor = "green";
    }

    setTimeout(function () {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      answers[index].style.backgroundColor = theme.palette.lightgray.lighter;
      answers[rightAnswer].style.backgroundColor =
        theme.palette.lightgray.lighter;
    }, 2000);
  }

  return (
    <Box sx={{ mx: "auto", maxWidth: "md", flexGrow: 1, p: 2 }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          my: 2,
        }}
      />

      <Typography variant="body1">
        Dein aktueller Punktestand: {score}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography gutterBottom>{fragen[activeStep].taskText}</Typography>
      <Typography variant="h3" gutterBottom>
        {fragen[activeStep].questionText}
      </Typography>

      <Stack spacing={2}>
        {fragen[activeStep].options.map((option, index) => (
          <div
            style={optionStyle}
            id={index}
            class="example"
            onClick={() => answersBackground(index)}
          >
            {option}
          </div>
        ))}
      </Stack>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
