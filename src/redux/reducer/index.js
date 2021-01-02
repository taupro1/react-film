import { combineReducers } from "redux";
import homeReducers from "./homeReducers";
import cinemaReducers from "./cinemaReducers";
import detailReducers from "./detailReducers";
import seatBookingReducers from "./seatBookingReducers";
import usersReducers from "./admin/usersReducers";
import moviesReducers from "./admin/moviesReducers";
import cinemaAdminReducers from "./admin/cinemaReducers";
import loginReducers from "./admin/loginReducers";
import showtimeReducer from "./admin/showtimeReducer";

const rootReducers = combineReducers({
    homeReducers,
    cinemaReducers,
    detailReducers,
    seatBookingReducers,
    usersReducers,
    moviesReducers,
    cinemaAdminReducers,
    loginReducers,
    showtimeReducer
})

export default rootReducers