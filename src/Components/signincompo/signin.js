import React, { useState } from "react";
import "./signin.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faLock, faUser, faUserTie, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // Default role

  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = user.trim();
    const mail = email.trim();
    const pass = password.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      const response = await axios.post("https://gym-shop-khhw.onrender.com/register", {
        name,
        email: mail,
        password: pass,
        role, // Include role in request
      });
      console.log(response.data);

      setUser("");
      setEmail("");
      setPassword("");
      setRole("customer"); // Reset role to default
      if (role === "admin") {
        navigate("/Admin/Dashboard");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="firstsection">
      <div id="signinsection">
        <div className="signin-container">
          <Row className="row">
            <Col className="welcomesection2" lg={6}>
              <h1>Welcome Buddy!</h1>
              <p>Please sign up to explore the new features of our platform</p>
            </Col>
            <Col className="inputsection2" lg={6}>
              <h1>SignUp</h1>
              <Form onSubmit={handleSubmit} className="inputs2">
                <Form.Group className="mb-3">
                  <Form.Label style={{color:"white"}}>Username :</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                    <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Username" />
                  </div>
                  {userError && <div className="error-message">{userError}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{color:"white"}}>Email :</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="username@gmail.com" />
                  </div>
                  {emailError && <div className="error-message">{emailError}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{color:"white"}}>Password :</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                    <Form.Control type={visible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <span className="input-group-text" onClick={() => setVisible(!visible)}>
                      <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
                    </span>
                  </div>
                  {passwordError && <div className="error-message">{passwordError}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{color:"white"}}>Role :</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text"><FontAwesomeIcon icon={role === "customer" ? faUsers : faUserTie} /></span>
                    <Form.Select style={{ outline: "none", boxShadow: "none", borderColor: "inherit" }} value={role} onChange={(e) => setRole(e.target.value)}>
                      <option value="customer">Customer</option>
                      <option value="admin">Admin</option>
                    </Form.Select>
                  </div>
                </Form.Group>

                <Button className="loginbtn2" type="submit">Sign Up</Button>
              </Form>

              <p>Already have an account? <span className="linkitem" onClick={() => navigate("/login")}>
                Log In
              </span></p>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Signin;
