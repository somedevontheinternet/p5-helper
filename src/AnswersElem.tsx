import React from "react";
import { Answer } from "./data/confidants/confidants";
import { Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface IProps {
  color: string;
  answer: Answer[];
}

export const AnswersElem = ({ color, answer }: IProps): React.ReactElement => {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      {answer.map((a, i) => (
        <Typography
          key={i}
          variant="h5"
          sx={{
            borderStyle: "solid",
            width: "100%",
            p: 1,
            color: color,
          }}
        >
          {a.Text} (+{a.Notes}) {a.Romance && <FavoriteIcon />}
        </Typography>
      ))}
    </Box>
  );
};
