import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TimerIcon from "@mui/icons-material/Timer";

const antworten = ["A", "B", "C", "D"];

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
  const questions = [
    {
      questionText:
        "Du möchtest sagen, dass du Antonio kennengelernt hast. Welcher Ausdruck ist hierfür korrekt?",
      answerOptions: [
        { answerText: "Conocía a Antonio.", isCorrect: false },
        { answerText: "Conocí a Antonio.", isCorrect: true },
        { answerText: "Conoceré a Antonio.", isCorrect: false },
        { answerText: "Conozco a Antonio.", isCorrect: false },
      ],
    },
    {
      questionText:
        "Der folgende Satz »Supongo que tus padres estarán ya en casa« heißt auf Deutsch: Ich vermute, dass deine Eltern schon zu Hause …",
      answerOptions: [
        {
          answerText: "sein werden",
          isCorrect: true,
        },
        {
          answerText: "sind",
          isCorrect: false,
        },
        { answerText: "gewesen sind", isCorrect: false },
        { answerText: "waren", isCorrect: false },
      ],
    },
    {
      questionText:
        "Welche Zeitform verbirgt sich im Satz »En 1989 tuvo lugar la reunificación alemana«?",
      answerOptions: [
        { answerText: "Imperfecto", isCorrect: false },
        { answerText: "Perfecto", isCorrect: false },
        { answerText: "Futuro I", isCorrect: false },
        { answerText: "Indefinido", isCorrect: true },
      ],
    },
    {
      questionText:
        "Welche Zeitform wird im Spanischen verwendet, wenn sich eine abgeschlossene Handlung auf den heutigen Tag bezieht?",
      answerOptions: [
        { answerText: "Perfecto", isCorrect: true },
        { answerText: "Indefinido", isCorrect: false },
        { answerText: "Imperfecto", isCorrect: false },
        { answerText: "Pluscuamperfecto", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Test de vocabulario
            </Typography>
            <Button color="inherit" href="/">
              Salir
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 8,
          py: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            sx={{ width: 80, height: 80, mr: 2, boxShadow: 2 }}
          />

          <Box typography="h2">{score}</Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TimerIcon sx={{ fontSize: "2rem", mr: 1 }} />
          <Box typography="h2">00:07</Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box typography="h2">0</Box>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
            sx={{ width: 80, height: 80, ml: 2, boxShadow: 2 }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          backgroundColor: "spain_flag_yellow_light.main",
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <Box
          typography="h1"
          sx={{ ml: 2, mt: 0, color: "#B89614", fontSize: 48 }}
        >
          ?
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: 150,
            p: 2,
            mb: 2,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Pregunta {currentQuestion + 1} de {questions.length}
          </Typography>
          {questions[currentQuestion].questionText}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Grid container spacing={2}>
          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <Grid item xs={6}>
                <Box
                  id="box1"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  sx={{
                    display: "flex",
                    height: 100,
                    boxShadow: 2,
                    p: 2,
                    backgroundColor: "spain_flag_yellow_light.main",
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
                      fontSize: 48,
                      mr: 2,
                      alignItems: "center",
                    }}
                  >
                    {antworten[index]}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {answerOption.answerText}
                  </Box>
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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

      <div className="app">
        {showScore ? (
          <div className="score-section">
            Du hast {score} von {questions.length} Punkten erreicht.
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}
