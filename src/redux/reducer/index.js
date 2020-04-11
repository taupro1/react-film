import { combineReducers } from "redux";
import homeReducers from "./homeReducers";
import cinemaReducers from "./cinemaReducers";
import detailReducers from "./detailReducers";
import seatBookingReducers from "./seatBookingReducers"

const rootReducers = combineReducers({
    homeReducers,
    cinemaReducers,
    detailReducers,
    seatBookingReducers,
})

export default rootReducers