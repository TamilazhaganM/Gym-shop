import React, { useState, useContext } from 'react';
import './Summary.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { ProgramContext } from '../Program/Program';
import Orders from '../Orders/orders';

const Summarypage = () => {
  const { order } = useContext(ProgramContext); // Access context
  const [member, setMember] = useState(null);
  const [error, setError] = useState(null); // Track errors

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://13.61.7.123:5000/order');
      setMember(response.data);
      setError(null); // Clear errors on success
    } catch (err) {
      console.error("Error fetching member details:", err);
      setError("Failed to fetch member details. Please try again.");
    }
  };

  return (
    <div>
      <div className='summary'>
        <h1>Thank you for the order</h1>
        <Container>
          <Row>
            <Col lg={6}>
              <h4>Your Details</h4>
              {error && <p className="error-text">{error}</p>} {/* Display error */}
              {member ? (
                <div className='detailsdiv'>
                  <p className='summarypara'>Name: {member.name}</p>
                  <p className='summarypara'>Email: {member.mail}</p>
                  <p className='summarypara'>City  : {member.place}</p>
                  <p className='summarypara'>Phone: {member.mobile}</p>
                </div>
              ) : (
                <p className='summarypara'>Details will be displayed here.</p>
              )}
            </Col>
            <Col lg={6}>
              {order.length > 0 ? (
                <Orders /> // Show the orders component
              ) : (
                <h3>No programs selected</h3>
              )}
            </Col>
          </Row>
        </Container>
        <Button className='summarybtn1' onClick={handlesubmit}>Check your Details</Button>
        <Button className='summarybtn2'>Confirm your order</Button>
      </div>
    </div>
  );
};

export default Summarypage;
