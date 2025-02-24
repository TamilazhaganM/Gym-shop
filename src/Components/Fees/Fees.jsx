import React, { useState } from 'react'
import { Offcanvas, Button, Col, Container, Row,Image, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Fees.css'

const Fees = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      {/* Header with Logo and Menu Button for mobile */}
      <div className="d-flex justify-content-between align-items-center d-lg-none p-2 header bg-dark">
        <Button variant="dark" className="menu-btn" onClick={handleShow}>
          <FaBars />
        </Button>
        <Image
          src={require('../../assets/logo.png')}
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: '80px', margin: '0 auto' }}
        />
      </div>

      {/* Main Layout for screens above 992px */}
      <Container fluid>
        <Row>
          {/* Sidebar for larger screens */}
          <Col lg={2} className="d-none d-lg-block text-white admintable">
            <h1>Admin</h1>
            <button className="dashbtn" onClick={() => navigate('/Admin/Dashboard')}>Dashboard</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Addmember')}>Add Member</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Bills')}>Bills</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Fees-Package')}>Fee Package</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Admin-program')}>Program list</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Gym-members')}>Gym Members</button>
            <button className="dashbtn" onClick={() => navigate('/Meal-planner')}>Meal Planner</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Settings')}>Settings</button>
            <button className="dashbtn" onClick={() => navigate('/login')}>Logout</button>
          </Col>

          {/* Main Content */}
          <Col xs={12} lg={10}>
            <h2 className="text-center">Fee Packages</h2>

            <Table striped bordered hover responsive className="mt-4">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Package Name</th>
                  <th>Duration</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1-Month Package</td>
                  <td>1 Month</td>
                  <td>RS.1000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>6-Month Package</td>
                  <td>6 Months</td>
                  <td>RS.4000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1-Year Package</td>
                  <td>12 Months</td>
                  <td>RS.6000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      {/* Offcanvas Sidebar for mobile */}
      <Offcanvas show={show} onHide={handleClose} backdrop="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='admintable'>
            <h3>Admin</h3>
            <button className="dashbtn" onClick={() => navigate('/Admin/Dashboard')}>Dashboard</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Addmember')}>Add Member</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Bills')}>Bills</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Fees-Package')}>Fee Package</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Admin-program')}>Program list</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Gym-members')}>Gym Members</button>
            <button className="dashbtn" onClick={() => navigate('/Meal-planner')}>Meal Planner</button>
            <button className="dashbtn" onClick={() => navigate('/Admin/Settings')}>Settings</button>
            <button className="dashbtn" onClick={() => navigate('/login')}>Logout</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Fees
