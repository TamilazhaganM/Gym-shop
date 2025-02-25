import React, { useState } from 'react';
import { Col, Row, Table, Offcanvas, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
import './Adminprogram.css';


const Adminprogram = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setShowSidebar(false);
  };

  const menuItems = [
    { name: 'Dashboard', path: '/Admin/Dashboard' },
    { name: 'Add Member', path: '/Admin/Addmember' },
    { name: 'Bills', path: '/Admin/Bills' },
    { name: 'Fee Package', path: '/Admin/Fees-Package' },
    { name: 'Program List', path: '/Admin/Admin-program' },
    { name: 'Gym Members', path: '/Admin/Gym-members' },
    { name: 'Meal Planner', path: '/Admin/Meal-planner' },
    { name: 'Settings', path: '/Admin/Settings' },
    { name: 'Logout', path: '/login' }
  ];

  return (
    <div>
      {/* Menubar for screens less than 992px */}
      <div className="d-flex align-items-center justify-content-between d-lg-none mb-3" style={{ background: "#fa8109", padding: '10px' }}>
  <Button variant="outline-dark" onClick={() => setShowSidebar(true)}>
    <List /> 
  </Button>
  <div className="flex-grow-1 text-center">
    <Image src={require('../../assets/logo.png')} alt="Logo" style={{ height: '40px' }} />
  </div>
</div>


      {/* Sidebar Offcanvas for mobile view */}
      <Offcanvas className="admintable" show={showSidebar} onHide={() => setShowSidebar(false)} placement="start">
        <Offcanvas.Header closeButton>
       
          <Offcanvas.Title>Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {menuItems.map((item) => (
            <button key={item.name} className="dashbtn" onClick={() => handleNavigation(item.path)}>
              {item.name}
            </button>
          ))}
        </Offcanvas.Body>
      </Offcanvas>

      <Row>
        {/* Sidebar for large screens */}
        <Col lg={2} className="d-none d-lg-block admintable">
          <h1>Admin</h1>
          {menuItems.map((item) => (
            <button key={item.name} className="dashbtn" onClick={() => handleNavigation(item.path)}>
              {item.name}
            </button>
          ))}
        </Col>

        {/* Main Content */}
        <Col lg={10} style={{ background: "linear-gradient(to bottom, #dce1de, #ced3ce)" }}>
          <h3>Program List</h3>
          <Table striped bordered>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Services</th>
                <th>Gender</th>
                <th>Amount</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, service: 'Yoga', gender: 'Unisex', amount: 1000 },
                { id: 2, service: 'Full Body Workout', gender: 'Unisex', amount: 1500 },
                { id: 3, service: 'Weight Gain', gender: 'Unisex', amount: 500 },
                { id: 4, service: 'Athletic Workout', gender: 'Unisex', amount: 2000 }
              ].map((program, index) => (
                <tr key={program.id}>
                  <td>{index + 1}</td>
                  <td>{program.service}</td>
                  <td>{program.gender}</td>
                  <td>{program.amount}</td>
                  <td>
                    <button className='programbtn1'><i className="bi bi-check-lg"></i></button>
                    <button className='programbtn2'><i className="bi bi-trash-fill"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Adminprogram;
