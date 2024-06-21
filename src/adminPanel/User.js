import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {FaUsers}  from 'react-icons/fa';

const User = () => {
  return (
    <Container fluid className="">
      <p>  <FaUsers className='mx-1' /> / User</p>
    </Container>
  );
};

export default User;
