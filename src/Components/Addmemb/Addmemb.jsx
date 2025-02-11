import React, { useState } from 'react'
import './Addmemb.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Addmemb = () => {
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
        const [formData, setFormData] = useState({
          name: "",
          email: "",
          phone: "",
          gender: "",
          membership: "",
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Gym Member Added:", formData);
          alert("Member Added Successfully!");
        };
  return (
    <div>
    <div>
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
          <Col className='Addmembercol2'>
          <Container className="mt-4">
      <h2 className="text-center">Add Gym Member</h2>
      <Form className='formtable' onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label style={{color:"rgb(51, 185, 185)",fontSize:"large"}}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label  style={{color:"rgb(51, 185, 185)", fontSize:"large"}}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label  style={{color:"rgb(51, 185, 185)",fontSize:"large"}}>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label style={{color:"rgb(51, 185, 185)",fontSize:"large"}}>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                name="City"
                value={formData.City}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label  style={{color:"rgb(51, 185, 185)",fontSize:"large"}}>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
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
          <Form.Label  style={{color:"rgb(51, 185, 185)",fontSize:"large"}}>Membership Type</Form.Label>
          <Form.Select
            name="membership"
            value={formData.membership}
            onChange={handleChange}
            required
          >
            <option value="">Select Membership</option>
            <option value="Basic">1-Month Package-RS.1000</option>
            <option value="Premium">6-Month Package-Rs.4000</option>
            <option value="VIP">12-Month Package-Rs.6000</option>
          </Form.Select>
        </Form.Group>
          </Col>
          <Button style={{backgroundColor:"rgb(51, 185, 185" , border:"none", textAlign:"center",margin:"0 auto",width:"200px"}} type="submit">
          Add Member
        </Button>
        </Row>

        

       
      </Form>
    </Container>
          </Col>
          </Row>
    </div>
        
    </div>
)}

export default Addmemb