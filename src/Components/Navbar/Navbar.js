import React from "react";
import './Navbar.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navlist() {
  const navigate=useNavigate()
  function handleHome(){
    navigate('/home');
    setTimeout(() => {
      const methodsElement = document.getElementById("home");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay to ensure navigation happens before scrolling
  }
  function handlemethods(){
    navigate('/home#methods');
    setTimeout(() => {
      const methodsElement = document.getElementById("methods");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay to ensure navigation happens before scrolling
  }
  function handleFacility(){
    navigate('/home#facility');
    setTimeout(() => {
      const methodsElement = document.getElementById("workOutPage");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay to ensure navigation happens before scrolling
  }function handleContact(){
    navigate('/home#contact');
    setTimeout(() => {
      const methodsElement = document.getElementById("contact");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay to ensure navigation happens before scrolling
  }
  return (
    <div id="home">
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image
              src={require('../../assets/logo.png')}
              className="logoimage1"
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-end navbarlist"
          >
            <Nav.Link className=" menuitems" onClick={handleHome}>Home</Nav.Link>
            <Nav.Link className=" menuitems" onClick={handleFacility}>Facility</Nav.Link>
            <Nav.Link className=" menuitems" onClick={handlemethods}> Methods</Nav.Link>
            <Nav.Link className=" menuitems" as={Link} to="/programlist"> Program List</Nav.Link>
            <Nav.Link className=" menuitems" as={Link} to="/membership" >  Memberships</Nav.Link>
            <Nav.Link className=" menuitems" onClick={handleContact} > Contact</Nav.Link>
            <Nav.Link className=" menuitems" as={Link} to="/login" > Log In <i class="bi bi-person-circle"></i></Nav.Link>
            <Nav.Link className=" menuitems" href="#contact" ><i class="bi bi-chat-text burger"></i></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navlist;
