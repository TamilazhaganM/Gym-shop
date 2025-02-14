import React, { useState } from 'react'
import './Addmemb.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Addmemb = () => {
  const [user,setUser]=useState("")
  const [email,setEmail]=useState("")
  const [city,setCity]=useState("")
  const [phone,setPhone]=useState("")
  const [gender,setGender]=useState("")
  const [packages,setPackages]=useState("")
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
        // const [formData, setFormData] = useState({
        //   name: "",
        //   email: "",
        //   phone: "",
        //   city:"",
        //   gender: "",
        //   packages: "",
        // });
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          const name = user.trim();
          const mail = email.trim();
          const place = city.trim();
          const mobile = phone.trim();
          const genders = gender.trim();
          const membership=packages.trim();

          if (!user) {
            alert("Please Enter Your Name");
            return;
          }
      
          if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address");
            return;
          }
      
          if (!place) {
            alert("Please Enter Your city");
            return;
          }
          if (!/^\d{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number");
            return;
          }
          if(!genders){
            alert("Select the Gender")
            return;
          }
          if(!membership){
            alert("Select the Membership")
            return
          }
          try {
            const response= await axios.post("https://gym-shop-khhw.onrender.com/customerAdd",{
              name,
              mail,
              place,
              mobile,
              genders,
              membership
            })
            console.log("Response from Add member:",response.data)
          } catch (error) {
            console.error("Error during  Adding member:", error);
          }
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
                value={user}
                onChange={(e)=>setUser(e.target.value)}
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
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
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
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
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
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label  style={{color:"rgb(51, 185, 185)",fontSize:"large"}}>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
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
            value={packages}
            onChange={(e)=>setPackages(e.target.value)}
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