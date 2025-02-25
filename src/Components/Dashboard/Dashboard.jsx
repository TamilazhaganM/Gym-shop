import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  Row,
  Offcanvas,
} from "react-bootstrap";
import "./Dashboard.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  // Navigation functions
  const Dashboard = () => navigate("/Admin/Dashboard");
  const Addmember = () => navigate("/Admin/Addmember");
  const Bills = () => navigate("/Admin/Bills");
  const Feepackage = () => navigate("/Admin/Fees-Package");
  const Adminprogramlist = () => navigate("/Admin/Admin-program");
  const GymMember = () => navigate("/Admin/Gym-members");
  const Mealplanner = () => navigate("/Meal-planner");
  const Settings = () => navigate("/Admin/Settings");
  const login = () => navigate("/login");

  return (
    <div className="admin">
      <Row >
        {/* Offcanvas Sidebar for Small Screens */}
        <Offcanvas
          show={showSidebar}
          onHide={() => setShowSidebar(false)}
          responsive="lg"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Sidebar Component */}
            <div className="admintable d-lg-none">
              <h1>Admin</h1>
              <button className="dashbtn" onClick={Dashboard}>
                Dashboard
              </button>
              <button className="dashbtn" onClick={Addmember}>
                Add Member
              </button>
              <button className="dashbtn" onClick={Bills}>
                Bills
              </button>
              <button className="dashbtn" onClick={Feepackage}>
                Fee Package
              </button>
              <button className="dashbtn" onClick={Adminprogramlist}>
                Program list
              </button>
              <button className="dashbtn" onClick={GymMember}>
                Gym Members
              </button>
              <button className="dashbtn" onClick={Mealplanner}>
                Meal Planner
              </button>
              <button className="dashbtn" onClick={Settings}>
                Settings
              </button>
              <button className="dashbtn" onClick={login}>
                Logout
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Sidebar for Large Screens */}
        <Col lg={2} className="d-none d-lg-block p-12">
          <div className="admintable">
            <h1>Admin</h1>
            <button className="dashbtn" onClick={Dashboard}>
              Dashboard
            </button>
            <button className="dashbtn" onClick={Addmember}>
              Add Member
            </button>
            <button className="dashbtn" onClick={Bills}>
              Bills
            </button>
            <button className="dashbtn" onClick={Feepackage}>
              Fee Package
            </button>
            <button className="dashbtn" onClick={Adminprogramlist}>
              Program list
            </button>
            <button className="dashbtn" onClick={GymMember}>
              Gym Members
            </button>
            <button className="dashbtn" onClick={Mealplanner}>
              Meal Planner
            </button>
            <button className="dashbtn" onClick={Settings}>
              Settings
            </button>
            <button className="dashbtn" onClick={login}>
              Logout
            </button>
          </div>
        </Col>

        {/* Main Dashboard Content */}
        <Col lg={10}>
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="px-2 py-2 navbar2"
          >
            <Button
              variant="outline-light"
              className="d-lg-none"
              onClick={() => setShowSidebar(true)}
            >
              ☰ Menu
            </Button>
            <Navbar.Brand href="">
              <Image
                src={require("../../assets/logo.png")}
                className="logoimage1"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Form className="d-flex mx-auto searchbox">
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="me-2 w-100 text-start"
                  aria-label="Search"
                />
                <Button className="searchbtn my-auto" variant="outline-light">
                <i className="bi bi-search"></i>
                </Button>
              </Form>
              <Nav className="justify-content-center w-100 text-center">
                <Nav.Link href="#" className="text-light">
                  <FaBell size={20} />
                </Nav.Link>
                <Nav.Link href="#" className="text-light">
                  <FaUserCircle size={24} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <h2>Hi, welcome to Dashboard</h2>

          {/* Dashboard Boxes */}
          <div className="dashcontainer">
            <div
              className="dashbox"
              style={{ backgroundColor: "rgba(159, 129, 129, 0.89)" }}
            >
              <Row>
                
                <Col>
                  <i
                    className="bi bi-currency-rupee fs-1"
                    style={{ color: "rgba(146, 61, 61, 0.893)" }}
                  ></i>
                </Col>
                <Col style={{ color: "rgba(146, 61, 61, 0.893)" }}>
                  <h3>Rs.1000</h3>
                  <p>Revenue</p>
                </Col>
              </Row>
            </div>
            <div
              className="dashbox"
              style={{ backgroundColor: "rgb(165, 235, 165)" }}
            >
              <Row>
               
                <Col>
                  <i
                    className="bi bi-cart-check fs-1"
                    style={{ color: "rgb(13, 130, 13)" }}
                  ></i>
                </Col>
                <Col style={{ color: "rgb(13, 130, 13)" }}>
                  <h3>40</h3>
                  <p>Sales</p>
                </Col>
              </Row>
            </div>
            <div
              className="dashbox"
              style={{ backgroundColor: "rgb(190, 150, 227)" }}
            >
              <Row>
               
                <Col>
                  <i
                    className="bi bi-people-fill fs-1"
                    style={{ color: "rgb(138, 49, 222)" }}
                  ></i>
                </Col>
                <Col style={{ color: "rgb(138, 49, 222)" }}>
                  <h3>40</h3>
                  <p>Customer</p>
                </Col>
              </Row>
            </div>
            <div
              className="dashbox"
              style={{ backgroundColor: "rgb(223, 176, 199)" }}
            >
              <Row>
                
                <Col>
                  <i
                    className="bi bi-person-badge-fill fs-1"
                    style={{ color: "rgb(187, 30, 108)" }}
                  ></i>
                </Col>
                
              </Row>
            </div>
          </div>

          {/* Chart Section */}
          <div className="chart-section">
            <Row >
              <Col lg={6} xs={12}  >
                <h4>Chart Daily</h4>
                <Image
                  src={require("../../assets/graph.png")}
                  className=" dashimg1"
                  alt="Chart Daily"
                />
              </Col>
              <Col lg={6} xs={12} >
                <h4>Based on Age</h4>
                <Image
                  src={require("../../assets/graph2.jpeg")}
                  className=" dashimg2"
                  alt="Based on Age"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
