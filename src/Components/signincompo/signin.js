import React, { useState } from "react";
import "./signin.css";
import { Button, Col,Form, Row } from "react-bootstrap";
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
    e.preventDefault()
    const name = user.trim();
    const mail = email.trim();
    const pass = password.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert("Please Enter Your Username");
      return;
    }
    if (!mail) {
      alert("Please Enter Your email");
      return;
    }
    if (!emailPattern.test(mail)) {
      alert("Please Enter a Valid email address");
      return;
    }
    if (!pass) {
      alert("Please Enter Your Password");
      return;
    }

    try {
      const response = await axios.post("http://13.61.7.123:5000/register", {
        name,
        email:mail,
        password:pass
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
                    Please sign in to explore the new feature of our platform
                  </p>
                </Col>
                <Col className="inputsection2" lg={6}>
                  <h1>Signin</h1>
                  <Form onSubmit={handleSubmit}  className="inputs2">
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text input-group"
                        className="inputfield"
                        id="basic-addon1"
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input
                        type="text"
                        value={user}
                        name="name"
                        class="form-control"
                        placeholder="Username"
                        className="inputfield2"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleUser}
                        required
                      ></input>
                    </div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text"
                        className="inputfield"
                        id="basic-addon1"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <input
                        type="email"
                        value={email}
                        name="email"
                        class="form-control"
                        className="inputfield2"
                        placeholder="username@gmail.com"
                        onChange={handleEmail}
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        required
                      ></input>
                    </div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text"
                        className="inputfield"
                        id="basic-addon1"
                      >
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                      <div>
                        <input
                          type={visible ? "text" : "password"}
                          value={password}
                          name="password"
                          class="form-control"
                          className="inputfield2"
                          placeholder="Password"
                          onChange={handlePassword}
                          aria-describedby="basic-addon1"
                          required
                        ></input>
                        <div
                          className=" eyebtn"
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
                    <Button className="loginbtn2" type="submit"> 
                    Sign In
                  </Button>
                  </Form>
                
                  <p>
                    Already have an account ?
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
