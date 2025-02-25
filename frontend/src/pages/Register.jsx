import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import checkSession from "../util/session";

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
            "state": e.target["state"].value
        }
        console.log(data);
        try {
            const res = await axios.post(URL, data);
            alert(res.message);
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
                <Link to="/"><img src="./logo-2.png" alt="Logo" className="h-24" /></Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg min-w-sm">
                <h1 className="text-2xl font-bold text-black text-center mb-3">Register for the test</h1>
                <p className="text-red-500 text-center mb-3">{`(All the fields are mandatory)`}</p>
                <hr />
                <p className="text-center mb-6 mt-3">Already registered? <Link to="/login" className="text-blue-500">Login</Link></p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="full-name" className="text-black font-medium">Full Name:</label>
                        <input required type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                        <label htmlFor="mobile" className="text-black font-medium">Mobile number:</label>
                        <input required type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                        <label htmlFor="age" className="text-black font-medium">Age:</label>
                        <input required type="number" id="age" name="age" className="border border-black rounded-md p-2" />

                        <label htmlFor="dob" className="text-black font-medium">Birth date:</label>
                        <input required type="date" id="dob" name="dob" className="border border-black rounded-md p-2" />

                        <label htmlFor="class" className="text-black font-medium">Class:</label>
                        <input required type="number" id="class" name="class" className="border border-black rounded-md p-2" />

                        <label htmlFor="state" className="text-black font-medium">State:</label>
                        <select required name="state" id="state" className="border border-black rounded-md p-2">
                            <option value="">select-state</option>
                            <option value="Other">Other</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Andaman & Nicobar">Andaman & Nicobar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra & Nagar Haveli">Dadra & Nagar Haveli</option>
                            <option value="Daman & Diu">Daman and Diu</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
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
