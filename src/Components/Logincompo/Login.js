import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setErrorMessage("");
  
    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }
    if (!password.trim()) {
      setPasswordError("Please enter your password.");
      return;
    }
  
    try {
      const response = await axios.post('https://gym-shop-khhw.onrender.com/login', { email, password });
      console.log("Login Response:", response.data);
      if (response.data.status === "success") {
        // Ensure user object exists before destructuring
        if (response.data.user && response.data.user.role) {
          const { role } = response.data.user;
  
          if (role === "admin") {                                                                                                                                       
            navigate("/admin/Dashboard");
          } else {
            navigate("/home");
          }
        } else {
          setErrorMessage("Login successful, but user role is missing.");
          navigate("/home"); // Fallback route
        }
      } else {
        if (response.data.message === "Incorrect password") {
          setPasswordError("Password is incorrect. Please try again.");
        } else if (response.data.message === "Email doesn't exist") {
          setEmailError("The email address is not registered.");
        } else {
          setErrorMessage(response.data.message);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };
  

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
                      <span className="input-group-text inputfield">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <input
                        type="email"
                        value={email}
                        className="inputfield2"
                        placeholder="Email"
                        onChange={handleEmail}
                      />
                    </div>
                    {emailError && <div className="error-message">{emailError}</div>}

                    <div className="input-group mb-3">
                      <span className="input-group-text inputfield">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                      <div>
                        <input
                          type={visible ? "text" : "password"}
                          value={password}
                          className="inputfield2"
                          placeholder="Password"
                          onChange={handlePassword}
                        />
                        <div
                          className="eyebtn2"
                          onClick={() => setVisible(!visible)}
                          role="button"
                        >
                          {visible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </div>
                      </div>
                    </div>
                    {passwordError && <div className="error-message">{passwordError}</div>}
                  </div>
                  <Button className="loginbtn" type="submit">
                    Login
                  </Button>
                </Form>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <p>
                  Don't have an account?{" "}
                  <span className="linkitem" onClick={() => navigate('/')}>
                    Sign Up
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
