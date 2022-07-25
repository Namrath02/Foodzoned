import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel' ;
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const LoginNavbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} style={{ backgroundColor:"orange" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
           College Canteen
          </Typography>
          <Box sx={{ flexGrow: 1}} />
          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>
          <Button color="inherit" onClick={()=> navigate("/vendorprofile")}>
            My Profile
          </Button>
          <Button color="inherit" onClick={() => navigate("/vendorfood")}>
            My Food
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoginNavbar;
