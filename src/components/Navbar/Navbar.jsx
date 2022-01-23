import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuIcon  from "@mui/icons-material/Menu";
import MenuItem  from "@mui/material/MenuItem";
import {useHistory} from "react-router-dom";
export default function Navbar() {
  const history=useHistory();
  return <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    
    </IconButton>
    
    <Typography variant="h6" color="inherit" component="div">
      Contact
    </Typography>
    <MenuItem onClick={()=>history.push("/")}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
          
                <MenuItem onClick={()=>history.push("/add")}>
                  <Typography textAlign="center">Add</Typography>
                </MenuItem>
                <MenuItem onClick={()=>history.push("/favourite")}>
                  <Typography textAlign="center">Favourite</Typography>
                </MenuItem>
          
       
  </Toolbar>
</AppBar>;
}
