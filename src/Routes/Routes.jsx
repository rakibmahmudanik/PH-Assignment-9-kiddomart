import { createBrowserRouter } from "react-router";
import Errorpage from "../Pages/ErrorPage";
import Root from "../Components/Root";
import HomePage from "../Pages/HomePage";
import Myprofile from "../Pages/Myprofile";
import AllToy from "../Components/layouts/MainLayouts/AllToy";
import ToyDetailsPage from "../Pages/ToyDetailsPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AuthLayout from "../Components/layouts/Auth/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import MyCart from "../Pages/MyCart";
import ForgotPassword from "../Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Myprofile />
          </PrivateRoute>
        ),
      },
      {
        path: "alltoys",
        element: <AllToy />,
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <ToyDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
