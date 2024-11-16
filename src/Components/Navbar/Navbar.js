import React, { useContext } from "react";
import './Navbar.css'
import Card from "../Card/card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProgramContext } from "../Program/Program"; // Import ProgramContext

function Navlist() {
  const navigate = useNavigate();
  const { order } = useContext(ProgramContext); // Get order from context

  // Navigation functions
  function handleHome() {
    navigate('/home');
    setTimeout(() => {
      const methodsElement = document.getElementById("home");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  function handleMethods() {
    navigate('/home#methods');
    setTimeout(() => {
      const methodsElement = document.getElementById("methods");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  function handleFacility() {
    navigate('/home#facility');
    setTimeout(() => {
      const methodsElement = document.getElementById("workOutPage");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  function handleContact() {
    navigate('/home#contact');
    setTimeout(() => {
      const methodsElement = document.getElementById("contact");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
            <Nav.Link className="menuitems" onClick={handleHome}>Home</Nav.Link>
            <Nav.Link className="menuitems" onClick={handleFacility}>Facility</Nav.Link>
            <Nav.Link className="menuitems" onClick={handleMethods}>Methods</Nav.Link>
            <Nav.Link className="menuitems" as={Link} to="/programlist">Program List</Nav.Link>
            <Nav.Link className="menuitems" as={Link} to="/membership">Memberships</Nav.Link>
            <Nav.Link className="menuitems" onClick={handleContact}>Contact</Nav.Link>
            <Nav.Link className="menuitems" as={Link} to="/login">Log In <i className="bi bi-person-circle"></i></Nav.Link>
                  {/* Conditionally render the Card component based on order */}

            {order.length >= 0 && (
          <Card />
      )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
    </div>
    
  );
}

export default Navlist;
