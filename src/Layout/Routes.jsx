import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Login/Register/RegisterPage";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/Alltoys/AllToys";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Error from "../Pages/Error/Error";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add-toy",
        element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
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
          fetch("https://craft-ease-main-server.vercel.app/allToys")
      },
      {
        path: "my-toys",
        element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
      },
      {
        path: "update/:id",
        element: <PrivetRoute><UpdateToy></UpdateToy></PrivetRoute>,
        loader: ({ params }) =>
          fetch(
            `https://craft-ease-main-server.vercel.app/viewDetails/${params.id}`
          )
      },
      {
        path: "viewDetails/:id",
        element: (
          <PrivetRoute>
            <ViewDetails></ViewDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://craft-ease-main-server.vercel.app/viewDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
