import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaBell } from 'react-icons/fa';


const CustomNavbar = () => {

  const notifications = 5;


  return (
    <Navbar bg="white" variant="white" className='py-3 border-bottom'>
        <Link to={"/"} className="dez-page">
                    <img style={{width:"110px"}}
                      src={require("../images/logo/NovaUS.png")}
                      className="logo"
                      alt="img"
                    />
                    </Link>
       
      
      <Navbar.Toggle aria-controls="basic-navbar-nav text-black" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#notifications" className="d-flex align-items-center">
            <FaBell style={{ marginRight: '80px' }} />
            <Badge pill bg="danger bg-primary" >
              {notifications}
            </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
   
    </Navbar>
  );
};

export default CustomNavbar;
