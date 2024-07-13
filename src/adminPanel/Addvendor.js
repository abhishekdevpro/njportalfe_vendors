import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaStore } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from './Navbar';
import Sidebar from './Sidebar';

const Addvendor = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    description: '',
    company_name: '',
    access: [] // Initialize access property
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === 'checkbox') {
      const updatedAccess = checked
        ? [...formData.access, name]
        : formData.access.filter((item) => item !== name);
  
      setFormData({ ...formData, access: updatedAccess });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('https://api.novajobs.us/api/admin/create-vendor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token // Include the token without 'Bearer' prefix
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success('Vendor registered successfully! Please check your email for verification.');
      } else {
        toast.error('Vendor registration failed. Please try again later.');
      }
    } catch (error) {
      toast.error('Error registering vendor.');
    }
  };
  
  return (
    <div>
      <CustomNavbar />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <Sidebar />
          </Col>
          <Col md={10} className=''>
            <h4 className='ms-5 ps-5 m-4'>Add Vendor </h4>
            <Form onSubmit={handleSubmit} className='ms-5 ps-5'>
              <div className='d-flex gap-5'>
              <Form.Group controlId="formFirstName">
                <Form.Label className='mx-5'>First Name</Form.Label>
                <Form.Control
                className='w-100 p-4 mx-5'
                  type="text"
                  placeholder="Enter first name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label className='mx-5'>Last Name</Form.Label>
                <Form.Control
                className='w-100 p-4 mx-5'
                  type="text"
                  placeholder="Enter last name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              </div>
              <div className='d-flex gap-5'>
              <Form.Group controlId="formEmail">
                <Form.Label className='mx-5'>Email address</Form.Label>
                <Form.Control
                className='w-100 p-4 mx-5'
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label className='mx-5'>Phone</Form.Label>
                <Form.Control
                className='w-100 p-4 mx-5'
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
             </div>

            <div className='d-flex gap-5'>
            <Form.Group controlId="formPassword">
                <Form.Label className='mx-5'>Password</Form.Label>
                <Form.Control
                className='w-100 p-4 mx-5'
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCompanyName">
                <Form.Label className='mx-5'>Company Name</Form.Label>
                <Form.Control
                className='w-100 p-4 mx-5'
                  type="text"
                  placeholder="Enter company name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              
            </div>


            <Form.Group controlId="formdescription">
                <Form.Label className='mx-5'>Description</Form.Label>
                <Form.Control
                className='w-100 p-4 mx-5'
                  type="text"
                  placeholder="Enter company name"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>



              <Button variant="primary" type="submit" className='mb-3'>
                ADD
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Addvendor;
