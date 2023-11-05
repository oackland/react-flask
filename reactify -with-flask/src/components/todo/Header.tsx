import React from "react";
import "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const TodoNavbar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ToDo List
        </Typography>
        <Button color="inherit"></Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TodoNavbar;
