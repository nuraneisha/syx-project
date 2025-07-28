import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider"
import { useContext, useEffect } from "react"
export default function Sucess() {

    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search)
    const sessionId = params.get("session_id");
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        console.log("hi");
        const fetchSuccess = async (sessionId, user_id) => {
            try {
                console.log("hi2", user_id);
                console.log("session", sessionId);
                const response = await fetch(`https://syx-project.vercel.app/success?session_id=${sessionId}&user_id=${user_id}`);
                if (response.ok) {
                    setTimeout(() => {
                        navigate("/");
                    }, 30000);
                }
                else {
                    console.error("Something went worng", response.status)

                }

                console.log("hi3");
            }
            catch (error) {
                console.error("Error in fetching the data", error)
            }
        }



        console.log("hi4");

        if (sessionId && currentUser) {
            console.log("hi5");
            fetchSuccess(sessionId, currentUser.uid);
        }
    }, [currentUser, location, navigate]);



    return (
        <div className="container">
            <h1>Thank you for your purchase!</h1>
            <p>Session ID: {sessionId}</p>
        </div>
    );

}