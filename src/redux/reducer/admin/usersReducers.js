let initState = {
    userEdit: null,
    listUser: []
}
const usersReducers = (state = initState, action) => {
    switch (action.type) {
        case "GET-LIST-USER-ADMIN":
            state.listUser = action.data;
            return { ...state }
        default:
            return { ...state }
    }
}
export default usersReducers