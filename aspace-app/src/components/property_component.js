import React from 'react';
import { useNavigate } from 'react-router-dom';


const PropertyComponent = (props) => {
    let { currentUser, setCurrentUser } = props;
    const navigate = useNavigate();

    const handleTakeToLogin = () => {
        navigate("/login");
      };
    
    return (
        <div style={{ padding: "3rem" }}>
        {!currentUser && (
            <div>
            <p>You must login before seeing your properties.</p>
            <button
                onClick={handleTakeToLogin}
                className="btn btn-primary btn-lg"
            >
                Take me to login page
            </button>
            </div>
        )}
        {currentUser && currentUser.user.role === "host" && (
            <div>
            <h1>Welcome to host's properties page.</h1>
            </div>
        )}
        {currentUser && currentUser.user.role === "guest" && (
            <div>
            <h1>Welcome to guest's properties page.</h1>
            </div>
        )}
        </div>
    );
};

export default PropertyComponent;