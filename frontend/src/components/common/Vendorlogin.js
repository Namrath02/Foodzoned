import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { height } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const theme = createTheme();

export default function SignIn() {

  const [lname,setLVName] = useState("") ;
  const [lemail,setLVEmail]=useState("") ;

  const onChangeLVname = (event) => {
    setLVName(event.target.value);
  };

  const onChangeLVEmail = (event) => {
    setLVEmail(event.target.value);
  };
  const resetInputs = () => {
    setLVName("");
    setLVEmail("");
  }; 
  
  const navigate=useNavigate() ;

  const handleSubmit = (event) => {
    event.preventDefault();
    const lUser={
      vname:lname,
      vemail:lemail,
    } ;

    axios
    .post("/api/user/vendorlogin", lUser)
    .then((response) => {
      console.log(response.data);
      alert("Created\t" + response.data.vname);
      localStorage.setItem('vname',response.data.vname) ;
      localStorage.setItem('vemail',response.data.vemail) ;
      localStorage.setItem('vcontactnumber',response.data.vcontactnumber) ;
      localStorage.setItem('vshop',response.data.vshop) ;
      localStorage.setItem('vopen',response.data.vopen) ;
      localStorage.setItem('vclose',response.data.vclose) ;
      navigate("/vendordashboard")
    }); 

  resetInputs();  
  };

  return (
      <div style={{backgroundColor:"orange",height:540}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="Name"
              value={lname}
              onChange={onChangeLVname}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              value={lemail}
              onChange={onChangeLVEmail}
              autoComplete="current-mail"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}