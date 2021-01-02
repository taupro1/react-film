// import HomePage from "../pages/home";
// import Detail from "../pages/Detail";
import { lazy } from "react"
import Register from "../component/home/register";
import SeatBooking from "../component/seat-select";
import Login from "../component/home/login";
import Dashboard from "../component/admin/dashboard/dashboard";
import UserAdmin from "../component/admin/users/user";
import CinemaAdmin from "../component/admin/cinema/cinema";
// import TicketAdmin from "../component/admin/ticket";
import AccountAdmin from "../component/admin/account"
import MoviesAdmin from "../component/admin/movies/film"
import showTimeMovie from '../component/admin/showTimeMovie'


const HomePage = lazy(() => import("../pages/home"));
const Detail = lazy(() => import("../pages/Detail"));
const AccountPage = lazy(() => import("../pages/account"));

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
    },
    {
        path: "/booking/:id",
        exact: false,
        component: SeatBooking
    },
    {
        path: "/login",
        exact: false,
        component: Login
    },
    {
        path: "/account",
        exact: false,
        component: AccountPage
    }
]

const routesAdmin = [
    {
        path: "/admin/dashboard",
        exact: false,
        component: Dashboard
    },
    {
        path: "/admin/user",
        exact: false,
        component: UserAdmin
    },
    {
        path: "/admin/movies",
        exact: false,
        component: MoviesAdmin
    },
    {
        path: "/admin/account",
        exact: false,
        component: AccountAdmin
    },
    {
        path: "/admin/cinema",
        exact: false,
        component: CinemaAdmin
    },
    {
        path: "/admin/ticket",
        exact: false,
        component: showTimeMovie
    }
]

export { routesHome, routesAdmin };