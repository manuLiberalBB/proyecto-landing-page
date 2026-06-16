import { useAuth } from "../store/authStore";
import { Navigate } from "react-router";

export default function RouteVisitorOnly({ path, children }) {
    const isLoggedIn = useAuth((state) => state.isLoggedIn);
    if (isLoggedIn) {
        console.log("Estás autenticado, redirigiendo a", path);
        return <Navigate to={path} />;
    }
    return children;
}