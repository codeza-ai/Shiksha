// import TestNav from "../components/TestNav";
// import Question from "../components/Question";
import { useParams } from "react-router-dom";
const QuestionPage = () =>{
    const { sectionName, qNumber } = useParams();

    return (
        <div>
            <h1>Section: {sectionName}</h1>
            <h2>Question Number: {qNumber}</h2>
            {/* Fetch and display the relevant question here */}
        </div>
    );
}

export default QuestionPage;