import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Hero from "../Hero/Hero";
import Apps from "../Apps/Apps";
import TreadingPage from "../TreadingPage/TreadingPage";

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
        element: <Apps></Apps>
      },
      {
        path: "/Installation",
        element: <TreadingPage></TreadingPage>
      }
    ],
  },
]);

export default router;