import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
        return <Navigate to="/adminLogin" replace />;
    }

    return children;
};

export default ProtectedRoute;
