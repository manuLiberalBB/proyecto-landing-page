import { useAuth } from "../store/authStore";
import { Navigate } from "react-router";

export default function ProtectedRoute({ path = "/login", children }) {
  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  const isCheckingAuth = useAuth((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to={path} replace />;
  }

  return children;
}