import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import SpainPic from "../public/spain-bg.jpg";
import { bgWrap, bgText, mobile } from "../styles.module.css";

export default function Index() {
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
      <p className={bgText}>
        <Button variant="contained" component={Link} noLinkStyle href="/game">
          Spiel starten
        </Button>
      </p>
    </div>
  );
}
