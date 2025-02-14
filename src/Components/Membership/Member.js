import React, { createContext, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./Member.css";

// Create Context
export const memberContext = createContext();

// MemberProvider Component (Only Context, No UI)
export const MemberProvider = ({ children }) => {
  const [memberorder, setMemberorders] = useState([]);
  return (
    <memberContext.Provider value={{ memberorder, setMemberorders }}>
      {children}
    </memberContext.Provider>
  );
};

const Member = () => {
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const { setMemberorders } = useContext(memberContext);

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    if (selectedMember) {
      setMemberorders((prevOrders) => [...prevOrders, { 
        title: selectedMember.title, 
        amount: selectedMember.amount 
      }]);
      setShow(false);
    }
  };

  const handleShow = (program) => {
    setShow(true);
    setSelectedMember(program);
  };

  const memberships = [
    {
      title: "1 Month Pack",
      amount: "Rs.1000",
      text: "Try us out! Sign up for a new member trial and discover the perfect place to work out, build strength, and stay motivated",
    },
    {
      title: "6 Month Pack",
      amount: "Rs.4000",
      text: "Grab our 6-month gym membership and enjoy unlimited workouts and personalized support to keep you motivated every step",
    },
    {
      title: "One Year Pack",
      amount: "Rs.6000",
      text: "With our 1 Year membership, you get access to premium equipment, expert trainers, and a clear path to reaching your fitness goals",
    },
  ];

  return (
    <div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome To Muscle House</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMember && (
            <>
              <h5>{selectedMember.title}</h5>
              <p><strong>Price:</strong> {selectedMember.amount}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Not Yet
          </Button>
          <Button style={{ backgroundColor: "#fa8109", border: "none" }} onClick={handleSubmit}>
            Ready To Go
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="memberSetup">
        <h1>Join The Community</h1>
      </div>

      <Container>
        <Row>
          {memberships.map((member, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="card-Title">{member.title}</Card.Title>
                  <Card.Text className="card-Title">{member.amount}</Card.Text>
                  <Card.Text className="card-texttt">{member.text}</Card.Text>
                  <Button variant="secondary" onClick={() => handleShow(member)}>
                    Select
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Member;
