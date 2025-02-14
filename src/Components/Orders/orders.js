import React, { useContext } from "react";
import { ProgramContext } from "../Program/Program";
import { memberContext } from "../Membership/Member";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Order.css"

const Order = () => {
  const { order } = useContext(ProgramContext);
  const { memberorder } = useContext(memberContext);

  return (
    <Container className="order-container">
      <h2 className="order-title">Your Orders</h2>

      {/* Display Program Orders */}
      {order.length > 0 && (
        <div className="order-section">
          <h3>Selected Programs</h3>
          <Row>
            {order.map((program, index) => (
              <Col key={index} lg={6} md={6} sm={12} className="mb-4">
                <Card className="order-card">
                <div>
                <Card.Img variant="top" src={program.image} className="order-img" />
                  <Card.Body>
                    <Card.Title>{program.name}</Card.Title>
                    <Card.Text>Price: Rs.{program.price}</Card.Text>
                  </Card.Body>
                </div>
                  
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Display Member Orders */}
      {memberorder.length > 0 && (
        <div className="order-section">
          <h3>Selected Memberships</h3>
          <Row>
            {memberorder.map((member, index) => (
              <Col key={index} lg={12} md={6} sm={12} className="mb-4">
                <Card className="order-card">
                  <Card.Body>
                    <Card.Title>{member.title}</Card.Title>
                    <Card.Text>Price: {member.amount}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Show message if no orders are placed */}
      {order.length === 0 && memberorder.length === 0 && (
        <p className="no-orders">No orders placed yet.</p>
      )}
    </Container>
  );
};

export default Order;
