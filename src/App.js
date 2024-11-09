import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navlist from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Para from "./Components/Paragraph/para";
import Workout from "./Components/Workout/Workout";
import Methods from "./Components/Methods/Methods";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer1/Footer";
import Login from "./Components/Logincompo/Login";
import Signin from "./Components/signincompo/signin";
import Program from "./Components/Program/Program";
import Member from "./Components/Membership/Member";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/programlist" element={<><Navlist /><Program /><Footer /></>}/>
        <Route path="/membership" element={<><Navlist /><Member/><Footer/></>}/>

          <Route
            path="/home"
            element={
              <>
                <Navlist />
                <Intro />
                <Para />
                <Workout />
                <Methods />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
