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
        const fetchSuccess = async (sessionId, user_id) => {
            try {
                await fetch(`https://syx-project.vercel.app/success?session_id=${sessionId}&user_id=${user_id}`);
                setTimeout(() => {
                    navigate("/");
                }, 10000);
            }
            catch (error) {
                console.error(error)
            }
        }





        if (sessionId && currentUser) {
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