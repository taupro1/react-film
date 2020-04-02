import * as actionType from "../actionType/index"

const initalState = {
    listCinema: [
    ],
    listDetailCinema: [
    ],
    maCumRap: "",
    maCumRapFirst: "",
    isValid: true,
    isValidCinema: false,
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
        case "GET-MA-CUM-RAP-FIRST":
            state.maCumRapFirst = action.data
            return { ...state }
        case "EDIT-ISVALID":
            state.isValid = action.data
            return { ...state }
        case "EDIT-ISVALID-CINEMA":
            state.isValidCinema = action.data;
            return { ...state }
        case "EDIT-ISVALID-MACUMRAP":
            state.maCumRap = "";
            return { ...state }
        default: return { ...state }
    }
}
export default cinemaReducers;