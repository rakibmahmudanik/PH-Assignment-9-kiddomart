import { createBrowserRouter } from "react-router";
import Errorpage from "../Pages/ErrorPage";
import Root from "../Components/Root";
import HomePage from "../Pages/HomePage";
import Myprofile from "../Pages/Myprofile";
import Slider from "../Components/common/Slider/Slider";

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
    ],
  },
]);

export default router;
