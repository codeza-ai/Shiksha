import {Link} from "react-router-dom";
const Register = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="mb-8">
                <Link to="/"><img src="./logo-2.png" alt="Logo" className="h-24" /></Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-black text-center mb-6">Register for the test</h1>
                <p className="text-red-500 text-center mb-3">{`(All the fields are mandatory)`}</p>
                <form action="" className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="full-name" className="text-black font-medium">Full Name:</label>
                        <input type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                        <label htmlFor="email" className="text-black font-medium">Email:</label>
                        <input type="email" id="email" name="email" className="border border-black rounded-md p-2" />

                        <label htmlFor="mobile" className="text-black font-medium">Mobile number:</label>
                        <input type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                        <label htmlFor="age" className="text-black font-medium">Age:</label>
                        <input type="number" id="age" name="age" className="border border-black rounded-md p-2" />

                        <label htmlFor="class" className="text-black font-medium">Class:</label>
                        <input type="number" id="class" name="class" className="border border-black rounded-md p-2" />

                        <label htmlFor="school" className="text-black font-medium">School:</label>
                        <select name="school" id="school" className="border border-black rounded-md p-2">
                            <option value="#">Select-school</option>
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
