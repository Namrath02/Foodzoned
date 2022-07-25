import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function Vendorprofile()
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
              id="name"
              style={{maxWidth:100,marginLeft:100,border:"2px solid blue"}}
              value={localStorage.getItem('vname')}
            /><br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Email:</p>
           <TextField
              margin="normal"
              required
              name="email"
              id="email"
              style={{width:300,marginLeft:100,border:"2px solid blue"}}
              value={localStorage.getItem('vemail')}
            /><br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Contact Number:</p>
           <TextField
              margin="normal"
              required
              name="contactnumber"
              id="contact"
              style={{width:200,marginLeft:20,border:"2px solid blue"}}
              value={localStorage.getItem('vcontactnumber')}
            />
            <br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Shop Name:</p>
           <TextField
              margin="normal"
              required
              name="shop"
              id="shop"
              style={{width:70,marginLeft:110,border:"2px solid blue"}}
              value={localStorage.getItem('vshop')}
            />
            <br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Opening Time:</p>
           <TextField
              margin="normal"
              required
              name="opening"
              id="opening"
              style={{width:100,marginLeft:100,border:"2px solid blue"}}
              value={localStorage.getItem('vopen')}
            />
            <br />
            <p style={{marginLeft:50,float:"left",marginTop:30}}>Closing:</p>
              <TextField
                margin="normal"
                required
                name="closing"
                id="closing"
                style={{width:100,marginLeft:100,border:"2px solid blue"}}
                value={localStorage.getItem('vclose')}
                />
                <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{marginLeft:250}}
            >
              Edit Details
            </Button>
            <br /><br /><br />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{marginLeft:250}}
            >
              Food Items
            </Button>
          </div>
        </div>
    ) ;
}