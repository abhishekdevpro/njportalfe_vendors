import React from 'react';
import { Card, Container, Row, Col,Dropdown} from 'react-bootstrap';
import {FaStore}  from 'react-icons/fa';
import CustomNavbar from './Navbar';
import Sidebar from './Sidebar';
import { useEffect,useState } from 'react';

const Jobseekerlist = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          throw new Error('Auth token not found');
        }

        const headers = {
          'Content-Type': 'application/json',
          Authorization: authToken,
        };

        const jobsEndpoint = 'https://api.novajobs.us/api/admin/job-seekers';

        const response = await fetch(jobsEndpoint, { headers });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data.data); // Assuming the data is in data.data
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <CustomNavbar />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <Sidebar />
          </Col>
          <Col md={10}>
            <p>
              <FaStore className='mx-1' /> / Jobs
            </p>
            <Row>
              <Col md={12}>
                <table className="table">
                  <thead className='text-center'>
                    <tr>
                      <th>Job ID</th>
                      <th>First Name</th>
                      <th>last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>More info</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    {jobs.map((job) => (
                      <tr key={job.id} >
                        <td>{job.jobskkers_detail.id}</td>
                        <td>{job.jobskkers_detail.first_name}</td>
                        <td>{job.jobskkers_detail.last_name}</td>
                        <td>{job.jobskkers_detail.email}</td>
                        <td>{job.jobskkers_detail.phone}</td>
                        <td>
                          {/* Example dropdown */}
                          <Dropdown>
                            <Dropdown.Toggle >
                              Select
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item >Active</Dropdown.Item>
                              <Dropdown.Item >Pending</Dropdown.Item>
                             
                            </Dropdown.Menu>
                          </Dropdown>
                        </td> 
                        
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobseekerlist;
