import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  FaUsers, FaStore, FaUserTie, FaBriefcase, FaUserGraduate, FaBell, FaUserPlus, FaTasks, FaWallet, FaTachometerAlt
} from 'react-icons/fa';

const Dashboard = () => {
  const [counts, setCounts] = useState({
    team: 0,
    vendors: 0,
    employees: 0,
    jobs: 0,
    jobSeekers: 0,
    notification: 0,
    addtoteam: 0,
    assignRole: 0,
    assignTask: 0,
    wallet: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Replace with your API endpoint
    const fetchCounts = async () => {
      try {
        const response = await fetch('https://api.example.com/dashboard-counts');
        const data = await response.json();
        setCounts({
          team: data.team,
          vendors: data.vendors,
          employees: data.employees,
          jobs: data.jobs,
          jobSeekers: data.jobSeekers,
          notification: data.notification,
          addtoteam: data.addtoteam,
          assignRole: data.assignRole,
          assignTask: data.assignTask,
          wallet: data.wallet,
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  const cardData = [
    { icon: <FaUsers />, title: 'Team', count: counts.team, size: 2, path: '/admin/team' },
    { icon: <FaStore />, title: 'Vendors', count: counts.vendors, size: 2, path: '/admin/vendor' },
    { icon: <FaUserTie />, title: 'Employees', count: counts.employees, size: 2, path: '/admin/employees' },
    { icon: <FaBriefcase />, title: 'Jobs', count: counts.jobs, size: 2, path: '/admin/jobs' },
    { icon: <FaBell />, title: 'Notifications', count: counts.notification, size: 2, path: '/admin/notifications' },
    { icon: <FaUserGraduate />, title: 'JobSeekers', count: counts.jobSeekers, size: 2, path: '/admin/jobseekers' },
    { icon: <FaUserPlus />, title: 'Add to team', count: counts.addtoteam, size: 2, path: '/admin/addteam' },
    { icon: <FaWallet />, title: 'Wallet', count: counts.wallet, size: 6, path: '/admin/wallet' },
    { icon: <FaTasks />, title: 'Assign Role', count: counts.assignRole, size: 2, path: '/admin/assignrole' },
    { icon: <FaTasks />, title: 'Assign Task', count: counts.assignTask, size: 2, path: '/admin/assigntask' },
  ];

  return (
    <Container fluid className="p-4" style={{ fontSize: '1rem', color: '#1C2957' }}>
      <Row className="mb-4">
        <Col>
          <p className="d-flex align-items-center">
            <FaTachometerAlt className="mx-1" /> / Dashboard
          </p>
        </Col>
      </Row>
      <Row>
        {cardData.map((card, index) => (
          <Col
            key={index}
            md={card.size}
            className="mb-4 border border-5 rounded-5 m-2"
            style={{ backgroundColor: '#F8F9FA', cursor: 'pointer' }}
            onClick={() => navigate(card.path)}
          >
            <Card.Body className="">
              <div className="d-flex align-items-center justify-content-center mb-2" style={{ fontSize: '3rem', color: '#1C2957' }}>
                {card.icon}
              </div>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text style={{ fontSize: '1.5rem' }}>{card.count}</Card.Text>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
