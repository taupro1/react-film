import * as actionType from "../actionType/index"

const initalState = {
    listCinema: [
    ],
    listDetailCinema: [
    ],
    maCumRap: "",
}

const cinemaReducers = (state = initalState, action) => {
    switch (action.type) {
        case actionType.actGetListCinema:
            state.listCinema = action.data;
            return { ...state };
        case actionType.actGetListDetailCinema:
            state.listDetailCinema = action.data;
            return { ...state }
        case "GET-MA-CUM-RAP":
            state.maCumRap = action.data;
            return { ...state }
        default: return { ...state }
    }
}
export default cinemaReducers;