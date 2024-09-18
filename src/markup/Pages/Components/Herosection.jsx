// import { useState } from 'react';
// import styled from 'styled-components';
// import user from './user.jpg';
// import JobseekerForm from './JobseekerForm';
// import PartnerForm from './Partnersform';
// import EmployeeForm from './EmployeeForm';

// // Styled components
// const Container = styled.div`
//   min-height: 100vh;
//   background-color: white; /* dark blue #001f3f*/
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem;
//   @media (min-width: 640px) {
//     padding: 3rem;
//   }
// `;

// const UserImageWrapper = styled.div`
//   position: relative;
//   margin-bottom: 1.5rem;
// `;

// const UserImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const UserImageContainer = styled.div`
//   width: 8rem;
//   height: 8rem;
//   border-radius: 50%;
//   overflow: hidden;
//   border: 0.25rem solid #ff4136; /* red border */
//   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
// `;

// const Heading1 = styled.h1`
//   font-size: 2.25rem;
//   @media (min-width: 640px) {
//     font-size: 3rem;
//   }
//   @media (min-width: 768px) {
//     font-size: 3.75rem;
//   }
//   color: #001f3f;
//   font-weight: bold;
//   margin-bottom: 0.5rem;
//   text-align: center;
// `;

// const Heading2 = styled.h2`
//   font-size: 1.5rem;
//   @media (min-width: 640px) {
//     font-size: 1.875rem;
//   }
//   @media (min-width: 768px) {
//     font-size: 2.25rem;
//   }
//   color: #ff4136; /* red text */
//   font-weight: 600;
//   margin-bottom: 2rem;
//   text-align: center;
// `;

// const Prompt = styled.p`
//   font-size: 1.125rem;
//   @media (min-width: 640px) {
//     font-size: 1.25rem;
//   }
//   color: #001f3f;
//   font-weight:600;
//   margin-bottom: 2rem;
//   text-align: center;
// `;

// const OptionLabel = styled.label`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #001f3f; /* dark blue */
//   color: #ffffff;
//   border-radius: 0.5rem;
//   padding: 1rem;
//   box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
//   transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
//   cursor: pointer;
//   transform: scale(1);
  
//   &:hover {
//     background-color: #0074d9; /* blue accent on hover */
//     box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
//     transform: scale(1.05);
//   }

//   ${(props) => props.selected && `
//     background-color: #ff4136; /* selected red */
//     border: 2px solid #ffffff;
//     transform: scale(1.05);
//   `}
// `;

// const FormContainer = styled.div`
//   // width: 100%;
//   // max-width: 28rem;
//   // padding: 1rem;
//   // background-color: #001f3f; /* dark blue */
//   border-radius: 0.5rem;
//   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
// `;

// const CareerAdvisorPage = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const options = [
//     "Jobseeker",
//     "Employer",
//     "Partner",
//   ];

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   // Render the selected form
//   const renderForm = () => {
//     switch (selectedOption) {
//       case "Jobseeker":
//         return <JobseekerForm />;
//       case "Employer":
//         return <EmployeeForm />;
//       case "Partner":
//         return <PartnerForm />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Container>
//       <UserImageWrapper>
//         <UserImageContainer>
//           <UserImage src={user} alt="User" />
//         </UserImageContainer>
//       </UserImageWrapper>
//       <Heading1>Hello, I’m Aria,</Heading1>
//       <Heading2>Your Personal Career Advisor!</Heading2>

//       {!selectedOption ? (
//         <>
//           <Prompt>Are You?</Prompt>
//           <div style={{ width: '100%', maxWidth: '28rem', marginBottom: '1rem' }}>
//             {options.map((option, index) => (
//               <OptionLabel
//                 key={index}
//                 selected={selectedOption === option}
//               >
//                 <input
//                   type="radio"
//                   name="careerOption"
//                   value={option}
//                   checked={selectedOption === option}
//                   onChange={handleOptionChange}
//                   style={{ display: 'none' }} /* hidden */
//                 />
//                 {option}
//               </OptionLabel>
//             ))}
//           </div>
//         </>
//       ) : (
//         <FormContainer>
//           {renderForm()}
//         </FormContainer>
//       )}
//     </Container>
//   );
// };

// export default CareerAdvisorPage;
import { useState } from 'react';
import styled from 'styled-components';
import userImage from './user.jpg';
import JobseekerForm from './JobseekerForm';
import PartnerForm from './Partnersform';
import EmployeeForm from './EmployeeForm';
import bgimg from './bg-img.jpg';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// Styled components
const Container = styled.div`
  min-height: 100vh;
  background-image: url(${bgimg}); /* Add your background image here */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Dark overlay for readability */
    z-index: -1;
  }
`;

const Heading1 = styled.h1`
  font-size: 2.25rem;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  color: #ff4136; /* red text */
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

const Prompt = styled.p`
  font-size: 1.25rem;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #001f3f; /* dark blue */
  color: #ffffff;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem; /* Extra space for the icon */
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  font-size: 1.25rem;
  color: #0074d9;
  cursor: pointer;
`;


const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-radius: 0.5rem;
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

const CareerAdvisorPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const options = [
    "Jobseeker",
    "Employer",
    "Partner",
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsModalOpen(true); // Open the modal when an option is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Render the selected form in the modal
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

  const handleSearch =()=>{
    navigate('/user/job/1')
  }

  return (
    <Container>
      <Heading1>Hello, I’m Aria,</Heading1>
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

      {/* <SearchInput
        type="text"
        placeholder="Job Title, Sector ..."
      /> */}
       <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Job Title, Sector ..."
        />
        <SearchIcon onClick={handleSearch} /> {/* Search icon clickable */}
      </SearchContainer>

      {isModalOpen && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            {renderForm()}
            <button onClick={closeModal}>Close</button>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default CareerAdvisorPage;

