import { combineReducers } from "redux";
import homeReducers from "./homeReducers";
import cinemaReducers from "./cinemaReducers";
import detailReducers from "./detailReducers";
import seatBookingReducers from "./seatBookingReducers"
import usersReducers from "./admin/usersReducers"

const rootReducers = combineReducers({
    homeReducers,
    cinemaReducers,
    detailReducers,
    seatBookingReducers,
    usersReducers
})

export default rootReducers