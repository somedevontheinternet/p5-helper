import React from "react";
import { Event } from "./data/confidants/confidants";
import { Typography, Box } from "@mui/material";
import { AnswersElem } from "./AnswersElem";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface IProps {
  event: Event;
}

export const EventElem = ({ event }: IProps): React.ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        key={event.Rank}
        style={{ color: "white" }}
        sx={{ py: 1 }}
      >
        Rank: {event.Rank} {event.RomanceRequired && <FavoriteIcon />}
      </Typography>
      {event.Responses.map((a, i) => (
        <Box
          key={i}
          sx={{
            width: "100%",
            backgroundColor: i % 2 === 0 ? "white" : "black",
          }}
        >
          <AnswersElem color={i % 2 === 0 ? "black" : "white"} answer={a} />
        </Box>
      ))}
    </Box>
  );
};
