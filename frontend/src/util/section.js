import axios from "axios";

const checkSection = async(sectionName)=>{
    const userId = document.cookie.userId;

    if(!userId){
        return false;
    }
    try {
        const res = await axios.post(URL, {
            userId,
            sectionName
        });
        if(res.isValid == "true"){
            return true;
        }
        return false;
    }catch(err){
        console.error("Can't validate section completion");
        console.log(err);
    }
};

export default {
    checkSection
}