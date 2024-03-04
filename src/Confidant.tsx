import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Confidant } from "./data/confidants/confidants";
import { EventElem } from "./EventElem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  confidant: Confidant;
}

export const ConfidantElem = ({ confidant }: IProps): React.ReactElement => {
  return (
    <>
      <Typography variant="h1" style={{ color: "white" }}>
        {confidant.Name} ({confidant.Arcana})
      </Typography>
      <Accordion sx={{ backgroundColor: "black" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="white">Benefits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="white">Rank</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography color="white">Name</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography color="white">Description</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {confidant.Benefits.map((b) => (
                <TableRow key={b.Rank}>
                  <TableCell>
                    <Typography color="white">{b.Rank}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">{b.Name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">{b.Description}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
      {confidant.Events.map((e) => (
        <EventElem key={e.Rank} event={e} />
      ))}
    </>
  );
};
