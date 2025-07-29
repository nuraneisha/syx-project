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
                const response = await fetch(`https://syx-backend-project.vercel.app/success?session_id=${sessionId}&user_id=${user_id}`);

                if (response.ok) {
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                }
                else {
                    console.error("Something went worng", response.status)

                }
            }
            catch (error) {
                console.error("Error in fetching the data", error)
            }
        }

        if (sessionId && currentUser) {
            fetchSuccess(sessionId, currentUser.uid);
        }
    }, [currentUser, location, navigate]);



    return (
        <>
            <Container className="d-flex justify-content-center align-items-center bg-light">
                <Card>
                    <Card.Body>
                        <Card.Title>🎉 Thank you for your purchase!! 🎉 </Card.Title>
                        <Card.Text className="text-muted">Your purchase was successful.</Card.Text>
                        <Card.Text className="text-muted">You can view your purchase in your profile. We hope you like the products!</Card.Text>
                        <Card.Text className="text-muted">We’d love to hear your thoughts — feel free to share feedback about your experience!</Card.Text>
                    </Card.Body>
                </Card>

            </Container>
        </>

    );

}