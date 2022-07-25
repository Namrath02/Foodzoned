import * as React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

import { useState } from "react";



const theme = createTheme();

export default function SignUp() {
    const [bname, setBName] = useState("");
    const [bemail, setBEmail] = useState("");
    const [bcontactnumber, setBContactnumber] = useState("");
    const [bage,setBAge]=useState(0);
    const [bbatch,setBBatch]=useState("")

    const onChangeUsername = (event) => {
        setBName(event.target.value);
      };
    
      const onChangeEmail = (event) => {
        setBEmail(event.target.value);
      };

      const onChangeContactnumber = (event) => {
        setBContactnumber(event.target.value) ;
      }

      const onChangeAge = (event) => {
          setBAge(event.target.value) ;
      }

      const onChangeBatch = (event) => {
          setBBatch(event.target.value) ;
      }

      const resetInputs = () => {
        setBName("");
        setBEmail("");
        setBContactnumber("") ;
        setBAge(10) ;
        setBBatch("")
      };

const navigate = useNavigate();  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: bname,
      email: bemail,
      contactnumber: bcontactnumber,
      age: bage,
      batch: bbatch,
      walletmoney:0
    };

      axios
      .post("/api/user/buyer", newUser)
      .then((response) => {
        alert("Created\t" + response.data.bname);
        console.log(response.data);
      }); 

    resetInputs();      

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: "black" }}>
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  value={bname}
                  autoFocus
                  onChange={onChangeUsername}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Email"
                  value={bemail}
                  name="lastName"
                  onChange={onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"                 
                  label="Contact Number"
                  value={bcontactnumber}
                  name="email"
                  onChange={onChangeContactnumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  value={bage}
                  id="password"
                  onChange={onChangeAge}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="batch"
                  label="Batch"
                  value={bbatch}
                  id="password"
                  onChange={onChangeBatch}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate("/buyerlogin")}
            >
              Already have an account? Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}