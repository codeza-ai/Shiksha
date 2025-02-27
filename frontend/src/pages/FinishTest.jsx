import { useEffect } from "react";
import checkSession from "../util/session";
import logout from "../util/logout";

const FinishTest =()=>{

    async function deleteSession(){
        await logout();
    }
    async function redirect() {
        let session = await checkSession();
        console.log("Session on - " + session);
        if (!session) {
            window.location.href = "/login";
        }
    }
    useEffect(()=>{
        // Check session
        redirect();
    },[]);
    return (
        <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
            <div className="flex flex-col items-center w-1/2 h-1/2 text-2xl tex-gray-800 p-5">
                <img src="https://pngimg.com/uploads/thank_you/thank_you_PNG83.png" alt="Thank you" className="max-w-full max-h-full"/>
                <div className="w-full p-5 flex justify-center">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit"
                    onClick={deleteSession}>Finish</button>
                </div>
            </div>
        </div>
    )
};

export default FinishTest;