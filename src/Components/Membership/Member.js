import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Member.css";
import { Col, Container, Row } from "react-bootstrap";

const Member = () => {
  return (
    <div>
      <div className="memberSetup">
        <h1>Join The Community</h1>
      </div>
      <div>
        <Container>
          <Row>
            <Col lg={4} md={12}>
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Text className="card-Title">New Member Trial</Card.Text>
                <Card.Title className="card-Title">Rs.100</Card.Title>
                <Card.Body>
                  <Card.Text className="card-texttt">
                    Try us out! Sign up for a new member trial and discover the
                    perfect place to work out, build strength, and stay
                    motivated
                  </Card.Text>
                  <Button variant="secondary">Select</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Text className="card-Title">6 Month Pack</Card.Text>
                <Card.Title className="card-Title">Rs.4000</Card.Title>
                <Card.Body>
                  <Card.Text className="card-texttt">
                  Grab our 6-month gym membership and enjoy unlimited workouts and personalized support to keep you motivated every step
                  </Card.Text>
                  <Button variant="secondary">Select</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Text className="card-Title"> One Year Pack</Card.Text>
                <Card.Title className="card-Title">Rs.6000</Card.Title>
                <Card.Body>
                  <Card.Text className="card-texttt">
                  With our 6-month membership, you get access to premium equipment,
                   expert trainers, and a clear path to reaching your fitness goals
                  </Card.Text>
                  <Button variant="secondary">Select</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Member;
