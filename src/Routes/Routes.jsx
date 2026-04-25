import { createBrowserRouter } from "react-router";
import Errorpage from "../Pages/ErrorPage";
import Root from "../Components/Root";
import HomePage from "../Pages/HomePage";
import Myprofile from "../Pages/Myprofile";
import Slider from "../Components/common/Slider/Slider";
import AllToy from "../Components/layouts/MainLayouts/AllToy";

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
    ],
  },
]);

export default router;
