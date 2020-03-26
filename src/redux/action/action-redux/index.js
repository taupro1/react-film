import * as actionType from "../../actionType/index"

export const actPostUser = (data) => {
    return {
        type: actionType.actPostUserRegister,
        data
    }
}

