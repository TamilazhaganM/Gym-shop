import React, { useContext, useEffect, useState } from "react";
import { ProgramContext } from "../Program/Program";
import { memberContext } from "../Membership/Member"; // Import memberContext
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import Orders from "../Orders/orders";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { order } = useContext(ProgramContext); 
  const { memberorder } = useContext(memberContext); // Get membership orders
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  
  // Compute total items (programs + memberships)
  const totalItems = order.length + memberorder.length; 

  useEffect(() => {
    if (totalItems === 0) {
      console.log("No items selected yet!");
    } else {
      console.log("Cart updated:", totalItems);
    }
  }, [totalItems]);

  const handleSummary = () => {
    setShow(false);
    navigate('/ordersummary');
  };

  return (
    <div id="cards">
      <Button
        style={{
          color: "black",
          backgroundColor: "transparent",
          border: "none",
          position: "relative",
        }}
        onClick={() => setShow(!show)}
        className="me-2"
      >
        <i className="bi bi-cart4" style={{ fontSize: "1.5rem", textAlign: "center" }}></i>
        {/* Show badge with total items (programs + memberships) */}
        {totalItems > 0 && (
          <Badge
            bg="danger"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              fontSize: "0.75rem",
              borderRadius: "50%",
            }}
          >
            {totalItems}
          </Badge>
        )}
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Selections</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Orders />
          <div className="text-center mt-3">
            <Button
              style={{ backgroundColor: "#fa8109", border: "none" }}
              onClick={handleSummary}
            >
              Checkout
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Card;
