import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CrosswordAnswers } from "./data/crossword";

export const Crossword = (): React.ReactElement => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="white">Hint</Typography>
          </TableCell>
          <TableCell align="left">
            <Typography color="white">Answer</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {CrosswordAnswers.map((a) => (
          <TableRow key={a.Hint}>
            <TableCell>
              <Typography color="white">{a.Hint}</Typography>
            </TableCell>
            <TableCell>
              <Typography color="white">{a.Answer}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
