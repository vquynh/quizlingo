import * as React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "../src/Link";
import SpainPic from "../public/spain-bg.jpg";
import { bgWrap, bgText, mobile } from "../styles.module.css";

// Websocket
const { io } = require("socket.io-client");
const socket = io("wss://quizlingo-backend.herokuapp.com/websocket");

socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

export default function Index() {
  return (
    <Stack
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <Typography variant="h2">Quiz starten</Typography>
      <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <Button variant="contained" component={Link} href="/game">
            Quiz 1
          </Button>
          <Typography variant="body2">
            mit grobem Entwurf zum UI, Timer und Counter
          </Typography>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <Button variant="contained" component={Link} href="/stepper">
            Quiz 2
          </Button>
          <Typography variant="body2">
            mit Feedback zur gegebenen Antwort und mehreren Pages (Steps)
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
