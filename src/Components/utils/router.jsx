import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Components/MainLayout/MainLayout.jsx";
import Apps from "../../Components/Apps/Apps.jsx";
import Installation from "../../Components/Installation/Installation.jsx";
import Hero from "../../Components/Hero/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/Apps",
        element: <Apps></Apps>,
      },
      {
        path: "/Installation",
        element: <Installation></Installation>,
      },
    ],
  },
]);

export default router;
