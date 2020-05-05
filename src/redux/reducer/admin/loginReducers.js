let initalState = {
    isLogin: false
}

const loginReducers = (state = initalState, action) => {
    switch (action.type) {
        case "GET-ISVALID-LOGIN-ADMIN":
            state.isLogin = action.data;
            return { ...state }
        default: return { ...state }
    }
}
export default loginReducers