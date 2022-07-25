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
    const [vname, setVName] = useState("");
    const [vemail, setVEmail] = useState("");
    const [vcontactnumber, setVContactnumber] = useState("");
    const [vshop,setVShop]=useState("");
    const [vopen,setVOpen]=useState("");
    const [vclose,setVClose]=useState("");

    const onChangeUsername = (event) => {
        setVName(event.target.value);
      };
    
      const onChangeEmail = (event) => {
        setVEmail(event.target.value);
      };

      const onChangeContactnumber = (event) => {
        setVContactnumber(event.target.value) ;
      }

      const onChangeShop = (event) => {
          setVShop(event.target.value) ;
      }

      const onChangeOpen = (event) => {
          setVOpen(event.target.value) ;
      }
      const onChangeClose = (event) => {
            setVClose(event.target.value) ;
        }

      const resetInputs = () => {

        setVName("");
        setVEmail("");
        setVContactnumber("") ;
        setVShop("") ;
        setVOpen("") ;
        setVClose("") ;
      };

const navigate = useNavigate();  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
 
      vname: vname,
      vemail: vemail,
      vcontactnumber: vcontactnumber,
      vshop: vshop,
      vopen: vopen,
      vclose: vclose
    };

      axios
      .post("/api/user/vendor", newUser)
      .then((response) => {
        alert("Created\t" + response.data.vshop);
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
                  name="manager"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  value={vname}
                  autoFocus
                  onChange={onChangeUsername}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  value={vemail}
                  name="Email"
                  onChange={onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactnumber"                 
                  label="Contact Number"
                  value={vcontactnumber}
                  name="contactnumber"
                  onChange={onChangeContactnumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="shop"
                  label="shop"
                  value={vshop}
                  id="shop"
                  onChange={onChangeShop}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="opening"
                  label="opening"
                  value={vopen}
                  id="opening"
                  onChange={onChangeOpen}
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="closing"
                    label="closing"
                    value={vclose}
                    id="closing"
                    onChange={onChangeClose}
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
              onClick={() => navigate("/vendorlogin")}
            >
              Already have an account? Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}