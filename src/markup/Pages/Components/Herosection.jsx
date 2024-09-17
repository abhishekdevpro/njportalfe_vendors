import { useState } from 'react';
import styled from 'styled-components';
import user from './user.jpg';
import JobseekerForm from './JobseekerForm';
import PartnerForm from './Partnersform';
import EmployeeForm from './EmployeeForm';

// Styled components
const Container = styled.div`
  min-height: 100vh;
  background-color: white; /* dark blue #001f3f*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (min-width: 640px) {
    padding: 3rem;
  }
`;

const UserImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  border: 0.25rem solid #ff4136; /* red border */
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

const Heading1 = styled.h1`
  font-size: 2.25rem;
  @media (min-width: 640px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
  color: #001f3f;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
  color: #ff4136; /* red text */
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

const Prompt = styled.p`
  font-size: 1.125rem;
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
  color: #001f3f;
  font-weight:600;
  margin-bottom: 2rem;
  text-align: center;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #001f3f; /* dark blue */
  color: #ffffff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  cursor: pointer;
  transform: scale(1);
  
  &:hover {
    background-color: #0074d9; /* blue accent on hover */
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }

  ${(props) => props.selected && `
    background-color: #ff4136; /* selected red */
    border: 2px solid #ffffff;
    transform: scale(1.05);
  `}
`;

const FormContainer = styled.div`
  // width: 100%;
  // max-width: 28rem;
  // padding: 1rem;
  // background-color: #001f3f; /* dark blue */
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;

const CareerAdvisorPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    "Jobseeker",
    "Employer",
    "Partner",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Render the selected form
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

  return (
    <Container>
      <UserImageWrapper>
        <UserImageContainer>
          <UserImage src={user} alt="User" />
        </UserImageContainer>
      </UserImageWrapper>
      <Heading1>Hello, I’m Aria,</Heading1>
      <Heading2>Your Personal Career Advisor!</Heading2>

      {!selectedOption ? (
        <>
          <Prompt>Are You?</Prompt>
          <div style={{ width: '100%', maxWidth: '28rem', marginBottom: '1rem' }}>
            {options.map((option, index) => (
              <OptionLabel
                key={index}
                selected={selectedOption === option}
              >
                <input
                  type="radio"
                  name="careerOption"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  style={{ display: 'none' }} /* hidden */
                />
                {option}
              </OptionLabel>
            ))}
          </div>
        </>
      ) : (
        <FormContainer>
          {renderForm()}
        </FormContainer>
      )}
    </Container>
  );
};

export default CareerAdvisorPage;
