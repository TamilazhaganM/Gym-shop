import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Offcanvas, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Pencil, TrashFill, Check, List } from "react-bootstrap-icons";
import './GymMember.css';

const GymMember = () => {
  const [members, setMembers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("https://gym-shop-khhw.onrender.com/Gym-members");
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching gym members:", error);
      }
    };
    fetchMembers();
  }, []);

  const handleEdit = (index, member) => {
    setEditIndex(index);
    setEditData(member);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://gym-shop-khhw.onrender.com/Gym-members/${editData._id}`,
        editData
      );
      if (response.status === 200) {
        const updatedMembers = [...members];
        updatedMembers[editIndex] = editData;
        setMembers(updatedMembers);
        setEditIndex(null);
      }
    } catch (error) {
      console.error("Error updating member:", error);
    }
  };

  const handleDelete = async (index, id) => {
    try {
      const response = await axios.delete(`https://gym-shop-khhw.onrender.com/Gym-members/${id}`);
      if (response.status === 200) {
        const updatedResponse = await axios.get("https://gym-shop-khhw.onrender.com/Gym-members");
        setMembers(updatedResponse.data);
      }
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  return (
    <div>
      {/* Responsive Navbar */}
      <div className="d-flex align-items-center justify-content-between d-lg-none mb-3" style={{ background: "#fa8109", padding: '10px' }}>
        <Button variant="outline-dark" onClick={() => setShowSidebar(true)}>
          <List /> Menu
        </Button>
        <div className="flex-grow-1 text-center">
          <Image src={require("../../assets/logo.png")} alt="Logo" style={{ height: '40px' }} />
        </div>
      </div>

      {/* Offcanvas Sidebar for mobile */}
      <Offcanvas className="admintable" show={showSidebar} onHide={() => setShowSidebar(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {['Dashboard', 'Addmember', 'Bills', 'Fees-Package', 'Admin-program', 'Gym-members', 'Meal-planner', 'Settings'].map((route) => (
            <button key={route} className="dashbtn" onClick={() => navigate(`/Admin/${route}`)}>
              {route.replace('-', ' ')}
            </button>
          ))}
          <button className="dashbtn" onClick={() => navigate('/login')}>Logout</button>
        </Offcanvas.Body>
      </Offcanvas>

      <Row>
        {/* Sidebar for large screens */}
        <Col lg={2} className="d-none d-lg-block sidebar-menu admintable">
          <h1>Admin</h1>
          {['Dashboard', 'Addmember', 'Bills', 'Fees-Package', 'Admin-program', 'Gym-members', 'Meal-planner', 'Settings'].map((route) => (
            <button key={route} className="dashbtn" onClick={() => navigate(`/Admin/${route}`)}>
              {route.replace('-', ' ')}
            </button>
          ))}
          <button className="dashbtn" onClick={() => navigate('/login')}>Logout</button>
        </Col>

        {/* Main Content */}
        <Col lg={10} style={{ background: "linear-gradient(to bottom,#dce1de,#ced3ce)" }}>
          <h3>Gym Members List</h3>

          {/* Responsive Table */}
          <div className="table-responsive">
            <Table striped bordered>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>MOBILE</th>
                  <th>CITY</th>
                  <th>PACKAGE</th>
                  <th>OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member._id}>
                    <td>{index + 1}</td>
                    {['name', 'mail', 'mobile', 'place', 'membership'].map((field) => (
                      <td key={field}>
                        {editIndex === index ? (
                          <input
                            type={field === 'mail' ? 'email' : 'text'}
                            value={editData[field] || ''}
                            onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
                            className="table-input"
                          />
                        ) : (
                          member[field] || '-'
                        )}
                      </td>
                    ))}
                    <td>
                      {editIndex === index ? (
                        <button className='programbtn1' onClick={handleSave}><Check /></button>
                      ) : (
                        <button className='programbtn1' onClick={() => handleEdit(index, member)}><Pencil /></button>
                      )}
                      <button className='programbtn2' onClick={() => handleDelete(index, member._id)}><TrashFill /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GymMember;
