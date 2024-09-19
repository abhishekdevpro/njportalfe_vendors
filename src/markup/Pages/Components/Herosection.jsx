
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import JobseekerForm from './JobseekerForm';
import PartnerForm from './Partnersform';
import EmployeeForm from './EmployeeForm';
import bgimg from './bg-img.jpg';

const Container = styled.div`
  min-height: 100vh;
  background-image: url(${bgimg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Heading1 = styled.h1`
  font-size: 5rem;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 2rem;
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Prompt = styled.p`
  font-size: 2rem;
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OptionLabel = styled.button`
  background-color: ${props => props.selected ? '#ff6b6b' : '#4a4e69'};
  color: #ffffff;
  border: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.selected ? '#ff8787' : '#5c6283'};
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 0.5rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border-radius: 2rem;
  border: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 1.5rem;
  font-size: 1.25rem;
  color: #4a4e69;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff6b6b;
  }
`;

const Modal = styled.div`
  border:2px solid red;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 90%;
  width: 500px;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0.5rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #4a4e69;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff6b6b;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  color: #4a4e69;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CareerAdvisorPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const options = ["Jobseeker", "Employer", "Partner"];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderForm = () => {
    switch (selectedOption) {
      case "Jobseeker":
        return <JobseekerForm />;
      case "Employer":
        return <EmployeeForm />;
      case "Partner":
        return <PartnerForm />;
      default:
        return null;
    }
  };

  const handleSearch = () => {
    navigate('/user/job/1');
  };

  return (
    <Container>
      <Heading1>Hello, I'm Aria,</Heading1>
      <Heading2>Your Personal Career Advisor!</Heading2>

      <Prompt>Are You?</Prompt>
      <OptionWrapper>
        {options.map((option, index) => (
          <OptionLabel
            key={index}
            selected={selectedOption === option}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </OptionLabel>
        ))}
      </OptionWrapper>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Job Title, Sector ..."
        />
        <SearchIcon onClick={handleSearch} />
      </SearchContainer>

      {isModalOpen && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
            <ModalTitle>{selectedOption} Form</ModalTitle>
            {renderForm()}
          </Modal>
        </>
      )}
    </Container>
  );
};

export default CareerAdvisorPage;