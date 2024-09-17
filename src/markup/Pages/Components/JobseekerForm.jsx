
// import { useState } from 'react';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const JobseekerForm = () => {
//   const [step, setStep] = useState(0);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     hasSpecificJob: null,
//     jobTitle: '',
//     workMode: '',
//     location: '',
//     salaryExpectation: '',
//     salaryCurrency: 'USD',
//     salaryFrequency: 'yearly',
//   });
  
//   const [errors, setErrors] = useState({});
//   const [showSummary, setShowSummary] = useState(false);

//   const steps = [
//     {
//       question: 'Do you have a specific job title in mind?',
//       options: [
//         { label: 'Yes - help me find it', value: true },
//         { label: 'No - let\'s explore', value: false },
//       ],
//       field: 'hasSpecificJob',
//     },
//     { question: 'What job title are you looking for?', type: 'input', field: 'jobTitle' },
//     {
//       question: 'What work mode do you prefer?',
//       options: ['Remote', 'Hybrid', 'On-site'],
//       field: 'workMode',
//     },
//     { question: 'Where are you looking to work?', type: 'input', field: 'location' },
//     { 
//       question: 'What is your salary expectation?', 
//       type: 'salary', 
//       fields: ['salaryExpectation', 'salaryCurrency', 'salaryFrequency'], 
//     },
//   ];

