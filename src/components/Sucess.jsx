import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider"
import { useContext, useEffect } from "react"
export default function Sucess() {

    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext)
    useEffect(() => {
        const fetchSuccess = async (sessionId, user_id) => {
            try {
                await fetch(`https://syx-project.vercel.app/success?session_id=${sessionId}&user_id=${user_id}`);
                navigate("/")
            }
            catch (error) {
                console.error(error)
            }
        }


        const params = new URLSearchParams(location.search)
        const sessionId = params.get("session_id");

        if (sessionId && currentUser) {
            fetchSuccess(sessionId, currentUser.uid);
        }
    }, [currentUser, location, navigate]);


    return null;

}