import * as actionType from "../../actionType/index"

export const actGetUser = (data) => {
    return {
        type: actionType.actPostUserRegister,
        data
    }
}

// Quan ly phim

export const actGetListShowFilm = data => {
    return {
        type: actionType.actGetListShowFilm,
        data
    }
}

export const actGetDetailFilm = data => {
    return {
        type: actionType.actGetDetailFilm,
        data
    }
}

export const actEditIsvalid = data => {
    return {
        type: actionType.actEditIsvalid,
        data
    }
}

export const actGetListCumRapDetail = data => {
    return {
        type: actionType.actGetListCumRapDetail,
        data
    }
}

// Quan li rap
export const actGetListCinema = (data, type) => {
    return {
        type,
        data
    }
}

