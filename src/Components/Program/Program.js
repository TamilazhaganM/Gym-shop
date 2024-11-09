import React from "react";
import "./Program.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";

const Program = () => {
  return (
    <div>
      <div className="programSetup">
        <h1>Our Challenges</h1>
        <p>Step by step Challenges to keep you strong and motivated</p>
      </div>
      <div>
        <Container>
          <Row className="container">
            <Col>
              <Image
                className="programImg"
                src={require("../../assets/methods4.webp")}
              ></Image>
            </Col>
            <Col className="programSetup2">
              <h2>Calisthenics</h2>
              <h4>Rs.1000/Month</h4>
              <button>Add</button>
            </Col>
          </Row>
          <Row className="container">
            <Col className="programSetup2">
              <h2>Full Body Workout</h2>
              <h4>Rs.1500/Month</h4>
              <button>Add</button>
            </Col>
            <Col>
              <Image
                className="programImg"
                src={require("../../assets/methods1.webp")}
              ></Image>
            </Col>
          </Row>
          <Row className="container">
            <Col>
              <Image
                className="programImg"
                src={require("../../assets/methods2.webp")}
              ></Image>
            </Col>
            <Col className="programSetup2">
              <h2>Weight Gain</h2>
              <h4>Rs.500/Month</h4>
              <button>Add</button>
            </Col>
          </Row>
          <Row className="container">
            <Col className="programSetup2">
              <h2>Atheletic Workout</h2>
              <h4>Rs.1000/Month</h4>
              <button>Add</button>
            </Col>
            <Col>
              <Image
                className="programImg"
                src={require("../../assets/methods3.webp")}
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Program;
