import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="footerSetup">
        {/* <Container> */}
          <Row>
            <Col className="footercards" lg={3} md={6} sm={12}><Image className="logoimage" src={require('../../assets/logo.png')} /></Col>
            <Col lg={3} md={6} sm={12} className="footercards">
              <h4>Menu</h4>
              <br />
              <a className="menuLink" href="#">Terms & Conditions</a>
              <br />
              <a className="menuLink" href="#">Privacy Policy</a>
              <br />
              <a className="menuLink" href="#">Shipping Policy</a>
              <br />
              <a className="menuLink" href="#">Refund Policy</a>
              <br />
              <a className="menuLink" href="#">Accessibility</a>
            </Col>
            <Col className="footercards" lg={3} md={6} sm={12}>
              <h4>Contact Us</h4>
              <p>500 Terry Francine Street
              San Francisco, CA 94156
              Email: info@gmail.com
              Tel: 32928321</p>
            </Col>
            <Col className="footercards" lg={3} md={6} sm={12}>
              <h4>Opening Hours</h4>
              <p>Sun-Fri: 5AM - 10PM</p>
              <p>Sat: 7AM - 1PM</p>
            </Col>
          </Row>
        {/* </Container> */}
      </div>
      <div className="footerContent"> 
        ©️ 2024 by The Gym Shop
      </div>
    </div>
  );
};

export default Footer;
