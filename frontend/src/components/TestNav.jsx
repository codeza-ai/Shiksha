import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

// TestNav.propTypes = {
//   section: PropTypes.string.isRequired,
// };

const TestNav = () => {
  const { sectionName,qNumber } = useParams();
  const navigate = useNavigate();
  const totalQuestions = 10;

  const handleQuestionClick = (questionNum) => {
    navigate(`/test/section/${sectionName}/question/${questionNum}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto text-center h-full flex flex-col ">
      <h3 className="text-4xl font-bold text-black mt-10 mb-10">Section {sectionName}</h3>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {[...Array(totalQuestions)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(index + 1)}
            className={`border-2 py-2 rounded-md transition h-20 text-2xl ${
              index + 1 === parseInt(qNumber)
                ? 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
                : 'bg-white text-gray-800 border-gray-400 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestNav;
