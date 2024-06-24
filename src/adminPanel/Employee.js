import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import {FaUserTie}  from 'react-icons/fa';
import CustomNavbar from './Navbar';
import Sidebar from './Sidebar';

const Employee = () => {
  return (
    <div>
    <CustomNavbar />
     <Container fluid>
       <Row>
         <Col md={2} className="p-0">
           <Sidebar />
         </Col>
         <Col md={10}>
         <p> <FaUserTie className='mx-1' /> / Employee</p>
         </Col>
       </Row>
     </Container>
 </div>
    
  );
};

export default Employee;
