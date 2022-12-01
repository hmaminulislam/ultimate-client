import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Attendence from "../pages/Attendence/Attendence/Attendence";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
    }, {
        path: '/attendence',
        element: <Attendence></Attendence>
    }
])

export default router;