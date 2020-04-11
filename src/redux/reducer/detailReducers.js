import * as actionType from "../actionType/index"

const initalState = {
    listDetailFilm: {},
    isValidCinema: false,
    isValidAnimation: true,
    maHeThongRap: "",
    isValidCumRap: true,
    listCumRap: [],
    maCumRapDetail: "",
    listLichChieuPhim: "",
    dateFilm: "",           //xác định được ngày chiếu để show ra giờ chiếu
    isValidDate: true,    // date first sáng trc
}

const detailReducers = (state = initalState, action) => {
    switch (action.type) {
        case actionType.actGetDetailFilm:
            state.listDetailFilm = action.data
            return { ...state };
        case actionType.actEditIsvalidAnimation:
            state.isValidAnimation = action.data
            return { ...state }
        case "EDIT-ISVALID-CINEMA-DETAIL":
            state.isValidCinema = action.data
            return { ...state }
        case "EDIT-MHT":
            state.maHeThongRap = action.data
            return { ...state }
        case "EDIT-ISVALID-MACUMRAP-DETAIL":
            state.isValidCumRap = action.data;
            return { ...state }
        case "GET-MACUMRAP-DETAIL":
            state.maCumRapDetail = action.data
            return { ...state }
        case "GET-LICH-CHIEU-PHIM":
            state.listLichChieuPhim = action.data
            return { ...state }
        case "GET-DATE-FILM":
            state.dateFilm = action.data
            return { ...state }
        case "EDIT-ISVALID-DATE":
            state.isValidDate = action.data;
            return { ...state }
        default:
            return { ...state }
    }
}
export default detailReducers;