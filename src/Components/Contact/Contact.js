import React, { useState } from "react";
import "./Contact.css";
import { Button, FloatingLabel, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const name = user.trim();
    const mail = email.trim();
    const place = city.trim();
    const mobile = phone.trim();

    if (!name) {
      alert("Please Enter Your Name");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(mail)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!place) {
      alert("Please Enter Your city");
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    try {
      const response = await axios.post("https://gym-shop-7.onrender.com/member", {
        name,
        mail,
        place,
        mobile,
      });
      console.log({name,mail,place,mobile})
      console.log(response.data);
      navigate("/programlist");
    } catch (error) {
      console.error("Error during sign in:", error);
    }
    // setIsSubmitting(true);
  };

  return (
    <div id="contact">
      <h1>Hit Us Up Anytime</h1>
      <div className="contactWrapper">
        <Image
          className="contactimg"
          src={require("../../assets/contactimg.avif")}
        ></Image>
        <Form className="form overlayContact" onSubmit={handlesubmit}>
          <h3>Join Now</h3>
          <FloatingLabel
            controlId="floatingFname"
            label="First Name"
            className="mb-3 input"
          >
            <Form.Control
              type="text"
              placeholder="First Name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 input"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingLname"
            label="City"
            className="mb-3 input"
          >
            <Form.Control
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingphone"
            label="Phone"
            className="mb-3 input"
          >
            <Form.Control
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FloatingLabel>
          <Button className="submitbtn" type="submit" >Submit
          </Button>
        </Form>
      </div>
      <div className="download">
        <h3 className="">Download Our Mobile App</h3>
        <p>
          Download the app in Playstore and Join "THE STUDIO" to easily stay
          updates on the go
        </p>
        <Image
          className="downloadimg"
          src={require("../../assets/contactimg2.avif")}
        ></Image>
        <Image
          className="downloadimg2"
          src={require("../../assets/Downloadimg2.png")}
        ></Image>
      </div>
    </div>
  );
};

export default Contact;
