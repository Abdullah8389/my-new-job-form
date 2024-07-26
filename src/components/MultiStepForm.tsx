// src/components/MultiStepForm.tsx
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      {step === 1 && (
        <div>
          <Step1 />
          <button
            type="button"
            onClick={handleNextStep}
            className="bg-blue-500 text-white p-2 mt-4"
          >
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <Step2 />
          <button
            type="button"
            onClick={handlePreviousStep}
            className="bg-gray-500 text-white p-2 mt-4"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => console.log('Form Submitted')}
            className="bg-blue-500 text-white p-2 mt-4 ml-4"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
