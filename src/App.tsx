import React from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  Typography,
  AppBar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Confidant, Confidants } from "./data/confidants/confidants";
import { ConfidantElem } from "./Confidant";
import { Classroom } from "./Classroom";
import { Crossword } from "./Crossword";

// red #c10109
// black #000
// gray #888
// pink-red #ff262b

enum Tab {
  CONFIDANT,
  CLASSROOM,
  CROSSWORD,
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState(Tab.CLASSROOM);
  const [confidant, setConfidant] = React.useState(Confidants[0]);

  const switchClassroom = (): void => {
    setTab(Tab.CLASSROOM);
    setOpen(false);
  };

  const switchCrossword = (): void => {
    setTab(Tab.CROSSWORD);
    setOpen(false);
  };

  const switchConfidant = (c: Confidant): void => {
    setConfidant(c);
    setTab(Tab.CONFIDANT);
    setOpen(false);
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <AppBar position="static" sx={{ backgroundColor: "#ff262b" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ backgroundColor: "#ff262b" }}>
          <List>
            <ListItem onClick={switchClassroom}>
              <Button sx={{ width: "100%", justifyContent: "left" }}>
                <Typography
                  sx={{ px: 2 }}
                  style={{ color: "white" }}
                  variant="h4"
                >
                  Classroom
                </Typography>
              </Button>
            </ListItem>
            <ListItem onClick={switchCrossword}>
              <Button sx={{ width: "100%", justifyContent: "left" }}>
                <Typography
                  sx={{ px: 2 }}
                  style={{ color: "white" }}
                  variant="h4"
                >
                  Crossword
                </Typography>
              </Button>
            </ListItem>
            {Confidants.map((c: Confidant) => (
              <ListItem key={c.Name} onClick={() => switchConfidant(c)}>
                <Button sx={{ width: "100%", justifyContent: "left" }}>
                  <img
                    style={{ height: "100px" }}
                    src={c.Icon}
                    alt={`${c.Name} Icon`}
                  ></img>
                  <Typography
                    sx={{ px: 2 }}
                    style={{ color: "white" }}
                    variant="h4"
                  >
                    {c.Name}
                  </Typography>
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {tab === Tab.CLASSROOM && <Classroom />}
        {tab === Tab.CROSSWORD && <Crossword />}
        {tab === Tab.CONFIDANT && <ConfidantElem confidant={confidant} />}
      </Box>
    </div>
  );
}

export default App;
