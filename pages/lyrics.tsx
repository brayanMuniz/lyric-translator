import type { NextPage } from "next";

import jsonLyrics from "../song-lyrics.json";
import lyricsTranslation from "../lyrics-translation.json";

const lyricsArray = Object.values(jsonLyrics);
const lyricsTranslationArray = Object.values(lyricsTranslation);

import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";

import LineData from "../components/LineData";

const Lyrics: NextPage = () => {
  return (
    <Container sx={{ marginTop: 3 }}>
      {lyricsTranslationArray.map((line, lineIdx) => {
        // Repeated Line
        if (typeof line === "number") {
          let value: number | never[] | any = lyricsTranslationArray[line];
          if (typeof value === "number") return <div key={lineIdx}></div>;
          else if (value === []) return <br key={lineIdx} />;
          else return <LineData line={value} key={lineIdx} />;
        }
        // English
        else if (line.length === 0 && lyricsArray[lineIdx] !== "")
          return (
            <Typography key={lineIdx} sx={{ fontSize: 25 }}>
              {lyricsArray[lineIdx]}
            </Typography>
          );
        // Empty Space
        else if (line.length === 0 && lyricsArray[lineIdx] === "")
          return <br key={lineIdx} />;
        // Unique Line
        else return <LineData line={line} key={lineIdx} />;
      })}
    </Container>
  );
};

export default Lyrics;
