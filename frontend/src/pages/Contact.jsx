import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <div className="h-20 bg-white">
            </div>
            <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <form className="space-y-4">
                        <h1 className="text-2xl font-bold text-black text-center mb-3">Contact Us</h1>
                        <p className="text-red-500 text-center mb-3">{`(All the fields are mandatory)`}</p>
                        <hr />
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="full-name" className="text-black font-medium">Full Name:</label>
                            <input required type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                            <label htmlFor="mobile" className="text-black font-medium">Mobile number:</label>
                            <input required type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                            <label htmlFor="email" className="text-black font-medium">Email:</label>
                            <input required type="email" id="email" name="email" className="border border-black rounded-md p-2" />

                            <label htmlFor="dob" className="text-black font-medium">Your query:</label>
                            <textarea required type="date" id="dob" name="dob" className="border border-black rounded-md p-2" />
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="bg-blue-500 text-white py-2 w-28 rounded-lg hover:bg-blue-600 transition">Login</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default Contact;