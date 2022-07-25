import { useState, useEffect } from "react";
import pic from "./MY1.png"
import pic2 from "./MY2.jpeg"

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return ( <div>
  <img src={pic} style={{width:300, marginLeft:600}} />
  <br /><br /><br />
  <div style={{ textAlign: "center", color:"black", fontSize:30 }}>Welcome to IIITH Canteen Portal</div> 
  <br /><br /><br />
  <img src={pic2} style={{width:400, marginLeft:600}} />
  </div>
  )
};

export default Home;
