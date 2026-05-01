import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Spinner from "../Components/common/Loading/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, isloading } = use(AuthContext);

  if (isloading) return <Spinner></Spinner>;

  if (user && user?.email) {
    return children;
  } else {
    return <Navigate to={"/auth/login"}></Navigate>;
  }
};

export default PrivateRoute;
