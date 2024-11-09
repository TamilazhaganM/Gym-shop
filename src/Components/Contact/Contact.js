import React from "react";
import "./Contact.css";
import { Button, FloatingLabel, Form, Image } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Hit Us Up Anytime</h1>
      <div className="contactWrapper">
        <Image
          className="contactimg"
          src={require("../../assets/contactimg.avif")}
        ></Image>
        <Form className="form overlayContact">
        <h3>contact us</h3>
          <FloatingLabel controlId="floatingFname" label="First Name" className="mb-3 input">
            <Form.Control type="text" placeholder="First Name" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingLname" label="Last Name" className="mb-3 input" >
            <Form.Control type="text" placeholder="Last Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 input"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingphone" label="Phone" className="mb-3 input">
            <Form.Control type="tel" placeholder="Phone" />
          </FloatingLabel>
          <Button className="submitbtn" type="submit">Submit</Button>
        </Form>
      </div>
       <div className="download">
        <h3 className="">Download Our Mobile App</h3>
        <p>Download the app in Playstore and Join "THE STUDIO" to easily stay updates on the go</p>
        <Image className="downloadimg" src={require('../../assets/contactimg2.avif')}></Image>
        <Image className="downloadimg2" src={require('../../assets/Downloadimg2.png')}></Image>
      </div>
    
    </div>
  );
};

export default Contact;
