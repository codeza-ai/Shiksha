import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Timer from './Timer';
import PropTypes from 'prop-types';

const TestNav = ({ onSubmit, isLoading }) => {
  const { sectionName, qNumber } = useParams();
  const navigate = useNavigate();
  const totalQuestions = 10;
  const [timeTaken, setTimeTaken] = useState(0);

  const handleQuestionClick = (questionNum) => {
    navigate(`/test/section/${sectionName}/question/${questionNum}`);
  };

  return (
    <div className="bg-white p-4 mx-auto min-w-xs max-w-sm text-center w-full h-full flex flex-col">
      <h3 className="text-4xl font-bold text-black mt-10 mb-6">Section {sectionName}</h3>

      {/* Timer Display */}
      <div className="w-full flex justify-center items-center p-5">
        <Timer onTimeUpdate={setTimeTaken} />
      </div>

      {/* Question Navigation */}
      <div className="grid grid-cols-5 gap-3 mb-4 w-full">
        {[...Array(totalQuestions)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(index + 1)}
            className={`border-2 py-2 rounded-md transition h-20 text-2xl ${index + 1 === parseInt(qNumber)
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-800 border-gray-400 hover:bg-blue-500 hover:text-white'
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col items-center w-full text-xl">
        <div className="flex justify-between gap-2 w-full my-2">
          <button
            onClick={() => navigate(`/test/section/${sectionName}/question/${parseInt(qNumber) - 1}`)}
            className="flex justify-center gap-2 items-center bg-violet-500 hover:bg-violet-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-1/2"
            disabled={qNumber == 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Prev
          </button>
          
          <button
            onClick={() => navigate(`/test/section/${sectionName}/question/${parseInt(qNumber) + 1}`)}
            className="flex justify-center gap-2 items-center bg-green-500 hover:bg-green-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-1/2"
            disabled={qNumber == 10}
          >

            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => onSubmit(timeTaken)}
          className="flex justify-center gap-2 items-center bg-linear-to-br/hsl from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-full"
        >
          {isLoading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          Submit Section
        </button>
      </div>
    </div>
  );
};
TestNav.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default TestNav;
