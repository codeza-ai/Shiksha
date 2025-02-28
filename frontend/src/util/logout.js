import axios from "axios";

const logout = async() =>{
    //Deletes the cookies data
    const sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
        console.log("Session id not found");
        return;
    }
    const URL = import.meta.env.VITE_REACT_API_URL + "/api/logout";
    console.log(sessionId);   
    try {
        const response = await axios.post(URL, null, {
            params: {
                session_id : sessionId
            }
        });
        alert(response.data.message);
        localStorage.removeItem("sessionId");
        localStorage.removeItem("userId");
        localStorage.removeItem("answers");
        localStorage.sessionId("sectionTimer", 0);
        localStorage.removeItem("currentSection");
        window.location.href = "/";
    } catch (err) {
        console.log(err);
        alert("An error occurred while logging out. Please try again.");
    }
}

export default logout;