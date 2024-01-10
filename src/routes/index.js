//authenticaiton
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";

//dashboard
import Dashboard from "../pages/Dashboard/Dashboard";

const AuthProtectedRoutes = [
    {path:'/', component: <Dashboard/>},
]
const publicRoutes = [
    {path: "/signup", component: <SignUp/>},
    {path: "/login", component: <Login/>},
]

export {publicRoutes, AuthProtectedRoutes};