import * as callApi from "../callAPI/index"
import * as action from "../action-redux/index"
import * as actionType from "../../actionType/index"


// Quan li nguoi dung
export const actPostUserRegisterApi = (data, history) => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("POST", `DangKy`, data)
            .then((rs) => {
                history.push("/");
            })
            .catch((er) => {
                alert(er.response.data);
            })
    }
}
export const actGetUserApi = () => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("GET", `DangNhap`, null)
            .then((result) => {
                dispatch(action.actGetUser(result.data, actionType.actPostUserRegister))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
export const actPostUserLoginApi = (data, history) => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("POST", `DangNhap`, data)
            .then((rs) => {
                if (rs.data.maLoaiNguoiDung === "QuanTri") {
                    localStorage.setItem("userAdmin", JSON.stringify(rs.data));
                    history.push("/admin/dashboard")
                }
                else {
                    alert("Bạn không có quyền truy cập")
                }
            })
            .catch((er) => {
                alert(er.response.data);
            })
    }
}
export const actGetListUser = () => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("GET", `LayDanhSachNguoiDung?MaNhom=GP01`, null)
            .then(rs => {
                dispatch(action.actGetUser("GET-LIST-USER-ADMIN", rs.data))
            })
            .catch(er => {
                alert(er.response.data)
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


// Quan li rap
export const actGetDetailFilm = (id) => {
    return dispatch => {
        callApi.callApiQuanLiRap("GET", `LayThongTinLichChieuPhim?MaPhim=${id}`, null)
            .then((rs) => {
                dispatch(action.actGetDetailFilm(rs.data))
                dispatch(action.actGetListCinema(false, actionType.actEditIsvalidAnimation))
            })
            .catch(() => {

            })
    }
}

export const actGetListDetailFilm = (id) => {
    return dispatch => {
        callApi.callApiQuanLiRap("GET", `LayThongTinLichChieuPhim?MaPhim=${id}`, null)
            .then((rs) => {
                dispatch(action.actGetListCinema(rs.data, "GET-LIST-DETAIL-HOME"))
            })
            .catch(() => {

            })
    }
}

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

export const actGetListCumRapDetail = (maHeThongRap) => {
    return dispatch => {
        callApi.callApiQuanLiRap("GET", `LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`, null)
            .then((rs) => {
                dispatch(action.actGetListCumRapDetail(rs.data))
            })
            .catch(() => {

            })
    }
}

// Quan li dat ve
export const actGetListDetailBooking = id => {
    return dispatch => {
        callApi.callApiQuanLiDatVe("GET", `LayDanhSachPhongVe?MaLichChieu=${id}`, null)
            .then((rs) => {
                dispatch(action.actGetListDetailBooking(rs.data, actionType.actGetListDetailBooking))
                dispatch(action.actGetListDetailBooking(false, "GET-SEAT-ISVALID"))
            })
            .catch(() => {

            })
    }
}