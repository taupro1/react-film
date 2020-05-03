let initState = {
    userEdit: null,
    listUser: [],
    isValidUser: true,
}
const usersReducers = (state = initState, action) => {
    switch (action.type) {
        case "GET-LIST-USER-ADMIN":
            state.listUser = action.data;
            return { ...state }
        case "GET-ISVALID-USER-ADMIN":
            state.isValidUser = action.data
            return { ...state }
        case "EDIT-USER-EDIT":
            state.userEdit = action.data
            return { ...state }
        default:
            return { ...state }
    }
}
export default usersReducers