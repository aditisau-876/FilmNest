import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
    const navigate = useNavigate();

    const handleSuccess = async (credentialResponse) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/auth/google",
                {
                    credential: credentialResponse.credential,
                }
            );

            localStorage.setItem(
                "token",
                response.data.access_token
            );

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            alert("Google login failed.");
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => alert("Google Sign-In failed")}
            useOneTap={false}
        />
    );
};

export default GoogleButton;