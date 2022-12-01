import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SignUpName from "../pages/SignUp/SignUpName";
import SignUpNumber from "../pages/SignUp/SignUpNumber";
import SignUpPassword from "../pages/SignUp/SignUpPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;