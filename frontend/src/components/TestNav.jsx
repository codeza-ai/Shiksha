import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

TestNav.propTypes = {
  section: PropTypes.string.isRequired,
};  

const TestNav = ({ section }) => {
  const navigate = useNavigate();
  const totalQuestions = 10;

  const handleQuestionClick = (questionNum) => {
    navigate(`/section/${section}/question/${questionNum}`);
  };

  return (
    <div className="test-nav">
      <h3>Section {section}</h3>
      <div className="question-grid">
        {[...Array(totalQuestions)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(index + 1)}
            className="question-button"
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="section-nav">
        {section > 1 && (
          <button
            onClick={() => navigate(`/section/${section - 1}/question/1`)}
            className="section-button"
          >
            Previous Section
          </button>
        )}
        {section < 4 && (
          <button
            onClick={() => navigate(`/section/${section + 1}/question/1`)}
            className="section-button"
          >
            Next Section
          </button>
        )}
      </div>
    </div>
  );
};

export default TestNav;
