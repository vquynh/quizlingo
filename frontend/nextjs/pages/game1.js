import React, { useState } from "react";
import { Avatar, Box, LinearProgress, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SpainPic from "../public/spain-bg.jpg";
import { bgWrap, mobile } from "../styles.module.css";
import { questions } from "../src/questions";

export async function getStaticProps(context) {
  const res = await fetch(`https://quizlingo-backend.herokuapp.com/questions`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Game({ data }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const diff = 10000;
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const [progress, setProgress] = React.useState(100);

  // Set countdown to 10 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = 0.1;
        const newProgress = Math.floor((oldProgress - diff) * 10) / 10;
        console.log(newProgress);
        if (newProgress < -10) {
          console.log("Zeit abgelaufen!");
          clearInterval(timer);
          const nextQuestion = currentQuestion + 1;
        }
        return newProgress;
      });
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className={bgWrap}>
        <Image
          alt="SpainPic"
          src={SpainPic}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={mobile}>
        <Box
          sx={{
            backgroundColor: "white",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            boxShadow: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                sx={{ width: 56, height: 56, mr: 1, boxShadow: 2 }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box typography="body2">Claire</Box>
                <Box typography="h3">{score}</Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Box typography="body2">Marc</Box>
                <Box typography="h3">0</Box>
              </Box>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                sx={{ width: 56, height: 56, ml: 2, boxShadow: 2 }}
              />
            </Box>
          </Box>

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            mt: 4,
            height: 600,
            width: 600,
            zIndex: "tooltip",
            position: "absolute",
            top: "10vh",
            borderRadius: 4,
            boxShadow: 8,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              p: 2,
            }}
          >
            <Typography
              variant="questionNr"
              gutterBottom
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Pregunta {currentQuestion + 1} de {questions.length}
            </Typography>

            <Box
              typography="h4"
              sx={{
                height: 120,
              }}
            >
              {questions[currentQuestion].questionText}
            </Box>

            <Stack spacing={2}>
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <Box
                    id={"box" + index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
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
                      {answerOption.answerText}
                    </Box>
                  </Box>
                )
              )}
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Avatar
                sx={{ mr: 1 }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              />
              <Avatar
                sx={{ mr: 1 }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
              />
              <Box typography="body1">eingeloggt</Box>
            </Box>

            <Box sx={{ pt: 12 }}>
              {showScore ? (
                <Box typography="body1" color="white">
                  Du hast {score} von {questions.length} Punkten erreicht.
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            color: "text.primary",
            p: 2,
            position: "absolute",
            top: "16vh",
            mx: 4,
            zIndex: "modal",
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: 8,
            height: 600,
            width: 600 - 64,
          }}
        ></Box>
        <Box
          sx={{
            bgcolor: "white",
            color: "text.primary",
            p: 2,
            position: "absolute",
            top: "17.5vh",
            mx: 8,
            zIndex: "drawer",
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: 8,
            height: 600,
            width: 600 - 128,
          }}
        ></Box>
      </div>
    </div>
  );
}
