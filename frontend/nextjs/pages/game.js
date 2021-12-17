import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TimerIcon from "@mui/icons-material/Timer";

let selectedBox = null;

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

function changeSelectedBox(box) {
  if (selectedBox == null) {
    selectedBox = box;
    document.getElementById(box).classList.add("selectedBox");
  } else {
    document.getElementById(selectedBox).classList.remove("selectedBox");
    document.getElementById(box).classList.add("selectedBox");
    selectedBox = box;
  }
}

export default function Game({ data }) {
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
          mt: 6,
          py: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            sx={{ width: 80, height: 80, mr: 2, boxShadow: 2 }}
          />

          <Box typography="h2">0</Box>
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
            guterBottom
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Pregunta 1 de 12
          </Typography>
          {data[0].questionText}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              id="box1"
              onClick={() => changeSelectedBox("box1")}
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
                A
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {data[0].options[0]}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              id="box2"
              onClick={() => changeSelectedBox("box2")}
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
                B
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {data[0].options[1]}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              id="box3"
              onClick={() => changeSelectedBox("box1")}
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
                C
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {data[0].options[2]}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              id="box1"
              onClick={() => changeSelectedBox("box1")}
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
                D
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {data[0].options[3]}
              </Box>
            </Box>
          </Grid>
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
    </Container>
  );
}
