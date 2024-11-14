import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ProgramContext } from '../Program/Program';

const Orders = () => {
  const { order, setOrders } = useContext(ProgramContext); // Get order and setOrders from context

  // Function to handle removing an order
  const handleRemove = (index) => {
    // Create a new array excluding the item at the specified index
    const updatedOrder = order.filter((_, i) => i !== index);
    setOrders(updatedOrder); // Update the context with the new order
  };

  return (
    <div>
      <h2>SELECTED PROGRAMS</h2>
      <ListGroup as="ol" numbered>
        {order.map((item, index) => (
          <ListGroup.Item
            as="li"
            key={index}
            className="d-flex justify-content-between align-items-start"
            onClick={() => handleRemove(index)} // Handle item click to remove it
            style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate clickable items
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
              Price: Rs.{item.price}/Month
            </div>
            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Orders;
    