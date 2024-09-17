
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const EmployeeForm = () => {
//   const [step, setStep] = useState(1); // Controls the form flow
//   const [selectedOption, setSelectedOption] = useState(''); // Tracks the selected option
//   const navigate = useNavigate();

//   // Main options
//   const mainOptions = [
//     { label: '🔍 Hiring: Find the perfect candidates', value: 'hiring' },
//     { label: '📝 Job Posting: Post a new job listing', value: 'jobPosting' },
//     { label: '📊 Track Applications: View and manage applications', value: 'trackApplications' },
//     { label: '❓ Help & Support: Get assistance', value: 'helpSupport' }
//   ];

//   // Sub-options for Hiring
//   const hiringOptions = [
//     { label: '💼 Search Candidates', value: 'searchCandidates' },
//     { label: '📂 View Job Listings', value: 'viewJobListings' },
//     { label: '🤖 AI Recommendations', value: 'aiRecommendations' }
//   ];

//   // Sub-options for Job Posting
//   const jobPostingOptions = [
//     { label: '✍️ Create a Job Post', value: 'createJobPost' },
//     { label: '🛠 Optimize Your Job Listing', value: 'optimizeListing' },
//     { label: '📈 View Job Post Performance', value: 'postPerformance' }
//   ];

//   // Sub-options for Help & Support
//   const helpSupportOptions = [
//     { label: '💬 Chat with Support', value: 'chatSupport' },
//     { label: '📚 FAQs', value: 'faqs' },
//     { label: '📞 Contact Us', value: 'contactUs' }
//   ];

//   // Function to handle the main option click
//   const handleOptionClick = (optionValue) => {
//     setSelectedOption(optionValue);
//     setStep(2); // Move to the next step when an option is selected
//   };

//   // Function to go back to the previous step
//   const handleBack = () => {
//     setStep(1);
//     setSelectedOption('');
//   };

//   const handleClick = () => {
//     navigate('/');
//   };

//   return (
//     <div className="flex flex-col items-start justify-start bg-transparent p-4">
//       {step === 1 && (
//         <div className="max-w-lg text-center bg-trans p-6 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to NovaJobs.us!</h1>
//           <p className="text-lg mb-6 text-white">How can I assist you today?</p>
//           <div className="space-y-4">
//             {mainOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className="w-full p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition ease-in-out"
//                 onClick={() => handleOptionClick(option.value)}
//               >
//                 {option.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {step === 2 && selectedOption === 'hiring' && (
//         <div className="max-w-lg text-center bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//             Great! Let's help you find the right candidates.
//           </h2>
//           <p className="text-lg mb-6 text-gray-600">Would you like to:</p>
//           <div className="space-y-4">
//             {hiringOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className="w-full p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-400 transition ease-in-out"
//                 onClick={handleClick}
//               >
//                 {option.label}
//               </button>
//             ))}
//           </div>
//           <button
//             className="mt-6 text-blue-500 hover:underline"
//             onClick={handleBack}
//           >
//             Back
//           </button>
//         </div>
//       )}

//       {step === 2 && selectedOption === 'jobPosting' && (
//         <div className="max-w-lg text-center bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to post a job?</h2>
//           <p className="text-lg mb-6 text-gray-600">Here’s what you can do:</p>
//           <div className="space-y-4">
//             {jobPostingOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className="w-full p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-400 transition ease-in-out"
//                 onClick={handleClick}
//               >
//                 {option.label}
//               </button>
//             ))}
//           </div>
//           <button
//             className="mt-6 text-blue-500 hover:underline"
//             onClick={handleBack}
//           >
//             Back
//           </button>
//         </div>
//       )}

//       {step === 2 && selectedOption === 'helpSupport' && (
//         <div className="max-w-lg text-center bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">Need help?</h2>
//           <p className="text-lg mb-6 text-gray-600">Here are some common topics:</p>
//           <div className="space-y-4">
//             {helpSupportOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className="w-full p-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-400 transition ease-in-out"
//                 onClick={handleClick}
//               >
//                 {option.label}
//               </button>
//             ))}
//           </div>
//           <button
//             className="mt-6 text-blue-500 hover:underline"
//             onClick={handleBack}
//           >
//             Back
//           </button>
//         </div>
//       )}

//       {/* You can add more options for Track Applications similarly */}
//     </div>
//   );
// };

// export default EmployeeForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background-color: transparent;
  padding: 1rem;
`;

const Card = styled.div`
  max-width: 32rem;
  text-align: center;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #2d3748;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3748;
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #718096;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

const BackButton = styled.button`
  margin-top: 1.5rem;
  color: #4299e1;
  &:hover {
    text-decoration: underline;
  }
`;

// EmployeeForm component
const EmployeeForm = () => {
  const [step, setStep] = useState(1); // Controls the form flow
  const [selectedOption, setSelectedOption] = useState(''); // Tracks the selected option
  const navigate = useNavigate();

  // Main options
  const mainOptions = [
    { label: '🔍 Hiring: Find the perfect candidates', value: 'hiring' },
    { label: '📝 Job Posting: Post a new job listing', value: 'jobPosting' },
    { label: '📊 Track Applications: View and manage applications', value: 'trackApplications' },
    { label: '❓ Help & Support: Get assistance', value: 'helpSupport' }
  ];

  // Sub-options for Hiring
  const hiringOptions = [
    { label: '💼 Search Candidates', value: 'searchCandidates' },
    { label: '📂 View Job Listings', value: 'viewJobListings' },
    { label: '🤖 AI Recommendations', value: 'aiRecommendations' }
  ];

  // Sub-options for Job Posting
  const jobPostingOptions = [
    { label: '✍️ Create a Job Post', value: 'createJobPost' },
    { label: '🛠 Optimize Your Job Listing', value: 'optimizeListing' },
    { label: '📈 View Job Post Performance', value: 'postPerformance' }
  ];

  // Sub-options for Help & Support
  const helpSupportOptions = [
    { label: '💬 Chat with Support', value: 'chatSupport' },
    { label: '📚 FAQs', value: 'faqs' },
    { label: '📞 Contact Us', value: 'contactUs' }
  ];

  // Function to handle the main option click
  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    setStep(2); // Move to the next step when an option is selected
  };

  // Function to go back to the previous step
  // const handleBack = () => {
  //   setStep(1);
  //   setSelectedOption('');
  // };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setSelectedOption('');
    } else {
      navigate('/');
    }
  };
  const handleBack2 = () => {
    navigate('/');
    window.location.reload(); // This will force a page reload
  };
  
  const handleClick = () => {
    navigate('/employee/login');
  };

  return (
    <FormWrapper>
      {step === 1 && (
        <Card>
          <Title>Welcome to NovaJobs.us!</Title>
          <Description>How can I assist you today?</Description>
          <ButtonGroup>
            {mainOptions.map((option, index) => (
              <OptionButton
                key={index}
                bgColor="#4299e1"
                hoverColor="#3182ce"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </OptionButton>
            ))}
          </ButtonGroup>
          <BackButton onClick={handleBack2}>Back</BackButton>

        </Card>
      )}

      {step === 2 && selectedOption === 'hiring' && (
        <Card>
          <Subtitle>Great! Let's help you find the right candidates.</Subtitle>
          <Description>Would you like to:</Description>
          <ButtonGroup>
            {hiringOptions.map((option, index) => (
              <OptionButton
                key={index}
                bgColor="#48bb78"
                hoverColor="#38a169"
                onClick={handleClick}
              >
                {option.label}
              </OptionButton>
            ))}
          </ButtonGroup>
          <BackButton onClick={handleBack}>Back</BackButton>
        </Card>
      )}

      {step === 2 && selectedOption === 'jobPosting' && (
        <Card>
          <Subtitle>Ready to post a job?</Subtitle>
          <Description>Here’s what you can do:</Description>
          <ButtonGroup>
            {jobPostingOptions.map((option, index) => (
              <OptionButton
                key={index}
                bgColor="#ecc94b"
                hoverColor="#d69e2e"
                onClick={handleClick}
              >
                {option.label}
              </OptionButton>
            ))}
          </ButtonGroup>
          <BackButton onClick={handleBack}>Back</BackButton>
        </Card>
      )}

      {step === 2 && selectedOption === 'helpSupport' && (
        <Card>
          <Subtitle>Need help?</Subtitle>
          <Description>Here are some common topics:</Description>
          <ButtonGroup>
            {helpSupportOptions.map((option, index) => (
              <OptionButton
                key={index}
                bgColor="#9f7aea"
                hoverColor="#805ad5"
                onClick={handleClick}
              >
                {option.label}
              </OptionButton>
            ))}
          </ButtonGroup>
          <BackButton onClick={handleBack}>Back</BackButton>
        </Card>
      )}

      {/* You can add more options for Track Applications similarly */}
    </FormWrapper>
  );
};

export default EmployeeForm;
