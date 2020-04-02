import { combineReducers } from "redux";
import homeReducers from "./homeReducers";
import cinemaReducers from "./cinemaReducers";
import detailReducers from "./detailReducers";

const rootReducers = combineReducers({
    homeReducers,
    cinemaReducers,
    detailReducers
})

export default rootReducers