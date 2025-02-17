import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Register = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        let URL ="https://cognitiveskills.onrender.com/api/v1/signup";
        // let URL = process.env.BASE_URL;
        let data = {
            "name": e.target["full-name"].value,
            "mobile": parseInt(e.target["mobile"].value),
            "age": parseInt(e.target["age"].value),
            "date_of_birth": e.target["dob"].value,
            "standard": parseInt(e.target["class"].value),
            "school": e.target["school"].value,
            "created_at": ""
        }
        console.log(data);
        try {
            const res = await axios.post(URL, data);
            if(res.status === 200){
                window.location.href = "/login";
            }else{
                alert("Something went wrong, couldn't register");
            }
            // const sessionId = response.data.sessionId;
            // const userId = response.data.userId;
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
            //Check session    
    },[]);
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="mb-8">
                <Link to="/"><img src="./logo-2.png" alt="Logo" className="h-24" /></Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-black text-center mb-6">Register for the test</h1>
                <p className="text-red-500 text-center mb-3">{`(All the fields are mandatory)`}</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="full-name" className="text-black font-medium">Full Name:</label>
                        <input type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                        <label htmlFor="mobile" className="text-black font-medium">Mobile number:</label>
                        <input type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                        <label htmlFor="age" className="text-black font-medium">Age:</label>
                        <input type="number" id="age" name="age" className="border border-black rounded-md p-2" />

                        <label htmlFor="dob" className="text-black font-medium">Birth date:</label>
                        <input type="date" id="dob" name="dob" className="border border-black rounded-md p-2" />

                        <label htmlFor="class" className="text-black font-medium">Class:</label>
                        <input type="number" id="class" name="class" className="border border-black rounded-md p-2" />

                        <label htmlFor="school" className="text-black font-medium">School:</label>
                        <select name="school" id="school" className="border border-black rounded-md p-2">
                            <option value="">select-school</option>
                            <option value="JNV Bharuch">JNV Bharuch</option>
                            <option value="KV">KV - IIM Kolkata</option>
                        </select>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
