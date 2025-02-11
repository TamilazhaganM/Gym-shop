import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const GymMember = () => {
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
          <Col>
            <h3>Gym Members List</h3>
            <Table striped="columns">
      <thead>
        <tr>
          <th>S.No</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>MOBILE</th>
          <th>CITY</th>
          <th>OPTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tamil</td>
          <td>tamil@gmail.com</td>
          <td>1234567890</td>
          <td>Chennai</td>
          <td><button className='programbtn1'><i class="bi bi-check-lg"></i></button><button className='programbtn2'><i class="bi bi-trash-fill"></i></button></td>
        </tr>
       
      </tbody>
    </Table>
          </Col>
            </Row>
        </div>
    </div>
  )
}

export default GymMember