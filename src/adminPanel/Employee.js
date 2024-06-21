import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import {FaUserTie}  from 'react-icons/fa';

const Employee = () => {
  return (
    <Container fluid className="">
    <p> <FaUserTie className='mx-1' /> / Employee</p>
  </Container>
  );
};

export default Employee;
