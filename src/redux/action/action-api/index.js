import * as callApi from "../callAPI/index"
import * as action from "../action-redux/index"
import * as actionType from "../../actionType/index"
import 'react-notifications/lib/notifications.css';

// Quan li nguoi dung
export const actPostUserRegisterApi = (data) => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("POST", `listUser`, data)
            .then((rs) => {
            })
            .catch(() => {
                console.log("error");
            })
    }
}
export const actPostUserLoginApi = data => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("POST", `listUser`, data)
            .then(() => {

            })
            .catch(() => {

            })
    }
}
export const actGetUserApi = () => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("GET", `listUser`, null)
            .then((result) => {
                console.log(result.data);
                dispatch(action.actGetUser(result.data))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


// Quan li phim
export const actGetListFilmApi = () => {
    return dispatch => {
        callApi.callApiQuanLiPhim("GET", `LayDanhSachPhim?maNhom=GP01`, null)
            .then((rs) => {
                dispatch(action.actGetListShowFilm(rs.data));
            })
            .catch(() => {

            })
    }

}
export const actGetDetailFilm = (id) => {
    return dispatch => {
        callApi.callApiQuanLiPhim("GET", `LayThongTinPhim?MaPhim=${id}`, null)
            .then((rs) => {
                dispatch(action.actGetDetailFilm(rs.data))
            })
            .catch(() => {

            })
    }
}

// Quan li rap
export const actGetListCinemaApi = () => {
    return dispatch => {
        callApi.callApiQuanLiRap("GET", `LayThongTinHeThongRap`, null)
            .then((rs) => {
                dispatch(action.actGetListCinema(rs.data, actionType.actGetListCinema))
            })
            .catch(() => {

            })
    }
}

export const actGetListDetailCinemaApi = (maHeThongRap) => {
    return dispatch => {
        callApi.callApiQuanLiRap("GET", `LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`)
            .then((rs) => {
                dispatch(action.actGetListCinema(rs.data, actionType.actGetListDetailCinema))
            })
            .catch(() => {

            })
    }
}