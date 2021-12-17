import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" gutterBottom>
          Start
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/game">
          Spiel starten
        </Button>
        {/*<ProTip />*/}
        <Copyright />
      </Box>
    </Container>
  );
}
