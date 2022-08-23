import jsonLyrics from "../song-lyrics.json";
import lyricsTranslation from "../lyrics-translation.json";

const lyricsArray = Object.values(jsonLyrics);
const lyricsTranslationArray = Object.values(lyricsTranslation);

import * as React from "react";
import Typography from "@mui/material/Typography";

import type { NextPage } from "next";
import { Grid } from "@mui/material";

import CharData from "../components/CharData";

const Lyrics: NextPage = () => {
  return (
    <div>
      {lyricsTranslationArray.map((line, lineIdx) => {
        // Repeated Line
        if (typeof line === "number") return <div key={lineIdx}>{lineIdx}</div>;
        // English
        else if (line.length === 0 && lyricsArray[lineIdx] !== "")
          return (
            <Typography key={lineIdx} sx={{ fontSize: 23 }}>
              {lyricsArray[lineIdx]}
            </Typography>
          );
        // Empty Space
        else if (line.length === 0 && lyricsArray[lineIdx] === "")
          return <br key={lineIdx} />;
        // Unique Line
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
