// import axios from "axios";

const checkSession = async()=>{
    const sessionId = document.cookie.sessionId;
    const userId = document.cookie.userId;

    if(!sessionId || !userId){
        return false;
    }
    // try{
    //     const URL = process.env.BASE_URL
    //     const response = await axios.post(URL + "/session", {
    //         userId, 
    //         sessionId
    //     });

    //     if(response.isValid == "true"){
    //         return true;
    //     }
    //     return false;
    // }catch(err){
    //     console.log(err);
    //     return false;
    // }
}

export default {
    checkSession
}