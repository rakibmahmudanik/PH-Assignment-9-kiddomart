import { createBrowserRouter } from "react-router";
import Errorpage from "../Pages/ErrorPage";
import Root from "../Components/Root";
import HomePage from "../Pages/HomePage";
import Myprofile from "../Pages/Myprofile";
import Slider from "../Components/common/Slider/Slider";
import AllToy from "../Components/layouts/MainLayouts/AllToy";
import ToyDetailsPage from "../Pages/ToyDetailsPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import { Component } from "react";
import AuthLayout from "../Components/layouts/Auth/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "profile", Component: Myprofile },
      { path: "alltoys", Component: AllToy },
      { path: "details/:id", Component: ToyDetailsPage },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/login", Component: LoginPage },
      { path: "/auth/register", Component: RegisterPage },
    ],
  },
]);

export default router;
