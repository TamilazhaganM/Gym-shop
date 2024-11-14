import React from "react";
import "./card.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Orders from "../Orders/orders";

const Card = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="cards">
      <Button
        style={{
          color: "black",
          backgroundColor: "transparent",
          border: "none",
        }}
        onClick={() => setShow(!show)}
        className="me-2"
      >
        <i
          class="bi bi-cart4"
          style={{ fontSize: "1.5rem", textAlign: "center " }}
        ></i>
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You are Ready To Sweat</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Orders />
          <div className="text-center mt-3">
            <Button style={{ backgroundColor: "#fa8109", border: "none  " }}>
              Checkout
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Card;
