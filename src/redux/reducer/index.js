import { combineReducers } from "redux";
import homeReducers from "./homeReducers";
import cinemaReducers from "./cinemaReducers";

const rootReducers = combineReducers({
    homeReducers,
    cinemaReducers
})

export default rootReducers