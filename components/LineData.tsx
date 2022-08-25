import React from "react";
import CharData from "./CharData";

interface Props {
  line: CharData[];
}

interface CharData {
  title: string;
  definitions: string;
  pronunciation?: string;
}

import Grid from "@mui/material/Grid";

export default function LineData({ line }: Props): JSX.Element {
  return (
    <Grid container spacing={1}>
      {line.map((char, charIdx) => {
        let pronounciation: string | null = null;
        if (char.pronunciation) pronounciation = char.pronunciation;
        return (
          <Grid item key={charIdx}>
            <CharData
              char={char.title}
              definitions={char.definitions}
              pronunciation={pronounciation}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
