import * as actionType from "../actionType/index"


const initalState = {
    listDetailBooking: {},
    seatSelect: [],
    isValid: true,
    tongTien: "",
}
const seatBookingReducers = (state = initalState, action) => {
    switch (action.type) {
        case actionType.actGetListDetailBooking:
            state.listDetailBooking = action.data
            return { ...state }
        case "GET-SEAT-SELECT":
            state.seatSelect = action.data
            return { ...state }
        case "GET-SEAT-ISVALID":
            state.isValid = action.data
            return { ...state }
        case "GET-TONG-TIEN":
            state.tongTien = action.data;
            return { ...state }
        default:
            return { ...state }
    }
}

export default seatBookingReducers