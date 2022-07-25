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

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ flexGrow: 1 }} style={{ backgroundColor:"orange" }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ cursor: "pointer" }}
//             onClick={() => navigate("/")}
//           >
//            BBC
//           </Typography>
//           <Box sx={{ flexGrow: 1}} />
//           <Button color="inherit" onClick={() => navigate("/users")}>
//             Users
//           </Button>
//           <PopupState variant="popover" popupId="demo-popup-menu">
//       {(popupState) => (
//         <React.Fragment>
//           <Button color="inherit" {...bindTrigger(popupState)}>
//             Login/Register
//           </Button>
//           <Menu {...bindMenu(popupState)}>
//             <MenuItem onClick={popupState.close}><Button onClick={() => navigate("/buyer")}>Buyer</Button></MenuItem>
//             <MenuItem onClick={popupState.close}><Button>Vendor</Button></MenuItem>
//           </Menu>
//         </React.Fragment>
//       )}
//     </PopupState>
//           <Button color="inherit">
//             My Profile
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navbar;


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Canteen Portal
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Register/Login
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem> 
                            <Button color="inherit" onClick={()=> navigate("/buyer")}> 
                                Buyer
                            </Button>
                  </MenuItem>
                  <MenuItem>
                            <Button color="inherit" onClick={()=> navigate("/vendor")}>
                              Vendor
                              </Button>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Button color="inherit" onClick={() => navigate("/buyerprofile")}>
            My Profile
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
