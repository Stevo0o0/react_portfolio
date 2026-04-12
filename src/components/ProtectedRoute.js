import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/api";

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;