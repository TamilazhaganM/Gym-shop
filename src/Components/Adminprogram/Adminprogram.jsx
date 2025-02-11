import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import "./Adminprogram.css"
import { useNavigate } from 'react-router-dom'


const Adminprogram = () => {
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
          <Col>
            <h3>Program-List</h3>
            <Table striped="columns">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Services</th>
          <th>Gender</th>
          <th>Amont</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Yoga</td>
          <td>Unisex</td>
          <td>1000</td>
          <td><button className='programbtn1'><i class="bi bi-check-lg"></i></button><button className='programbtn2'><i class="bi bi-trash-fill"></i></button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Full body Workout</td>
          <td>Unisex</td>
          <td>1500</td>
          <td><button className='programbtn1'><i class="bi bi-check-lg"></i></button><button className='programbtn2'><i class="bi bi-trash-fill"></i></button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Weight Gain</td>
          <td>Unisex</td>
          <td>500</td>
          <td><button className='programbtn1'><i class="bi bi-check-lg"></i></button><button className='programbtn2'><i class="bi bi-trash-fill"></i></button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Atheletic Workout</td>
          <td>Unisex</td>
          <td>2000</td>
          <td><button className='programbtn1'><i class="bi bi-check-lg"></i></button><button className='programbtn2'><i class="bi bi-trash-fill"></i></button></td>

        </tr>
      </tbody>
    </Table>
          </Col>
        </Row>
    </div>
  )
}

export default Adminprogram