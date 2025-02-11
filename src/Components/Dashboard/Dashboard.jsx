import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./Dashboard.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate=useNavigate()
      function Dashboard(){
          navigate('/Admin/Dashboard')
      }
      function Addmember (){
          navigate('/Admin/Addmember')
      }function Bills (){
        navigate('/Admin/Bills')
    } 
      function Feepackage (){
          navigate('/Admin/Fees-Package')
      } function Adminprogramlist (){
          navigate('/Admin/Admin-program')
      }  function GymMember  (){
        navigate('/Admin/Gym-members')
    } function login  (){
      navigate('/login')
  }
  function Settings  (){
    navigate('/Admin/Settings')
} function Mealplanner  (){
  navigate('/Meal-planner')
}
  return (
    <div>
      <div className="admin">
        <Row>
          <Col className="admintable" lg={2}>
            <div>
              <h1>Admin</h1>
              <div>
                <button className="dashbtn" onClick={Dashboard}>Dashboard</button>
                <br></br>
                <button className="dashbtn" onClick={Addmember}>Add Member</button>
                <br></br>
                <button className="dashbtn" onClick={Bills}>Bills</button>
                <br></br>
                <button className="dashbtn" onClick={Feepackage}>Fee Package</button>
                <br></br>
                <button className="dashbtn" onClick={Adminprogramlist}>Program list</button> <br></br>
                <button className="dashbtn" onClick={GymMember}>Gym Members</button> <br></br>
                <button className="dashbtn" onClick={Mealplanner}>Meal Planner</button> <br></br>
                <button className="dashbtn" onClick={Settings}>Settings</button> <br></br>
                <button className="dashbtn"onClick={login}>Logout</button> <br></br>

              </div>
            </div>
          </Col>
          <Col lg={10}>
            {" "}
            <div>
              <div>
                <Navbar
                  bg="dark"
                  variant="dark"
                  expand="lg"
                  className="px-2 py-2 navbar2"
                >
                  <Navbar.Brand href="">
                    <Image
                      src={require("../../assets/logo.png")}
                      className="logoimage1"
                    ></Image>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex mx-auto searchbox">
                      <FormControl
                        type="search"
                        placeholder="Search..."
                        className="me-2 w-100 text-start" // Ensures full width and left-aligned text
                        aria-label="Search"
                      />
                      <Button
                        className="searchbtn my-auto"
                        variant="outline-light"
                      >
                        Search
                      </Button>
                    </Form>
                    <Nav>
                      <Nav.Link href="#" className="text-light">
                        <FaBell size={20} />
                      </Nav.Link>
                      <Nav.Link href="#" className="text-light">
                        <FaUserCircle size={24} />
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <h2>Hi,welcome to Dashboard</h2>
                <div className="dashcontainer">
                  <div className="dashbox" style={{backgroundColor:"rgba(159, 129, 129, 0.89)"}}>
                    <Row>
                      <Col style={{color:"rgba(146, 61, 61, 0.893)"}}>
                        <h3>Rs.1000 </h3>
                        <p>Revenue</p>
                      </Col>
                      <Col>
                        <i class="bi bi-currency-rupee fs-1" style={{color:"rgba(146, 61, 61, 0.893)"}}></i>
                      </Col>
                    </Row>
                  </div>
                  <div className="dashbox" style={{backgroundColor:"rgb(165, 235, 165)"}}>
                    <Row>
                      <Col style={{color:"rgb(13, 130, 13)"}}>
                        <h3>40 </h3>
                        <p>Sales</p>
                      </Col>
                      <Col>
                        <i class="bi bi-cart-check fs-1" style={{color:"rgb(13, 130, 13)"}}></i>
                      </Col>
                    </Row>
                  </div>
                  <div className="dashbox" style={{backgroundColor:'rgb(190, 150, 227)'}}>
                    <Row>
                      <Col style={{color:'rgb(138, 49, 222)'}}>
                        <h3>40 </h3>
                        <p>Customer</p>
                      </Col>
                      <Col>
                        <i class="bi bi-people-fill fs-1" style={{color:'rgb(138, 49, 222)'}}></i>
                      </Col>
                    </Row>
                  </div>
                  <div className="dashbox" style={{backgroundColor:'rgb(223, 176, 199)'}}>
                    <Row>
                      <Col  style={{color:'rgb(184, 29, 106)'}}>
                        <h3>15 </h3>
                        <p>Employee</p>
                      </Col>
                      <Col>
                      <i class="bi bi-person-badge-fill fs-1" style={{color:'rgb(187, 30, 108)'}}></i>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div>
                    <div>
                        <Row>
                            <Col className="dashimg">
                            <h4>Chart Daily</h4>
                                <Image className="dashimg1" src={require('../../assets/graph.png')}></Image>
                            </Col>
                            <Col className="dashimg">
                            <h4>Based on Age</h4>
                            <Image className="dashimg2" src={require('../../assets/graph2.jpeg')}></Image>
                            </Col>
                        </Row>
                    </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
