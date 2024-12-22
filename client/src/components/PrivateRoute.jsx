import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const PrivateRoute = ({ children }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
