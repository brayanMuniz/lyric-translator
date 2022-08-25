import type { NextPage } from "next";

import jsonLyrics from "../song-lyrics.json";
import lyricsTranslation from "../lyrics-translation.json";

const lyricsArray = Object.values(jsonLyrics);
const lyricsTranslationArray = Object.values(lyricsTranslation);

import Typography from "@mui/material/Typography";

import LineData from "../components/LineData";

const Lyrics: NextPage = () => {
  return (
    <div>
      {lyricsTranslationArray.map((line, lineIdx) => {
        // Repeated Line
        if (typeof line === "number") {
          // Todo: keep going back until you find a value that is english, empty space or line
          let foundValue = false;
          let value: number | never[] = line;
          let count = 100;
          while (typeof value === "number" && count > 0) {
            count--;
          }
          return <div key={lineIdx}>{lineIdx}</div>;
        }
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
        else return <LineData line={line} key={lineIdx} />;
      })}
    </div>
  );
};

export default Lyrics;
