import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import checkSession from "../util/session";
import getLocation from "../util/location";
import Logo from "../components/Logo";
import Submit from "../components/buttons/Submit";

const Register = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [State, setState] = useState("");
    const [Country, setCountry] = useState("");
    const [photo, setPhoto] = useState(null);
    const [stream, setStream] = useState(null);

    async function setLocation() {
        setIsLoading(true);
        try {
            const locationData = await getLocation();
            setState(locationData.state);
            setCountry(locationData.country);
        } catch (error) {
            alert('Error getting location. Please check if location permissions are enabled.');
            console.error('Location error:', error);
        }finally{
            setIsLoading(false);
        }
    }

    const validate=(data)=>{
        if(isLoading) return false;
        if(!photo) {
            alert("Please take a photo before submitting");
            return false;
        }
        if((data["name"]).length < 3){
            alert("Name should be atleast 3 characters long");
            return false;
        }else if(data["mobile"].toString().length !== 10){
            alert("Mobile number should be 10 digits long");
            return false;
        }
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        let data = {
            "name": e.target["full-name"].value.trim(),
            "mobile": parseInt(e.target["mobile"].value),
            "age": parseInt(e.target["age"].value),
            "date_of_birth": e.target["dob"].value,
            "standard": parseInt(e.target["class"].value),
            "state": State + ", " + Country,
        };
        if (!validate(data)) {
            setIsSubmitting(false);
            return;
        }
        let URL = import.meta.env.VITE_REACT_API_URL + "/api/signup";
        console.log(data);
        try {
            const res = await axios.post(URL, data);
            alert(res.data.message);
            if(res.status === 200){
                window.location.href = "/login";
            }
        }catch(err){
            console.log(err);
        }finally{
            setIsSubmitting(false);
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
                        <label htmlFor="full-name">Full name:</label>
                        <input required type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                        <label htmlFor="mobile">Mobile number:</label>
                        <input required type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                        <label htmlFor="location" className="text-black font-medium">Location:</label>
                        <div className="flex justify-between items-center">
                            <input value={`${State} ${Country}`} id="location" className="border border-black rounded-md p-1 px-2" />
                            <button
                                onClick={() => setLocation()}
                                className="bg-blue-500 px-2 p-1 w-fit h-fit cursor-pointer flex gap-1 justify-center items-center rounded-md text-white mt-4"
                            >
                                {isLoading && (
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                )}    
                            Auto Locate</button>
                        </div>

                        <label htmlFor="age">Age:</label>
                        <input required type="number" id="age" name="age" className="border border-black rounded-md p-2" />

                        <label htmlFor="dob">Birth date:</label>
                        <input required type="date" id="dob" name="dob" className="border border-black rounded-md p-2" />

                        <label htmlFor="class">Class:</label>
                        <input required type="number" id="class" name="class" className="border border-black rounded-md p-2" />
                    </div>
                    <div id="photo" className="space-y-4">
                        <label className="block text-black font-medium">Photo:</label>
                        <div className="space-y-4">
                            {photo ? (
                                <div className="space-y-4">
                                    <img 
                                        src={photo} 
                                        alt="Preview" 
                                        className="w-48 h-48 object-cover rounded-lg mx-auto border-2 border-gray-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setPhoto(null);
                                            // Clean up previous stream if exists
                                            if (stream) {
                                                stream.getTracks().forEach(track => track.stop());
                                                setStream(null);
                                            }
                                        }}
                                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                                    >
                                        Retake Photo
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative w-48 h-48 mx-auto border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                                        <video 
                                            id="camera-preview"
                                            className="w-full h-full object-cover rounded-lg"
                                            autoPlay
                                            playsInline
                                        />
                                        {!navigator.mediaDevices && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
                                                Camera not available
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {!stream ? (
                                            <button
                                                type="button"
                                                onClick={async () => {
                                                    try {
                                                        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
                                                        const video = document.getElementById('camera-preview');
                                                        video.srcObject = mediaStream;
                                                        setStream(mediaStream);
                                                    } catch (error) {
                                                        alert('Error accessing camera. Please make sure camera permissions are enabled.');
                                                        console.error('Camera error:', error);
                                                    }
                                                }}
                                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                            >
                                                Start Camera
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const video = document.getElementById('camera-preview');
                                                    const canvas = document.createElement('canvas');
                                                    canvas.width = video.videoWidth;
                                                    canvas.height = video.videoHeight;
                                                    canvas.getContext('2d').drawImage(video, 0, 0);
                                                    const photoData = canvas.toDataURL('image/jpeg');
                                                    setPhoto(photoData);
                                                    
                                                    // Stop camera stream
                                                    stream.getTracks().forEach(track => track.stop());
                                                    setStream(null);
                                                }}
                                                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                                            >
                                                Capture Photo
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Submit text="Register" isLoading={isSubmitting}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
