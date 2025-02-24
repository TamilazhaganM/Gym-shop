import React, { useState } from 'react'
import { Offcanvas, Button, Col, Container, Row, Form, Image } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Addmemb.css'

const Addmemb = () => {
  const [show, setShow] = useState(false)
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [packages, setPackages] = useState("")

  const navigate = useNavigate()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user.trim()) {
      alert("Please enter the member's name")
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    if (!city.trim()) {
      alert("Please enter the city")
      return
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number")
      return
    }

    if (!gender.trim()) {
      alert("Please select the gender")
      return
    }

    if (!packages.trim()) {
      alert("Please select a membership package")
      return
    }

    try {
      const response = await axios.post("https://gym-shop-khhw.onrender.com/customerAdd", {
        name: user,
        mail: email,
        place: city,
        mobile: phone,
        genders: gender,
        membership: packages
      })
      console.log("Response from Add member:", response.data)
      alert("Member added successfully!")
    } catch (error) {
      console.error("Error adding member:", error)
    }
  }

  return (
    <div>
      {/* Header with Logo and Menu Button for mobile */}
      <div className="d-flex justify-content-between align-items-center d-lg-none header bg-dark ">
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

          {/* Form Section */}
          <Col xs={12} lg={10}>
            <h2 className="text-center">Add Gym Member</h2>
            <Form className="formtable" onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Membership Type:</Form.Label>
                    <Form.Select
                      value={packages}
                      onChange={(e) => setPackages(e.target.value)}
                      required
                    >
                      <option value="">Select Membership</option>
                      <option value="1-Month Package-RS.1000">1-Month Package - RS.1000</option>
                      <option value="6-Month Package-Rs.4000">6-Month Package - Rs.4000</option>
                      <option value="1-Year Package-Rs.6000">1-Year Package - Rs.6000</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <div style={{width:"250px", margin: '10px auto'}}> <Button
                style={{ backgroundColor: "#222831", border: "none", textAlign: "center", margin: "0 auto", width: "200px" }}
                type="submit"
              >
                Add Member
              </Button></div>
             
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Offcanvas Sidebar for mobile */}
      <Offcanvas show={show} onHide={handleClose} backdrop="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          </Offcanvas.Title>
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

export default Addmemb
