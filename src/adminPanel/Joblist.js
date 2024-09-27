import React, { useEffect, useState } from 'react';
import { Container, Row, Col ,Dropdown} from 'react-bootstrap';
import { FaStore } from 'react-icons/fa';
import CustomNavbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Jobslist = () => {
  const [jobs, setJobs] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null); // Track which dropdown is open
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const toggleDropdown = (jobId) => {
    setOpenDropdownId((prevOpenDropdownId) =>
      prevOpenDropdownId === jobId ? null : jobId
    );
  };

  const handleOptionClick = (jobId, option) => {
    // Handle option selection logic here (e.g., make API calls, update state, etc.)
    console.log(`Selected option for job ${jobId}: ${option}`);
    // Example: Make API call to update job status
    // axios.post(`https://api.novajobs.us/api/admin/update-job/${jobId}`, { status: option }, {
    //   headers: {
    //     Authorization: token,
    //   },
    // }).then(response => {
    //   console.log(response.data);
    // }).catch(error => {
    //   console.error('Error updating job status:', error);
    // });
  };

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

        const jobsEndpoint = 'https://api.novajobs.us/api/admin/job-lists';

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

  const fetchPublishedJobs = () => {
    axios({
      method: 'GET',
      url: 'https://api.novajobs.us/api/employeer/job-lists',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data, 'published');
        setJobs(response.data.data);
      })
      .catch((err) => {
        console.error('Error fetching published job data:', err);
      });
  };

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
              <FaStore className="mx-1" /> / Jobs
            </p>
            <Row>
              <Col md={14}>
                <table className="table">
                  <thead>
                    <tr className="text-center">
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>
                        ID
                      </th>
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>
                        Job Title
                      </th>
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>
                        Created Date
                      </th>
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>Company</th>
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>Location</th>
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>Edit</th>
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>Status</th>
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>Analyst</th>
                      <th style={{ backgroundColor: '#1C2957', color: 'white' }}>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job.id} className="text-center">
                        <td>{job.s_no}</td>
                        <td>{job.job_detail.job_title}</td>
                        <td>{job.job_detail.created_at}</td>
                        <td>{job.companies.company_name}</td>
                        <td>{job.countries.name}</td>
                        <td>
                          <button
                            onClick={() => {
                              navigate(`/admin/addjob/${job.job_detail.id}`);
                            }}
                            className="px-3 py-2 site-button text-white border-0"
                            style={{
                              cursor: 'pointer',
                            }}
                          >
                            Edit Job
                          </button>
                        </td>
                        <td className="text-center">
                        <div className=" top-full d-flex gap-1">
                              <button
                                className=" px-2 py-2 text-white bg-green w-full font-bold rounded-3"
                                onClick={() => handleOptionClick('Approved')}
                              >
                                Approve
                              </button>
                              <button
                                className=" px-3 py-2 text-white bg-danger w-full rounded-3"
                                onClick={() => handleOptionClick('Reject')}
                              >
                                Reject
                              </button>
                            </div>
                        </td>
                        <td className="text-center">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id={`dropdown-status-${job.s_no}`}
                              className="px-2 py-2 text-white  w-full font-bold rounded-3" style={{backgroundColor:'#1C2957'}}
                            >
                              dropdown
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() =>
                                  handleOptionClick(job.job_detail.s_no, 'Option 1')
                                }
                              >
                                Laxmi
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  handleOptionClick(job.job_detail.s_no, 'Option 2')
                                }
                              >
                                Sonu
                              </Dropdown.Item>
                              {/* Additional dropdown items can be added here */}
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                        <td> <input
                        type='textbox'
                        className='p-2'
                        /></td>
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

export default Jobslist;
