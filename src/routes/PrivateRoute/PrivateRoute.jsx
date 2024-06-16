/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner aria-label="Default status example" />;
      </div>
    );
  }
  if (user?.email) {
    return children;
  }

  return (
    <Navigate to={"/sign-in"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
