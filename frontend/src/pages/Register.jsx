import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import checkSession from "../util/session";
import Logo from "../components/Logo";
import Submit from "../components/buttons/Submit";

const Register = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        let URL = import.meta.env.VITE_REACT_API_URL + "/api/signup";
        let data = {
            "name": e.target["full-name"].value,
            "mobile": parseInt(e.target["mobile"].value),
            "age": parseInt(e.target["age"].value),
            "date_of_birth": e.target["dob"].value,
            "standard": parseInt(e.target["class"].value),
            "school": e.target["school"].value
        }
        console.log(data);
        try {
            const res = await axios.post(URL, data);
            alert(res.data.message);
            if(res.status === 200){
                window.location.href = "/login";
            }
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        async function redirect() {
            let session = await checkSession();
            console.log("Session on - " + session);
            if (session) {
                alert("You have already logged in. Start the test.");
                window.location.href = "/test";
            }
        }
        redirect();  
    },[]);
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="mb-8">
                <Logo/>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg min-w-sm">
                <h1 className="text-2xl font-bold text-black text-center mb-3">Register for the test</h1>
                <p className="text-red-500 text-center mb-3">{`(All the fields are mandatory)`}</p>
                <hr />
                <p className="text-center mb-6 mt-3">Already registered? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                <form className="space-y-4 md:text-lg text-md text-black font-medium" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="full-name">Full Name:</label>
                        <input required type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                        <label htmlFor="mobile">Mobile number:</label>
                        <input required type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                        <label htmlFor="age">Age:</label>
                        <input required type="number" id="age" name="age" className="border border-black rounded-md p-2" />

                        <label htmlFor="dob">Birth date:</label>
                        <input required type="date" id="dob" name="dob" className="border border-black rounded-md p-2" />

                        <label htmlFor="class">Class:</label>
                        <input required type="number" id="class" name="class" className="border border-black rounded-md p-2" />

                        <label htmlFor="school">School:</label>
                        <select required name="school" id="school" className="border border-black rounded-md p-2">
                            <option value="">select-school</option>
                            <option value="JNV Bharuch">JNV Bharuch</option>
                            <option value="KV">KV - IIM Kolkata</option>
                        </select>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Submit text="Register"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
