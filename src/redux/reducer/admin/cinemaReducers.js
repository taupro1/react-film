let initState = {
    listCinema: [],
    listCumRap: [],
}
const cinemaAdminReducers = (state = initState, action) => {
    switch (action.type) {
        case "GET-LIST-CINEMA-ADMIN":
            state.listCinema = action.data;
            return { ...state }
        case "GET-LIST-CUMRAP-ADMIN":
            state.listCumRap = action.data;
            return { ...state }
        default:
            return { ...state }
    }
}
export default cinemaAdminReducers