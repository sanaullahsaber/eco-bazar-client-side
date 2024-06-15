import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import CreateAccount from "../pages/CreateAccount/CreateAccount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "sign-in",
        element: <SignIn></SignIn>
      },
      {
        path: "sign-up",
        element: <CreateAccount></CreateAccount>
      }
    ],
  },
]);
