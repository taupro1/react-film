let initState = {
    listMovies: [],
    moviesEdit: null,
    hinhUpload: null,
}
const moviesReducers = (state = initState, action) => {
    switch (action.type) {
        case "GET-LIST-MOVIE-ADMIN":
            state.listMovies = action.data;
            return { ...state }
        case "EDIT-MOVIES-EDIT":
            state.moviesEdit = action.data
            return { ...state }
        case "EDIT-UPLOAD-HINH":
            state.hinhUpload = action.data;
            return { ...state }
        default:
            return { ...state }
    }
}
export default moviesReducers