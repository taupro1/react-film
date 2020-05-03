import { combineReducers } from "redux";
import homeReducers from "./homeReducers";
import cinemaReducers from "./cinemaReducers";
import detailReducers from "./detailReducers";
import seatBookingReducers from "./seatBookingReducers"
import usersReducers from "./admin/usersReducers"
import moviesReducers from "./admin/moviesReducers"
import cinemaAdminReducers from "./admin/cinemaReducers"

const rootReducers = combineReducers({
    homeReducers,
    cinemaReducers,
    detailReducers,
    seatBookingReducers,
    usersReducers,
    moviesReducers,
    cinemaAdminReducers,
})

export default rootReducers