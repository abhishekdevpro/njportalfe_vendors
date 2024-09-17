// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PartnerForm = () => {
//   const [step, setStep] = useState(1); // Controls the form flow
//   const [selectedOption, setSelectedOption] = useState(''); // Tracks the selected option
//   const navigate = useNavigate()
//   // Main options for Partners
//   const mainOptions = [
//     { label: '🤝 Candidate Sourcing: Find candidates for your clients', value: 'candidateSourcing' },
//     { label: '📝 Post Jobs for Clients: List job openings', value: 'postJobsForClients' },
//     { label: '📊 Track Client Applications: Manage applications for client positions', value: 'trackClientApplications' },
//     { label: '❓ Help & Support: Get assistance', value: 'helpSupport' }
//   ];

//   // Sub-options for Candidate Sourcing
//   const sourcingOptions = [
//     { label: '💼 Search Candidates', value: 'searchCandidates' },
//     { label: '📂 View Client Job Listings', value: 'viewClientJobListings' },
//     { label: '🤖 AI-Suggested Candidates', value: 'aiSuggestedCandidates' }
//   ];

//   // Sub-options for Job Posting for Clients
//   const postingOptions = [
//     { label: '✍️ Create a Job Post for a client', value: 'createJobPostForClient' },
//     { label: '🛠 Optimize Client Job Listings', value: 'optimizeClientListings' },
//     { label: '📈 View Job Post Performance', value: 'viewJobPostPerformance' }
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

//   const handleClick = () =>{
//     navigate('/')
//   }

//   return (
//     <div className=" flex flex-col items-start justify-start bg-transparent p-4">
//       {step === 1 && (
//         <div className="max-w-lg text-center">
//           <h1 className="text-3xl font-bold mb-6">Welcome to NovaJobs.us, partner!</h1>
//           <p className="text-lg mb-6">How can we assist your staffing needs today?</p>
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

//       {step === 2 && selectedOption === 'candidateSourcing' && (
//         <div className="max-w-lg text-center">
//           <h2 className="text-2xl font-semibold mb-4">
//             Let’s help you find the best talent for your clients.
//           </h2>
//           <p className="text-lg mb-6">Would you like to:</p>
//           <div className="space-y-4">
//             {sourcingOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className="w-full p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-400 transition ease-in-out"
//                 onClick={() => alert(`You selected ${option.label}`)}
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

//       {step === 2 && selectedOption === 'postJobsForClients' && (
//         <div className="max-w-lg text-center">
//           <h2 className="text-2xl font-semibold mb-4">
//             Ready to post jobs for your clients?
//           </h2>
//           <p className="text-lg mb-6">You can:</p>
//           <div className="space-y-4">
//             {postingOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className="w-full p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-400 transition ease-in-out"
//                 onClick={() => alert(`You selected ${option.label}`)}
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
//         <div className="max-w-lg text-center">
//           <h2 className="text-2xl font-semibold mb-4">
//             Need help managing client jobs?
//           </h2>
//           <p className="text-lg mb-6">We’re here for you:</p>
//           <div className="space-y-4">
//             {helpSupportOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className="w-full p-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-400 transition ease-in-out"
//                 onClick={() => alert(`You selected ${option.label}`)}
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

//       {/* You can add more options for Track Client Applications similarly */}
//     </div>
//   );
// };

// export default PartnerForm;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PartnerFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background-color: transparent;
  padding: 2rem;
`;

const StepContainer = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.bgColor || '#3498db'};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.hoverColor || '#2980b9'};
  }
`;

