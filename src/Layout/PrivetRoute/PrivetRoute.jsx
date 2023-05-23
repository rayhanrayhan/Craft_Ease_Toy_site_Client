import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivetRoute = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login" state={{ from: location }} repla></Navigate>
    </div>
  );
};

export default PrivetRoute;
