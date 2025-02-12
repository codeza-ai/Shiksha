// import TestNav from "../components/TestNav";
// import Question from "../components/Question";
import { useParams } from "react-router-dom";
import TestNav from "../components/TestNav";
const QuestionPage = () =>{
    const { sectionName, qNumber } = useParams();

    return (
        <div>
            <div className="w-1/4 h-screen bg-gray-200">
                <TestNav/>
            </div>
            <div className="w-3/4 h-screen bg-gray-100 text-gray-900">
                <h1>{`Section: ${sectionName} - Question: ${qNumber}`}</h1>
                {/* <Question sectionName={sectionName} qNumber={qNumber}/> */}
            </div>
        </div>
    );
}

export default QuestionPage;