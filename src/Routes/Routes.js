import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Attendence from "../pages/Attendence/Attendence/Attendence";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/attendence",
    element: <Attendence></Attendence>,
  },
]);

export default router;