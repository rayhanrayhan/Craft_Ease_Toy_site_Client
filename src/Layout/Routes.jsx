import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Login/Register/RegisterPage";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/Alltoys/AllToys";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

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
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://craft-ease-main-server.vercel.app/allToys"),
      },
      {
        path: "viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://craft-ease-main-server.vercel.app/viewDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
