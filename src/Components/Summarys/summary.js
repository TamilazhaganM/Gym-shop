import React, { useState, useContext, useEffect } from 'react';
import './Summary.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { ProgramContext } from '../Program/Program';
import Orders from '../Orders/orders';
import Navlist from '../Navbar/Navbar';

const Summarypage = () => {
  const { order } = useContext(ProgramContext); // Access context
  const [member, setMember] = useState(null);
  const [error, setError] = useState(null); // Track errors
  const [amount, setAmount] = useState(); // Default amount, which can be changed by client

  // Dynamically load Razorpay script only when it's needed
  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        console.log('Razorpay script loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay script');
        alert('Payment system is currently unavailable. Please try again later.');
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://gym-shop-7.onrender.com/latest-member');
      setMember(response.data);
      setError(null); // Clear errors on success
    } catch (err) {
      console.error("Error fetching member details:", err);
      setError("Failed to fetch member details. Please try again.");
    }
  };

  const handleConfirmOrder = async () => {
    if (typeof window.Razorpay !== 'function') {
        console.error('Razorpay script not loaded');
        alert('Payment system is currently unavailable. Please try again later.');
        return;
    }

    const currency = "INR";
    const receiptID = "qwsaq1";
    
    // Convert amount to paisa (1 INR = 100 paisa)
    const amountInPaisa = amount * 100;

    try {
        const response = await axios.post('http://localhost:4000/order', {
            amount: amountInPaisa,
            currency,
            receipt: receiptID,
        });

        const options = {
            key: "rzp_test_rOc38Inchp8akI",
            amount: amountInPaisa, // Razorpay takes amount in paisa
            currency,
            name: "Razorpay Corporation",
            description: "Test Transaction",
            order_id: response.data.id,
            handler: function (paymentResponse) {
                alert(`Payment ID: ${paymentResponse.razorpay_payment_id}`);
                alert(`Order ID: ${paymentResponse.razorpay_order_id}`);
                alert(`Signature: ${paymentResponse.razorpay_signature}`);
            },
            prefill: {
                name: "Tamil",
                email: "Tamil@example.com",
                contact: "9000090000",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(options);

        rzp1.on('payment.failed', function (response) {
            console.error(response.error);
            alert("Payment failed. Please try again.");
        });

        rzp1.open();
    } catch (err) {
        console.error('Error creating Razorpay order:', err);
        alert('Failed to initialize payment. Please try again.');
    }
  };

  return (
    <div>
      <Navlist />
      <div className="summary">
        <h1>Thank you for the order</h1>
        <Container>
          <Row>
            <Col lg={6}>
              <h4>Your Details</h4>
              {error && <p className="error-text">{error}</p>} {/* Display error */}
              {member ? (
                <div className="detailsdiv">
                  <p className="summarypara">Name: {member.name}</p>
                  <p className="summarypara">Email: {member.mail}</p>
                  <p className="summarypara">City: {member.place}</p>
                  <p className="summarypara">Phone: {member.mobile}</p>
                </div>
              ) : (
                <p className="summarypara">Details will be displayed here.</p>
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

        {/* Input field for amount */}
        <div className="amount-input">
          <label htmlFor="amount"><p className="summarypara">Enter Amount:</p></label>
          <input
            type="tel"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // Update state on change
            min="1"
            step="1"
          />
        </div>

        <Button className="summarybtn1" onClick={handlesubmit}>Check your Details</Button>
        <Button className="summarybtn2" onClick={handleConfirmOrder}>Confirm your order</Button>
      </div>
    </div>
  );
};

export default Summarypage;
