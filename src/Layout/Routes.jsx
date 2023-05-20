import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Login/Register/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default router;
