import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navlist from "./Components/Navbar/Navbar.js";
import Intro from "./Components/Intro/Intro.js";
import Para from "./Components/Paragraph/para.js";
import Workout from "./Components/Workout/Workout.js";
import Methods from "./Components/Methods/Methods.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer1/Footer.js";
import Login from "./Components/Logincompo/Login.js";
import Signin from "./Components/signincompo/signin.js";
import Program from "./Components/Program/Program.js";
import Member from "./Components/Membership/Member.js";
import { ProgramContext } from "./Components/Program/Program";
import Summarypage from "./Components/Summarys/summary.js";


export default App;
function App() {
  const [order, setOrders] = useState([]);

  return (
    <ProgramContext.Provider value={{ order, setOrders }}>
      <Router>
       {/* Navlist should have access to context */}
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/programlist" element={<>  <Navlist /><Program /><Footer /></>} />
          <Route path="/membership" element={<>  <Navlist /><Member /><Footer /></>} />
          <Route path="/ordersummary" element={<Summarypage />} />
          <Route path="/home" element={
            <>
              <Navlist />
              <Intro />
              <Para />
              <Workout />
              <Methods />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </ProgramContext.Provider>
  );
}
