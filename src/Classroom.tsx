import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ClassroomAnswers } from "./data/classroom";

export const Classroom = (): React.ReactElement => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="white">Date</Typography>
          </TableCell>
          <TableCell align="left">
            <Typography color="white">Answer</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ClassroomAnswers.map((a) => (
          <TableRow key={a.Date}>
            <TableCell>
              <Typography color="white">{a.Date}</Typography>
            </TableCell>
            <TableCell>
              {a.Answers.map((a, i) => (
                <Typography key={i} color="white">
                  {a}
                </Typography>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
