import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function Buyerprofile()
{
    return (
        <div>
            <br /><br /><br />
          <div style={{backgroundColor:"white", marginLeft:280, marginRight:280}}>
           <h3 style={{textAlign:"center",color:"red"}}>Profile</h3>
           <p style={{marginLeft:50,float:"left",marginTop:30}}>Name:</p>
           <TextField
              inputProps={{readOnly:true}}
              margin="normal"
              required
              name="name"
              id="password"
              style={{maxWidth:100,marginLeft:100,border:"2px solid blue"}}
              value={localStorage.getItem('name')}
            /><br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Email:</p>
           <TextField
           inputProps={{readOnly:true}}
              margin="normal"
              required
              name="email"
              id="password"
              style={{width:300,marginLeft:100,border:"2px solid blue"}}
              value={localStorage.getItem('email')}
            /><br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Contact Number:</p>
           <TextField
           inputProps={{readOnly:true}}
              margin="normal"
              required
              name="contactnumber"
              id="password"
              style={{width:200,marginLeft:20,border:"2px solid blue"}}
              value={localStorage.getItem('contactnumber')}
            />
            <br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Age:</p>
           <TextField
           inputProps={{readOnly:true}}
              margin="normal"
              required
              name="Age"
              id="password"
              style={{width:70,marginLeft:110,border:"2px solid blue"}}
              value={localStorage.getItem('age')}
            />
            <br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Batch:</p>
           <TextField
           inputProps={{readOnly:true}}
              margin="normal"
              required
              name="batch"
              id="password"
              style={{width:100,marginLeft:100,border:"2px solid blue"}}
              value={localStorage.getItem('batch')}
            />
            <br /><br />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{marginLeft:250}}
            >
              Edit Details
            </Button>
          </div>
        </div>
    ) ;
}