import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {FaUsers}  from 'react-icons/fa';
import CustomNavbar from './Navbar';
import Sidebar from './Sidebar';


const User = () => {
  return (
    <div>
       <CustomNavbar />
        <Container fluid>
          <Row>
            <Col md={2} className="p-0">
              <Sidebar />
            </Col>
            <Col md={10}>
            <p>  <FaUsers className='mx-1' /> / User</p>
            </Col>
          </Row>
        </Container>
    </div>
  
  );
};

export default User;
