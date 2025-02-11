import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Fees = () => {
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
          <Col style={{background:"linear-gradient(to bottom,#d5f4ec,#ecefed)"}}>
          <Container>
          <h3 style={{textAlign:"center"}}>Fees Structure </h3>
          <Row>
            <Col lg={4} md={12}>
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Text className="card-Title" style={{color:'rgb(51, 185, 185)'}}>New Member Trial</Card.Text>
                <Card.Title className="card-Title" style={{color:'rgb(51, 185, 185)'}}>Rs.100</Card.Title>
                <Card.Body>
                  <Card.Text className="card-texttt">
                    Try us out! Sign up for a new member trial and discover the
                    perfect place to work out, build strength, and stay
                    motivated
                  </Card.Text>
                  <Button variant="secondary">Select</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Text className="card-Title" style={{color:'rgb(51, 185, 185)'}}>6 Month Pack</Card.Text>
                <Card.Title className="card-Title" style={{color:'rgb(51, 185, 185)'}}>Rs.4000</Card.Title>
                <Card.Body>
                  <Card.Text className="card-texttt">
                  Grab our 6-month gym membership and enjoy unlimited workouts and personalized support to keep you motivated every step
                  </Card.Text>
                  <Button variant="secondary">Select</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Text className="card-Title"  style={{color:'rgb(51, 185, 185)'}}> One Year Pack</Card.Text>
                <Card.Title className="card-Title" style={{color:'rgb(51, 185, 185)'}}>Rs.6000</Card.Title>
                <Card.Body>
                  <Card.Text className="card-texttt">
                  With our 6-month membership, you get access to premium equipment,
                   expert trainers, and a clear path to reaching your fitness goals
                  </Card.Text>
                  <Button variant="secondary">Select</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
          </Col>
        </Row>
    </div>
  )
}

export default Fees