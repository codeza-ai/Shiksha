import { useParams } from "react-router-dom";
import Question from "../components/Question";
import TestNav from "../components/TestNav";
// import axios from "axios";

const QuestionPage = () =>{
    const { sectionName, qNumber } = useParams();
    if( parseInt(qNumber) < 1 || parseInt(qNumber) > 10 || sectionName > 'D' || sectionName < 'A' ){
        //navigate to path - /#
        window.location.href = '/notfound';
    };

    function submitSection(timeTaken){
        if( parseInt(qNumber) !== 10 ){
            return;
        }
        const storedAnswers = JSON.parse(localStorage.getItem("answers")) || [];
        if(!storedAnswers || storedAnswers.length !== 10){
            alert("Please answer all questions before submitting the section");
            return;
        }
        // try{
        //     const URL = process.env.BASE_URL;
        //     axios.post(URL + "/submit" , {
        //         section: sectionName,
        //         answers: storedAnswers,
        //         timeTaken
        //     });
        //     console.log(`Section ${sectionName} completed in ${timeTaken} seconds`);
        // }catch(err){
            //     console.log(err);
            // }
        console.log(`Section ${sectionName} completed in ${timeTaken} seconds`);
    }
    return (
        <div className="flex">
            <div className="w-1/4 h-screen bg-gray-200">
                <TestNav onSubmit={submitSection}/>
            </div>
            <div className="w-3/4 h-screen bg-gray-100 text-gray-900 p-10">
                <Question 
                    qnumber={parseInt(qNumber)}
                    question="What is the capital of India?"
                    options={["Delhi", "Mumbai", "Kolkata", "Chennai"]}
                />
            </div>
        </div>
    );
}

export default QuestionPage;