import jsonLyrics from "../song-lyrics.json";
import lyricsTranslation from "../lyrics-translation.json";

const lyricsArray = Object.values(jsonLyrics);
const lyricsTranslationArray = Object.values(lyricsTranslation);

import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { NextPage } from "next";
import { Button, Grid } from "@mui/material";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

// Todo: Merge with HtmlTooltip to show transalation on hover
const Lyrics: NextPage = () => {
  return (
    <div>
      {lyricsTranslationArray.map((line, lineIdx) => {
        if (typeof line === "number") return <div key={lineIdx}>number</div>;
        else if (line.length === 0 && lyricsArray[lineIdx] !== "")
          return <Typography>{lyricsArray[lineIdx]}</Typography>;
        else if (line.length === 0 && lyricsArray[lineIdx] === "")
          return <br key={lineIdx} />;
        else
          return (
            <Grid container key={lineIdx}>
              {line.map((char, charIdx) => {
                return (
                  <Grid item key={charIdx}>
                    <Typography>{char.title}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          );
      })}

      {/* <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip> */}
    </div>
  );
};

export default Lyrics;
