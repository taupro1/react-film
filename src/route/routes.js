import HomePage from "../pages/home";
import DetailMovie from "../component/detail-movie";

const routesHome = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/detail/:id",
        exact: false,
        component: DetailMovie
    }
]

export default routesHome;