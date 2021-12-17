import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ProTip from "../src/ProTip";
import TimerIcon from "@mui/icons-material/Timer";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

const data = [{ questionText: "Hallo" }];

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
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Frage 1/1
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              1 vs. 1
            </Typography>
            <Button color="inherit" href="/">
              Beenden
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          />

          <Box typography="h2">0</Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box typography="h2">0</Box>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
          />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TimerIcon />
        <Box typography="body1">00:10</Box>
      </Box>

      <Box typography="h3" sx={{ display: "flex", justifyContent: "center" }}>
        Frage 1
      </Box>

      <Box
        sx={{
          height: 150,
          backgroundColor: "gray",
        }}
      >
        {data[0].questionText}
      </Box>
      <Box typography="h3" sx={{ display: "flex", justifyContent: "center" }}>
        Antworten
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                height: 100,
                backgroundColor: "gray",
              }}
            >
              {data[0].options[0]}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                height: 100,
                backgroundColor: "green",
              }}
            >
              {data[0].options[1]}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                height: 100,
                backgroundColor: "gray",
              }}
            >
              {data[0].options[2]}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                height: 100,
                backgroundColor: "gray",
              }}
            >
              {data[0].options[3]}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
