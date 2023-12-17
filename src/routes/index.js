//authenticaiton
import Login from "../pages/Authentication/Login";
import SignIn from "../pages/Authentication/SignIn";

//dashboard
import Dashboard from "../pages/Dashboard/Dashboard";

const AuthProtectedRoutes = [
    {path:'/', component: <Dashboard/>}
]
const publicRoutes = [
    {path: "/signin", component: <SignIn/>},
    {path: "/login", component: <Login/>},
]

export {publicRoutes, AuthProtectedRoutes};