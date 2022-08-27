import * as React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Fab,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "../src/Link";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function Index() {
  const router = useRouter();

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
          <Button variant="contained" component={Link} href="/game1">
            Quiz 1
          </Button>
          <Typography variant="body2">
            mit grobem Entwurf zum UI, Timer und Counter
          </Typography>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <Button variant="contained" component={Link} href="/game2">
            Quiz 2
          </Button>
          <Typography variant="body2">
            mit Feedback zur gegebenen Antwort und mehreren Pages (Steps)
          </Typography>
        </Stack>
      </Stack>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add" href="/game2">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <Avatar onClick={() => router.push("/login")}>
            <PersonIcon />
          </Avatar>
        </Toolbar>
      </AppBar>
    </Stack>
  );
}
