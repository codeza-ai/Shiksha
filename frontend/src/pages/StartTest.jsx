import { Link } from "react-router-dom";
import { useEffect } from "react";
const StartTest = ()=> {
    useEffect(()=>{
        localStorage.removeItem("currentSection");
        localStorage.removeItem("answers");
    },[]);

    return (
    <div className="w-full bg-gray-100 h-screen text-gray-900 flex flex-col justify-center items-center">
        <div className="mb-8">
            <img src="./logo.png" alt="Logo" className="h-28" />
        </div>
        <div id="instructions" className="bg-white p-4 rounded-lg shadow-lg text-center w-1/2 h-2/3">
            <div className="w-full p-3">
                <h2 className="text-4xl text-red-500">Instructions:</h2>
            </div>
            <div className="w-full p-4 ">
                <ol className="text-left text-xl p-3 list-disc list-inside">
                    <li>The test consists of 40 questions, divided into 4 sections, with 10 questions per section.</li>
                    <li>There is no individual time limit per question, but the session will expire automatically after 2 hours. Ensure you complete the test within this timeframe.</li>
                    <li>It is advised to spend a maximum of 3 minutes per question to complete all sections on time.</li>
                    <li>Do not switch tabs or exit the test window, as this may result in auto-submission.</li>
                    <li>Ensure a stable internet connection and a quiet environment to avoid disruptions.</li>
                </ol>
            </div>
            <div className="w-full flex justify-evenly items-center p-4">
                    <Link to={"/"} className="bg-black hover:bg-gray-700 text-xl text-white p-2 w-fit h-fit rounded-xl">Go Back</Link>
                    <Link to={"/test/section/A"} className="bg-blue-500 hover:bg-blue-700 text-xl text-white p-2 w-fit h-fit rounded-xl">Start Test</Link>
            </div>
        </div>
    </div>);
};
export default StartTest;