import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(""); // Corrected state variable
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const navigate=useNavigate()


  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  const  handleSubmit = async (e)=> {
    e.preventDefault()
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // Simple validation for empty fields
    if (!trimmedEmail) {
      alert("Please enter your email.");
      return;
    }
    if(!emailPattern.test(trimmedEmail)){
      alert("Please Enter a Valid email address")
      return;
    }
    if (!trimmedPassword) {
      alert("Please enter your password.");
      return;
    }
    try {
     const response = await axios.post('https://gym-shop-1.onrender.com/login',{email:trimmedEmail,password:trimmedPassword})
     if (response.data.status === "success") {
      navigate("/home");
    } else {
      alert(response.data.message);
    }
      
    } catch (error) {
      console.error("error is" + error);
      
    }

   
  }
  function navigatetosignin(){
    navigate('/')
  }

  return (
    <section id="firstsection">
      <div id="Loginsection">
        <div className="login-container">
          <Container>
            <Row>
              <Col className="welcomesection" lg={6} sm={12}>
                <h1>Great to see you again!</h1>
                <p>Ready to explore what's new?</p>
              </Col>
              <Col className="inputsection" lg={6} sm={12}>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                <div className="inputs">
                  <div className="input-group mb-3">
                    <span className="input-group-text inputfield" id="basic-addon1">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      value={email}
                      className="inputfield2"
                      placeholder="Email"
                      onChange={handleEmail} // Added onChange handler
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text inputfield"  id="basic-addon1">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <div>
                      <input
                        type={visible ? "text" : "password"}
                        value={password}
                        className="inputfield2"

                        placeholder="Password"
                        onChange={handlePassword}
                        aria-describedby="basic-addon1"
                        required
                      />
                      <div
                        className="eyebtn2"
                        onClick={() => setVisible(!visible)}
                      >
                        {visible ? (
                          <FontAwesomeIcon icon={faEye} />
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="loginbtn" type="submit">
                  Login
                </Button>
                </Form>      
                

                <p>
                  Don't have an account?{" "}
                  <span className="linkitem" onClick={navigatetosignin}>
                    Sign In
                  </span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Login;
