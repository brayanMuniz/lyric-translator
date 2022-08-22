import React from "react";

import { styled } from "@mui/material/styles";
import {
  Typography,
  Tooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";

interface Props {
  char: string;
  definitions: string;
  pronunciation?: string;
}

// Todo: placement="bottom-end"

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    border: "1px solid #dadde9",
  },
}));

export default function CharData({
  char,
  definitions,
  pronunciation,
}: Props): JSX.Element {
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">{pronunciation}</Typography>
          <Typography> {definitions}</Typography>
        </React.Fragment>
      }
    >
      <Typography sx={{ textDecoration: "underline", fontSize: 23 }}>
        {char}
      </Typography>
    </HtmlTooltip>
  );
}