const BackButton = styled.button`
  margin-top: 1.5rem;
  color: #3498db;
  cursor: pointer;
  font-size: 1rem;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const PartnerForm = () => {
  const [step, setStep] = useState(1); // Controls the form flow
  const [selectedOption, setSelectedOption] = useState(''); // Tracks the selected option
  const navigate = useNavigate();

  // Main options for Partners
  const mainOptions = [
    { label: '🤝 Candidate Sourcing: Find candidates for your clients', value: 'candidateSourcing', bgColor: '#3498db', hoverColor: '#2980b9' },
    { label: '📝 Post Jobs for Clients: List job openings', value: 'postJobsForClients', bgColor: '#f39c12', hoverColor: '#e67e22' },
    { label: '📊 Track Client Applications: Manage applications for client positions', value: 'trackClientApplications', bgColor: '#2ecc71', hoverColor: '#27ae60' },
    { label: '❓ Help & Support: Get assistance', value: 'helpSupport', bgColor: '#9b59b6', hoverColor: '#8e44ad' }
  ];

  // Sub-options for each main option
  const optionsMap = {
    candidateSourcing: [
      { label: '💼 Search Candidates', value: 'searchCandidates', bgColor: '#3498db', hoverColor: '#2980b9', route: '/search-candidates' },
      { label: '📂 View Client Job Listings', value: 'viewClientJobListings', bgColor: '#3498db', hoverColor: '#2980b9', route: '/view-client-jobs' },
      { label: '🤖 AI-Suggested Candidates', value: 'aiSuggestedCandidates', bgColor: '#3498db', hoverColor: '#2980b9', route: '/ai-suggested-candidates' }
    ],
    postJobsForClients: [
      { label: '✍️ Create a Job Post for a client', value: 'createJobPostForClient', bgColor: '#f39c12', hoverColor: '#e67e22', route: '/create-job-post' },
      { label: '🛠 Optimize Client Job Listings', value: 'optimizeClientListings', bgColor: '#f39c12', hoverColor: '#e67e22', route: '/optimize-listings' },
      { label: '📈 View Job Post Performance', value: 'viewJobPostPerformance', bgColor: '#f39c12', hoverColor: '#e67e22', route: '/view-performance' }
    ],
    trackClientApplications: [
      { label: '📊 View Applications', value: 'viewApplications', bgColor: '#2ecc71', hoverColor: '#27ae60', route: '/view-applications' },
      { label: '🔍 Track Progress', value: 'trackProgress', bgColor: '#2ecc71', hoverColor: '#27ae60', route: '/track-progress' },
      { label: '📅 Schedule Interviews', value: 'scheduleInterviews', bgColor: '#2ecc71', hoverColor: '#27ae60', route: '/schedule-interviews' }
    ],
    helpSupport: [
      { label: '💬 Chat with Support', value: 'chatSupport', bgColor: '#9b59b6', hoverColor: '#8e44ad', route: '/chat-support' },
      { label: '📚 FAQs', value: 'faqs', bgColor: '#9b59b6', hoverColor: '#8e44ad', route: '/faqs' },
      { label: '📞 Contact Us', value: 'contactUs', bgColor: '#9b59b6', hoverColor: '#8e44ad', route: '/contact' }
    ]
  };

  // Function to handle the main option click
  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    setStep(2); // Move to the next step when an option is selected
  };

  // Function to go back to the previous step
  const handleBack = () => {
    setStep(1);
    setSelectedOption('');
  };

  // Function to handle option click and navigate to specific route
  const handleSubOptionClick = (route) => {
    navigate('/vendor/login');
  };
  
  const handleBack2 = () => {
    navigate('/');
    window.location.reload(); // This will force a page reload
  };
  

  return (
    <PartnerFormContainer>
      {step === 1 && (
        <StepContainer>
          <Title>Welcome to NovaJobs.us, partner!</Title>
          <Subtitle>How can we assist your staffing needs today?</Subtitle>
          <div>
            {mainOptions.map((option, index) => (
              <OptionButton
                key={index}
                bgColor={option.bgColor}
                hoverColor={option.hoverColor}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </OptionButton>
              
            ))}
             <BackButton onClick={handleBack2}>Back</BackButton>
          </div>
        </StepContainer>
      )}

      {step === 2 && (
        <StepContainer>
          <Title>Choose an option:</Title>
          <div>
            {optionsMap[selectedOption].map((option, index) => (
              <OptionButton
                key={index}
                bgColor={option.bgColor}
                hoverColor={option.hoverColor}
                onClick={() => handleSubOptionClick(option.route)}
              >
                {option.label}
              </OptionButton>
            ))}
          </div>
          <BackButton onClick={handleBack}>Back</BackButton>
        </StepContainer>
      )}
    </PartnerFormContainer>
  );
};

export default PartnerForm;
