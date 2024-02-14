//authenticaiton
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";

//dashboard
import Dashboard from "../pages/Dashboard/Dashboard";
import Project from "../pages/Landing/project";

const AuthProtectedRoutes = [
    {path:'/', component: <Dashboard/>},
]
const publicRoutes = [
    {path:'/landing', component: <Project/>},
    {path: "/signup", component: <SignUp/>},
    {path: "/login", component: <Login/>},
]

export {publicRoutes, AuthProtectedRoutes};