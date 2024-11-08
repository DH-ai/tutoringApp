import axios from "axios"

const BookSession = async (sessionID) => {
    data = {
        "sessionID": sessionID,
        "studentID": localStorage.getItem("user_id"),
    }
    try{
        const response = await axios.post(
            base+"/api/sessions/createSession/",
            data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            },
        );
        
    }
    catch(error){
        console.error("Error adding sessions:", error);
    }
}

export default BookSession;