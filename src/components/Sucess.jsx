import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider"
import { useContext, useEffect } from "react"
import { Container, Card } from "react-bootstrap"
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
                    }, 5000);
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
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card className="p-3" style={{ maxWidth: "500px", width: "100%" }}>
                    <Card.Body>
                        <Card.Title className="text-center">🎉 Thank you for your purchase!! 🎉 </Card.Title>
                        <Card.Text className="text-muted text-center">Your purchase was successful.</Card.Text>
                        <Card.Text className="text-muted text-center">You can view your purchase in your profile. We hope you like the products!</Card.Text>
                        <Card.Text className="text-muted text-center">We’d love to hear your thoughts — feel free to share feedback about your experience!</Card.Text>
                    </Card.Body>
                </Card>

            </Container>
        </>

    );

}