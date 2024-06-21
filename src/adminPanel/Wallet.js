import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {FaStore}  from 'react-icons/fa';

const Wallet = () => {
  return (
    <Container fluid className="">
      <p> <FaStore className='mx-1' /> / Wallet</p>
    </Container>
  );
};

export default Wallet;
