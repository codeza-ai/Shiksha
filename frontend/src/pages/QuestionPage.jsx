import { useParams } from "react-router-dom";
import Question from "../components/Question";
import TestNav from "../components/TestNav";
import { useEffect, useState } from "react";
import axios from "axios";
import checkSession from "../util/session";
import logout from "../util/logout";
import questions from "../data/questions"; // Import to check valid question numbers

const QuestionPage = () => {
  const { sectionName, qNumber } = useParams();
  const [questionNumber, setQuestionNumber] = useState(null);

  useEffect(() => {
    async function check() {
      const curr = localStorage.getItem("currentSection");
      if (!curr || curr !== sectionName) {
        window.history.back();
      }

      // Check session and section
      const session = await checkSession();
      if (!session) {
        alert("Session expired. Please login again.");
        await logout();
      }
    }

    const parsedQNumber = parseInt(qNumber);
    const sectionOffset = (sectionName.charCodeAt(0) - 65) * 10; // A = 0, B = 10, etc.
    const computedQuestionNumber = sectionOffset + parsedQNumber;

    // Ensure the question number is within range
    if (
      parsedQNumber < 1 ||
      parsedQNumber > 10 ||
      sectionName > "D" ||
      computedQuestionNumber > questions.length
    ) {
      window.location.href = "/notfound";
      return;
    }

    setQuestionNumber(computedQuestionNumber);
    check();
  }, [qNumber, sectionName]);

  async function exitTest() {
    // Prompt is user actually wants to exit test
    if (window.confirm("Are you sure you want to exit the test?")) {
      await logout();
    }
  }

  const submitSection = async (timeTaken) => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || [];
    const answeredQuestions = new Set(storedAnswers.map((answer) => answer.qNumber));
    if (answeredQuestions.size !== 10) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const userId = localStorage.getItem("userId");
    const sessionId = localStorage.getItem("sessionId");

    if(confirm("Are you sure you want to submit the section?")){
      try {
        const URL = import.meta.env.VITE_REACT_API_URL + "/api/submit";
        const response = await axios.post(URL, {
          userId,
          sessionId,
          section: sectionName,
          answers: storedAnswers,
          timeTaken: parseInt(timeTaken),
        });
        console.log(response);
        if (response.status === 200) {
          // This will stop the timer, and avoid it from reseting
          localStorage.setItem("sectionSubmitted", "true");

          localStorage.removeItem("answers");
          localStorage.removeItem("sectionTimer");
          localStorage.removeItem("currentSection");
          
          alert("Section submitted successfully!"); 
          
          if (sectionName !== "D") {
            localStorage.setItem("currentSection", response.data.current_section);
            window.location.href = `/test/section/${response.data.current_section}`;
          } else {
            window.location.href = "/test/finish";
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <div className="h-20 w-full bg-white flex items-center justify-between px-10 border-gray-200 border-b">
        <div className="text-4xl font-bold h-12 flex justify-center items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-full" />
          <h1>shiksha</h1>
        </div>
        <button
          onClick={() => exitTest()}
          className='bg-red-500 hover:bg-red-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit'
        >
          Exit Test
        </button>
      </div>
      <div className="w-full h-full flex">
        <div className="w-1/3 min-w-xs h-full">
          <TestNav onSubmit={submitSection} />
        </div>
        <div className="w-2/3 h-full text-gray-900 p-4 overflow-y-scroll">
          {questionNumber !== null && <Question qnumber={questionNumber} />}
        </div> 
      </div>
    </div>
  );
};

export default QuestionPage;
