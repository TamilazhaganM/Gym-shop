import React, { useState, useEffect } from "react";
import "./Contact.css";
import Footer from "../Footer";
import axios from "axios";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [users, setUsers] = useState(() => {
    // Load users from localStorage on component mount
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const newname = name.trim();
  const newphone = phone.trim();
  const newcity = city.trim();

  const generateUniqueId = () => {
    return Date.now() + Math.random().toString(36).substring(2, 9);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    // Update localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const postdata = async () => {
    if (!newname || !newphone || !newcity) {
      alert("All fields must be filled out.");
      return;
    }
    const newUser = {
      id: generateUniqueId(),
      name: newname,
      phone: newphone,
      city: newcity,
    };

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data", error);
    }

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setName("");
    setPhone("");
    setCity("");
  };

  useEffect(() => {
    // Load users from localStorage when component mounts
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  return (
    <div className="contact-table">
      <h1 className="heading">Contact Information</h1>
      <table hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>City</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.city}</td>
              <td>
                <div className="buttons">
                  <button className="deletebtn" onClick={() => deleteUser(data.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td>{users.length + 1}</td>
            <td>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..." />
            </td>
            <td>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone..." />
            </td>
            <td>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Place..." />
            </td>
            <td>
              <div className="buttons">
                <button className="Addbtn" onClick={postdata}>
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Contact;
