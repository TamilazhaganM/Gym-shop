import React, { useState,createContext, useContext } from "react";
import "./Program.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Button, Modal } from "react-bootstrap";
import Card from "../Card/card";
// import {ProgramContext} from "./program"
export const ProgramContext=createContext()


const Program = () => {
  const [show, setShow] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const {order, setOrders} = useContext(ProgramContext);
  const [showCard, setShowCard] = useState(true); 
  const handleClose = () => setShow(false);
  
  const handleShow = (program) => {
    setShow(true);
    setSelectedProgram(program);
  };

  const handlesubmit = () => {
    if (selectedProgram) {
      setOrders((prevOrders) => [...prevOrders, selectedProgram]);
      setShow(false);
      setShowCard(true)
    }
  };

  const programs = [
    { name: "Yogas", price: 1000, image: require('../../assets/methods4.webp') },
    { name: "Full Body Workout", price: 1500, image: require('../../assets/methods1.webp') },
    { name: "Weight Gain", price: 500, image: require('../../assets/intro1.jpg') },
    { name: "Athletic Workout", price: 2000, image: require('../../assets/methods3.webp') },
  ];
  console.log(order)


  return (
    <>

  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Welcome To Muscle House</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are You Ready to Join the {selectedProgram?.name} Program?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Not Yet</Button>
      <Button style={{ backgroundColor: '#fa8109', border: 'none' }} onClick={handlesubmit}>
       Ready To Go
      </Button>
    </Modal.Footer>
  </Modal>
  <div className="programSetup">
    <h1>Our Challenges</h1>
    <p>Step by step Challenges to keep you strong and motivated</p>
    <p>Select the type of program</p>
  </div>

  <Container >
    {programs.map((program, index) => (
      <Row className="container mb-3" key={index}>
        <Col>
          <Image className="programImg" src={program.image} />
        </Col>
        <Col className="programSetup2">
          <h2>{program.name}</h2>
          <h4>Rs.{program.price}/Month</h4>
          <Button
            variant="primary"
            className="programbtn"
            onClick={() => handleShow(program)}
          >
            Add
          </Button>
        </Col>  
      </Row>
    ))}
  </Container>

  {/* Conditionally render the Card component based on showCard */}
   {showCard && <div className="cardContainer">
      <Card />
    </div>
   }

      
    </>
  );
  
};

export default Program;
