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
import Member, { MemberProvider } from "./Components/Membership/Member.js";
import { ProgramContext } from "./Components/Program/Program";
import Summarypage from "./Components/Summarys/summary.js";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Fees from "./Components/Fees/Fees.jsx";
import Adminprogram from "./Components/Adminprogram/Adminprogram.jsx";
import Addmemb from "./Components/Addmemb/Addmemb.jsx";
import GymMember from "./Components/GymMembers/GymMember.jsx";
import Settings from "./Components/Settings/Settings.jsx";
import Meal from "./Components/Meal-planner/Meal.jsx";
import Bills from "./Components/Bills/Bills.jsx";
import Order from "./Components/Orders/orders.js"; // Import Order Component

function App() {
  const [order, setOrders] = useState([]);

  return (
    <ProgramContext.Provider value={{ order, setOrders }}>
      <MemberProvider> {/* ✅ Wrap entire app with MemberProvider */}
        <Router>
          {/* Navlist should have access to context */}
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Admin/Dashboard" element={<Dashboard />} />
            <Route path="/Admin/Addmember" element={<Addmemb />} />
            <Route path="/Admin/Fees-Package" element={<Fees />} />
            <Route path="/Admin/Admin-program" element={<Adminprogram />} />
            <Route path="/Admin/Gym-members" element={<GymMember />} />
            <Route path="/Admin/Settings" element={<Settings />} />
            <Route path="/Meal-planner" element={<Meal />} />
            <Route path="/Admin/Bills" element={<Bills />} />
            <Route path="/programlist" element={<>  <Navlist /><Program /><Footer /></>} />
            <Route path="/membership" element={<>  <Navlist /><Member /><Footer /></>} />
            <Route path="/ordersummary" element={<Summarypage />} />
            <Route path="/orders" element={<>  <Navlist /><Order /><Footer /></>} /> {/* ✅ Add Orders Route */}
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
      </MemberProvider>
    </ProgramContext.Provider>
  );
}

export default App;
