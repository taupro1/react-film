// import HomePage from "../pages/home";
// import Detail from "../pages/Detail";
import { lazy } from "react"
import Register from "../component/home/register";

const HomePage = lazy(() => import("../pages/home"));
const Detail = lazy(() => import("../pages/Detail"));

const routesHome = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/detail/:id",
        exact: false,
        component: Detail
    },
    {
        path: "/register",
        exact: false,
        component: Register
    }
]

export default routesHome;