import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../../Components/Home/Home.jsx";
import Apps from "../../Components/Apps/Apps.jsx";
import Installation from "../../Components/Installation/Installation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
