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

import CharData from "../components/CharData";

// Todo: Merge with HtmlTooltip to show transalation on hover
const Lyrics: NextPage = () => {
  return (
    <div>
      {lyricsTranslationArray.map((line, lineIdx) => {
        // Todo: store each component into an array, with its lineIdx, to be able to retrive line
        if (typeof line === "number") return <div key={lineIdx}>{lineIdx}</div>;
        else if (line.length === 0 && lyricsArray[lineIdx] !== "")
          return <Typography>{lyricsArray[lineIdx]}</Typography>;
        else if (line.length === 0 && lyricsArray[lineIdx] === "")
          return <br key={lineIdx} />;
        else
          return (
            <Grid container key={lineIdx} spacing={1}>
              {line.map((char, charIdx) => {
                return (
                  <Grid item key={charIdx}>
                    <CharData
                      char={char.title}
                      definitions={char.definitions}
                    />
                  </Grid>
                );
              })}
            </Grid>
          );
      })}
    </div>
  );
};

export default Lyrics;
