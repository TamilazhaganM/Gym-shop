import React, { useContext, useEffect } from "react";
import { ProgramContext } from "../Program/Program";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge"; // Import Badge component
import Orders from "../Orders/orders";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { order } = useContext(ProgramContext); // Access `order` state from context
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    if (order.length === 0) {
      console.log("No programs selected yet!");
    } else {
      console.log("Programs in cart:", order);
    }
  }, [order]);

  const handleSummary = () => {
    setShow(false); // Hide the Offcanvas
    navigate('/ordersummary'); // Navigate to summary page
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
        <i
          className="bi bi-cart4"
          style={{ fontSize: "1.5rem", textAlign: "center" }}
        ></i>
        {/* Show badge only if there are items in the cart */}
        {order.length > 0 && (
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
            {order.length}
          </Badge>
        )}
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You are Ready To Sweat</Offcanvas.Title>
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
