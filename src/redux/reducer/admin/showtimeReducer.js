let initState = {
    listMovies: [],
    detailShowTime:null
}

const showtimeReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET-LIST-MOVIE-SHOWTIME-ADMIN":
            state.listMovies = action.payload;
            return { ...state }
        case 'GET-MOVIE-SHOWTIME-DETAIL-ADMIN':
            state.detailShowTime = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}
export default showtimeReducer