//   const resetForm = () => {
//     setStep(0);
//     setFormData({
//       hasSpecificJob: null,
//       jobTitle: '',
//       workMode: '',
//       location: '',
//       salaryExpectation: '',
//       salaryCurrency: 'USD',
//       salaryFrequency: 'yearly',
//     });
//     setErrors({});
//     setShowSummary(false);
//     navigate('/');
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   const handleOptionSelect = (value, field) => {
//     setFormData({ ...formData, [field]: value });
//     setErrors({ ...errors, [field]: '' });
//   };

//   const validateStep = () => {
//     const currentStep = steps[step];
//     const fields = Array.isArray(currentStep.fields) ? currentStep.fields : [currentStep.field];
//     let isValid = true;

//     fields.forEach((field) => {
//       if (!formData[field]) {
//         setErrors((prev) => ({ ...prev, [field]: 'This field is required' }));
//         isValid = false;
//       }
//     });

//     return isValid;
//   };

//   const nextStep = () => {
//     if (validateStep()) {
//       if (step < steps.length - 1) {
//         setStep(step + 1);
//       } else {
//         setShowSummary(true);
//       }
//     }
//   };

//   const prevStep = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   const closeSummary = () => {
//     setShowSummary(false);
//     resetForm();
//   };

//   const renderStep = () => {
//     const currentStep = steps[step];
//     if (currentStep.options) {
//       return (
//         <div className="space-y-3">
//           {currentStep.options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleOptionSelect(option.value || option, currentStep.field)}
//               className={`w-full p-4 text-left border rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:outline-none ${
//                 formData[currentStep.field] === (option.value || option)
//                   ? 'bg-blue-100 border-blue-500'
//                   : 'bg-white border-gray-300'
//               }`}
//             >
//               {option.label || option}
//             </button>
//           ))}
//         </div>
//       );
//     } else if (currentStep.type === 'salary') {
//       return (
//         <div className="space-y-4">
//           <div className="flex space-x-4">
//             <input
//               type="number"
//               name="salaryExpectation"
//               value={formData.salaryExpectation}
//               onChange={handleInputChange}
//               className={`w-full p-3 border rounded-lg ${errors.salaryExpectation ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder="Enter amount"
//             />
//             <select
//               name="salaryCurrency"
//               value={formData.salaryCurrency}
//               onChange={handleInputChange}
//               className="p-3 border rounded-lg border-gray-300"
//             >
//               <option value="USD">USD</option>
//               <option value="EUR">EUR</option>
//               <option value="GBP">GBP</option>
//             </select>
//           </div>
//           <select
//             name="salaryFrequency"
//             value={formData.salaryFrequency}
//             onChange={handleInputChange}
//             className="w-full p-3 border rounded-lg border-gray-300"
//           >
//             <option value="yearly">per year</option>
//             <option value="monthly">per month</option>
//             <option value="weekly">per week</option>
//             <option value="hourly">per hour</option>
//           </select>
//         </div>
//       );
//     } else {
//       return (
//         <input
//           type="text"
//           name={currentStep.field}
//           value={formData[currentStep.field] || ''}
//           onChange={handleInputChange}
//           className={`w-full p-3 border rounded-lg ${errors[currentStep.field] ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="Enter your answer"
//         />
//       );
//     }
//   };

//   const ProgressBar = () => {
//     const progress = ((step + 1) / steps.length) * 100;
//     return (
//       <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
//         <div 
//           className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out" 
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-12 p-6 sm:p-8">
//       <div className="bg-transparent shadow-lg rounded-lg p-8">
//         {/* <h1 className="text-2xl font-semibold mb-8 text-center">Job Application Form</h1> */}
//         {/* <ProgressBar /> */}
//         <div className="mb-8">
//           <h2 className="text-xl font-medium mb-6">{steps[step].question}</h2>
//           {renderStep()}
//           {errors[steps[step].field] && (
//             <p className="text-red-500 text-sm mt-2">{errors[steps[step].field]}</p>
//           )}
//         </div>
//         <div className="flex justify-between">
//           <button
//             onClick={prevStep}
//             disabled={step === 0}
//             className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 flex items-center transition-all duration-200"
//           >
//             <ChevronLeft className="mr-2" size={20} />
//             Back
//           </button>
//           <button
//             onClick={nextStep}
//             className="px-5 py-2 bg-blue-500 text-white rounded-lg flex items-center transition-all duration-200"
//           >
//             {step < steps.length - 1 ? (
//               <>
//                 Next
//                 <ChevronRight className="ml-2" size={20} />
//               </>
//             ) : (
//               'Submit'
//             )}
//           </button>
//         </div>
//       </div>

//       {showSummary && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5">
//           <div className="bg-white rounded-lg p-8 w-full max-w-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold">Application Summary</h2>
//               <button onClick={closeSummary} className="text-gray-500 hover:text-gray-700">
//                 <X size={24} />
//               </button>
//             </div>
//             {Object.entries(formData)
//               .filter(([key]) => key !== "hasSpecificJob")
//               .map(([key, value]) => (
//                 <div key={key} className="mb-3">
//                   <strong className="font-medium">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value.toString()}
//                 </div>
//               ))}
//             <div className="mt-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
//               <p className="font-bold">Success</p>
//               <p>Your application has been submitted successfully!</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobseekerForm;

import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  background-color: white;
  max-width: 32rem;
  margin: 3rem auto 0;
  padding: 1.5rem;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const FormCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const QuestionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  // color:white;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 1rem;
  text-align: left;
  border: 1px solid ${props => props.selected ? '#3b82f6' : '#d1d5db'};
  border-radius: 0.5rem;
  background-color: ${props => props.selected ? '#e0f2fe' : 'white'};
  transition: all 0.2s ease-in-out;
  margin-bottom: 0.75rem;

  &:hover {
    background-color: #f3f4f6;
  }

  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.error ? '#ef4444' : '#d1d5db'};
  border-radius: 0.5rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  transition: all 0.2s;

  ${props => props.primary && `
    background-color: #3b82f6;
    color: white;
  `}

  ${props => props.secondary && `
    background-color: #e5e7eb;
    color: #374151;
  `}

  &:disabled {
    opacity: 0.5;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 32rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  background-color: #ecfdf5;
  border-left: 4px solid #10b981;
  color: #047857;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const JobseekerForm = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hasSpecificJob: null,
    jobTitle: '',
    workMode: '',
    location: '',
    salaryExpectation: '',
    salaryCurrency: 'USD',
    salaryFrequency: 'yearly',
  });
  
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const steps = [
    {
      question: 'Do you have a specific job title in mind?',
      options: [
        { label: 'Yes - help me find it', value: true },
        { label: 'No - let\'s explore', value: false },
      ],
      field: 'hasSpecificJob',
    },
    { question: 'What job title are you looking for?', type: 'input', field: 'jobTitle' },
    {
      question: 'What work mode do you prefer?',
      options: ['Remote', 'Hybrid', 'On-site'],
      field: 'workMode',
    },
    { question: 'Where are you looking to work?', type: 'input', field: 'location' },
    { 
      question: 'What is your salary expectation?', 
      type: 'salary', 
      fields: ['salaryExpectation', 'salaryCurrency', 'salaryFrequency'], 
    },
  ];

  const resetForm = () => {
    setStep(0);
    setFormData({
      hasSpecificJob: null,
      jobTitle: '',
      workMode: '',
      location: '',
      salaryExpectation: '',
      salaryCurrency: 'USD',
      salaryFrequency: 'yearly',
    });
    setErrors({});
    setShowSummary(false);
    navigate('/user/login');
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleOptionSelect = (value, field) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const validateStep = () => {
    const currentStep = steps[step];
    const fields = Array.isArray(currentStep.fields) ? currentStep.fields : [currentStep.field];
    let isValid = true;

    fields.forEach((field) => {
      if (!formData[field]) {
        setErrors((prev) => ({ ...prev, [field]: 'This field is required' }));
        isValid = false;
      }
    });

    return isValid;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        setShowSummary(true);
      }
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const closeSummary = () => {
    setShowSummary(false);
    resetForm();
  };

  const renderStep = () => {
    const currentStep = steps[step];
    if (currentStep.options) {
      return (
        <div>
          {currentStep.options.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() => handleOptionSelect(option.value || option, currentStep.field)}
              selected={formData[currentStep.field] === (option.value || option)}
            >
              {option.label || option}
            </OptionButton>
          ))}
        </div>
      );
    } else if (currentStep.type === 'salary') {
      return (
        <div>
          <InputGroup>
            <Input
              type="number"
              name="salaryExpectation"
              value={formData.salaryExpectation}
              onChange={handleInputChange}
              error={errors.salaryExpectation}
              placeholder="Enter amount"
            />
            <Select
              name="salaryCurrency"
              value={formData.salaryCurrency}
              onChange={handleInputChange}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </Select>
          </InputGroup>
          <Select
            name="salaryFrequency"
            value={formData.salaryFrequency}
            onChange={handleInputChange}
          >
            <option value="yearly">per year</option>
            <option value="monthly">per month</option>
            <option value="weekly">per week</option>
            <option value="hourly">per hour</option>
          </Select>
        </div>
      );
    } else {
      return (
        <Input
          type="text"
          name={currentStep.field}
          value={formData[currentStep.field] || ''}
          onChange={handleInputChange}
          error={errors[currentStep.field]}
          placeholder="Enter your answer"
        />
      );
    }
  };

  return (
    <FormContainer>
      <FormCard>
        <QuestionTitle>{steps[step].question}</QuestionTitle>
        {renderStep()}
        {errors[steps[step].field] && (
          <ErrorMessage>{errors[steps[step].field]}</ErrorMessage>
        )}
        <ButtonContainer>
          <Button secondary onClick={prevStep} disabled={step === 0}>
            <ChevronLeft size={20} />
            Back
          </Button>
          <Button primary onClick={nextStep}>
            {step < steps.length - 1 ? (
              <>
                Next
                <ChevronRight size={20} />
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </ButtonContainer>
      </FormCard>

      {showSummary && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Application Summary</ModalTitle>
              <button onClick={closeSummary}>
                <X size={24} />
              </button>
            </ModalHeader>
            {Object.entries(formData)
              .filter(([key]) => key !== "hasSpecificJob")
              .map(([key, value]) => (
                <div key={key}>
                  <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value.toString()}
                </div>
              ))}
            <SuccessMessage>
              <p><strong>Success</strong></p>
              <p>Your application has been submitted successfully!</p>
            </SuccessMessage>
          </ModalContent>
        </Modal>
      )}
    </FormContainer>
  );
};

export default JobseekerForm;