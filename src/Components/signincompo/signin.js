import React, { useState } from "react";
import "./signin.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const navigate = useNavigate();

  function handleUser(e) {
    setUser(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = user.trim();
    const mail = email.trim();
    const pass = password.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset error states before validation
    setUserError("");
    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!name) {
      setUserError("Please Enter Your Username");
      valid = false;
    }
    if (!mail) {
      setEmailError("Please Enter Your email");
      valid = false;
    }
    if (!emailPattern.test(mail)) {
      setEmailError("Please Enter a Valid email address");
      valid = false;
    }
    if (!pass) {
      setPasswordError("Please Enter Your Password");
      valid = false;
    }

    if (!valid) return;

    try {
      const response = await axios.post("https://gym-shop-7.onrender.com/register", {
        name,
        email: mail,
        password: pass
      });
      console.log(response.data);

      setUser("");
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  const navigatetologin = () => {
    navigate("/login");
  };

  return (
    <div>
      <section id="firstsection">
        <div id="signinsection">
          <div className="signin-container">
            <Row className="row">
              <Col className="welcomesection2" lg={6}>
                <h1>Welcome Buddy!</h1>
                <p>
                  Please sign up to explore the new feature of our platform
                </p>
              </Col>
              <Col className="inputsection2" lg={6}>
                <h1>SignUp</h1>
                <Form onSubmit={handleSubmit} className="inputs2">
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text inputfield"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      value={user}
                      name="name"
                      className="form-control inputfield2"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={handleUser}
                      required
                    />
                  </div>
                  {userError && <div className="error-message">{userError}</div>}

                  <div className="input-group mb-3">
                    <span
                      className="input-group-text inputfield"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      value={email}
                      name="email"
                      className="form-control inputfield2"
                      placeholder="username@gmail.com"
                      onChange={handleEmail}
                      aria-label="email"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                  {emailError && <div className="error-message">{emailError}</div>}

                  <div className="input-group mb-3">
                    <span
                      className="input-group-text inputfield"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <div>
                      <input
                        type={visible ? "text" : "password"}
                        value={password}
                        name="password"
                        className="form-control inputfield2"
                        placeholder="Password"
                        onChange={handlePassword}
                        aria-describedby="basic-addon1"
                        required
                      />
                      <div
                        className="eyebtn"
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
                  {passwordError && <div className="error-message">{passwordError}</div>}

                  <Button className="loginbtn2" type="submit">
                    Sign Up
                  </Button>
                </Form>

                <p>
                  Already have an account?
                  <span className="linkitem" onClick={navigatetologin}>
                    Log In
                  </span>
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
