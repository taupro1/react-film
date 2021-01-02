let initState = {
    listMovies: [],
    detailShowTime:null,
    listTheater:null,
    cinemaSystem:null
}

const showtimeReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET-LIST-MOVIE-SHOWTIME-ADMIN":
            state.listMovies = action.payload;
            return { ...state }
        case 'GET-MOVIE-SHOWTIME-DETAIL-ADMIN':
            state.detailShowTime = action.payload;
            return { ...state }
        case 'GET-LIST-THEATER-ADMIN':
            state.listTheater = action.payload;
            return { ...state }
        case 'GET-CINEMA-SYSTEM-ADMIN':
            state.cinemaSystem = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}
export default showtimeReducer