// src/components/UserCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const UserCard = ({ user }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>{user.email}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserCard;

