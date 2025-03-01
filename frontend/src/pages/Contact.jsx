import Header from "../components/Header";
import Footer from "../components/Footer";
import Submit from "../components/buttons/Submit";
import axios from "axios";
const Contact = () => {
    function validate(data){
        if(data.name.length < 3){
            alert("Name should be atleast 3 characters long");
            return false;
        }else if(data.mobile.length !== 10){
            alert("Invalid mobile number");
            return false;
        }
        return true;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const URL = import.meta.env.VITE_API_URL + "/feedback";
        const data = {
            name: e.target["full-name"].value.trim(),
            mobile: parseInt(e.target["mobile"].value),
            email: e.target["email"].value.trim(),
            query: e.target["query"].value.trim()
        };
        if (!validate(data))return;
        try {
            const res = await axios.post(URL, data);
            if (res.status === 200) {
                alert("Feedback submitted successfully");
                e.target.reset();
            }
        }catch(err)
        {
            alert("Failed to submit feedback");
            console.log(err);
        }
    }
    return (
        <>
            <Header />
            <div className="h-20 bg-white">
            </div>
            <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 md:text-lg text-md text-black font-medium">
                        <h1 className="text-2xl font-bold text-center mb-3">Contact Us</h1>
                        <h1 className="text-2xl font-bold text-center mb-3">Or Give Feedback</h1>
                        <p className="text-red-500 text-center mb-3">{`(All the fields are mandatory)`}</p>
                        <hr />
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="full-name">Full Name:</label>
                            <input required type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                            <label htmlFor="mobile">Mobile number:</label>
                            <input required type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                            <label htmlFor="email">Email:</label>
                            <input required type="email" id="email" name="email" className="border border-black rounded-md p-2" />

                            <label htmlFor="dob">Your query:</label>
                            <textarea required id="query" name="query" className="border border-black rounded-md p-2" />
                        </div>
                        <div className="flex justify-center mt-4">
                            <Submit text="Submit"/>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default Contact;