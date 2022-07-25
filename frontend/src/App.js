import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import SignUp from "./components/common/Buyer";
import Buyerlogin from "./components/common/Buyerlogin";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Dashboard from "./components/common/buyerdashboard";
import LoginNavbar from "./components/templates/LoginNavbar"
import Buyerprofile from "./components/common/buyerprofile";
import Wallet from "./components/common/buyerwallet";
import Vendor from "./components/common/Vendor";
import Vendorlogin from "./components/common/Vendorlogin";
import Vendordashboard from "./components/common/vendordashboard";
import Vendorbar from "./components/templates/Vendorbar";
import Vendorprofile from "./components/common/vendorprofile";
import {styled} from '@mui/styles';
import { InputLabel } from "@mui/material";

const page=window.location.href ;
var flag=false 
if(page.includes("buyerdashboard")||page.includes("buyerprofile")||page.includes("/buyerwallet"))
{
  console.log("Flag True; Logged  IN!")
  flag=true ;
}

const Layout = () => {
  if(page.includes("vendordashboard"))
  {
  return (
    <div style={{ backgroundColor: "#FFA500" }}>
        <Vendorbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
  }
  else if(page.includes("buyerdashboard"))
  {
    return(
      <div style={{ backgroundColor: "#FFA500" }}>
      <LoginNavbar />
    <div className="container">
      <Outlet />
    </div>
  </div>
    ) ;
  }
  else {
    return(
      <div style={{ backgroundColor: "#FFA500" }}>
      <Navbar />
    <div className="container">
      <Outlet />
    </div>
  </div>
    ) ;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="registers" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="buyer" element={<SignUp />} />
          <Route path="buyerlogin" element={<Buyerlogin />} />
          <Route path="buyerdashboard" element={<Dashboard />} />
          <Route path="buyerprofile" element={<Buyerprofile />} />
          <Route path="buyerwallet" element={<Wallet />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="vendorlogin" element={<Vendorlogin />} />
          <Route path="vendordashboard" element={<Vendordashboard />} />
          <Route path="vendorprofile" element={<Vendorprofile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
