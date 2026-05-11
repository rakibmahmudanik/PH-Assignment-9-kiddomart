import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Spinner from "../Components/common/Loading/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, isloading } = useContext(AuthContext);

  const location = useLocation();

  if (isloading) return <Spinner></Spinner>;

  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
