//authenticaiton
import Login from "../pages/Authentication/Login";

//dashboard
import Dashboard from "../pages/Dashboard/Dashboard";

const AuthProtectedRoutes = [
    {path:'/', component: <Dashboard/>}
]
const publicRoutes = [
    {path: "/login", component: <Login/>},
]

export {publicRoutes, AuthProtectedRoutes};