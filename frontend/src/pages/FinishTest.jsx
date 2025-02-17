import { useEffect } from "react";
import { Link } from "react-router-dom"

const FinishTest =()=>{

    function deleteSession(){
        //
    }
    useEffect(()=>{
        deleteSession();
    },[]);
    return (
        <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
            <div className="flex flex-col items-center w-1/2 h-1/2 text-2xl tex-gray-800 p-5">
                <img src="https://pngimg.com/uploads/thank_you/thank_you_PNG83.png" alt="Thank you" className="max-w-full max-h-full"/>
                <div className="w-full p-5 flex justify-center">
                    <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Finish</Link>
                </div>
            </div>
        </div>
    )
};

export default FinishTest;