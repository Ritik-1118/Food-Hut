import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const ProtectedLayout = ( { children } ) => {
  const { islogin, isLoading } = useAuth();

  if ( isLoading ) {
    // Optionally, you can return a loader here
    return null;
  }

  if ( !islogin ) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedLayout; 