import * as callApi from "../callAPI/index"
import * as action from "../action-redux/index"
import * as actionType from "../../actionType/index"
import Axios from "axios"


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
                dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
            })
            .catch(er => {
                alert(er.response)
            })
    }
}
const admin = JSON.parse(localStorage.getItem("userAdmin"))
export const actEditUser = data => {
    return dispatch => {
        Axios({
            method: "PUT",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data,
            headers: {
                Authorization: `Bearer ${admin.accessToken}`
            }
        })
            .then(rs => {
                callApi.callApiQuanLyNguoiDung("GET", `LayDanhSachNguoiDung?MaNhom=GP01`, null)
                    .then(rs => {
                        dispatch(action.actGetUser("GET-LIST-USER-ADMIN", rs.data))
                        dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
                    })
                    .catch(er => {
                        alert(er.response)
                    })
            })
            .catch(er => {
                alert(er.response)
            })
    }
}
export const actAddUser = data => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            data,
            headers: {
                Authorization: `Bearer ${admin.accessToken}`
            }
        })
            .then(rs => {
                callApi.callApiQuanLyNguoiDung("GET", `LayDanhSachNguoiDung?MaNhom=GP01`, null)
                    .then(rs => {
                        dispatch(action.actGetUser("GET-LIST-USER-ADMIN", rs.data))
                        dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
                    })
                    .catch(er => {
                        alert(er.response.data)
                    })
            })
            .catch(er => {
                console.log(er.response.data);
            })
    }
}
export const actDeleteUser = data => {
    return dispatch => {
        Axios({
            method: "DELETE",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data}`,
            headers: {
                Authorization: `Bearer ${admin.accessToken}`
            }
        })
            .then(rs => {
                callApi.callApiQuanLyNguoiDung("GET", `LayDanhSachNguoiDung?MaNhom=GP01`, null)
                    .then(rs => {
                        dispatch(action.actGetUser("GET-LIST-USER-ADMIN", rs.data))
                        dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
                    })
                    .catch(er => {
                        alert(er.response.data)
                    })
            })
            .catch(er => {
                alert(er.response.data);
            })
    }
}


// Quan li phim
export const actGetListFilmApi = () => {
    return dispatch => {
        callApi.callApiQuanLiPhim("GET", `LayDanhSachPhim?maNhom=GP01`, null)
            .then((rs) => {
                dispatch(action.actGetListShowFilm(rs.data));
                dispatch(action.actGetListMovie("GET-LIST-MOVIE-ADMIN", rs.data))
                dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
            })
            .catch(() => {

            })
    }

}
export const actEditMovieAdmin = data => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
            data,
            headers: {
                Authorization: `Bearer ${admin.accessToken}`
            }
        })
            .then(rs => {
                callApi.callApiQuanLiPhim("GET", `LayDanhSachPhim?maNhom=GP01`, null)
                    .then((rs) => {
                        dispatch(action.actGetListMovie("GET-LIST-MOVIE-ADMIN", rs.data))
                        dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
                    })
                    .catch(() => {

                    })
            })
            .catch(er => {
                console.log(er.response.data);

            })
    }
}
export const actAddMovieAdmin = data => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
            data,
            headers: {
                Authorization: `Bearer ${admin.accessToken}`
            }
        })
            .then(rs => {
                console.log(rs.data);
                dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
            })
            .catch(er => {
                dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
            })
    }
}
export const actDeleteMoviesAdmin = data => {
    return dispatch => {
        Axios({
            method: "DELETE",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${data}`,
            headers: {
                Authorization: `Bearer ${admin.accessToken}`
            }
        })
            .then(rs => {
                callApi.callApiQuanLiPhim("GET", `LayDanhSachPhim?maNhom=GP01`, null)
                    .then((rs) => {
                        dispatch(action.actGetListMovie("GET-LIST-MOVIE-ADMIN", rs.data))
                        dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
                    })
                    .catch(() => {

                    })
            })
            .catch(er => {
                console.log(er.response.data);

            })
    }
}
export const actUploadHinh = data => {
    return dispatch => {
        console.log(data.name);
        // if (img.name) {
        //     let imgUpload = new FormData();
        //     imgUpload.append("File", data.hinhAnh, img.name)
        //     imgUpload.append("tenphim", data.tenPhim)
        //     imgUpload.append("manhom", "GP01")
        //     callApi.callApiQuanLiPhim("POST", `UploadHinhAnhPhim`, imgUpload)
        //         .then(rs => {
        //             console.log(rs.data);
        //             dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
        //         })
        //         .catch(er => {
        //             console.log(er.response.data);
        //             dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
        //         })
        // }

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

// Admin Cinema
export const actGetListCinemaAdmin = () => {
    return dispatch => {
        callApi.callApiQuanLiRap("GET", `LayThongTinHeThongRap`, null)
            .then((rs) => {
                dispatch(action.actGetListCinema(rs.data, "GET-LIST-CINEMA-ADMIN"))
                dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", false))
            })
            .catch(() => {

            })
    }
}
export const actGetListCumRapDetailAdmin = (maHeThongRap) => {
    return dispatch => {
        callApi.callApiQuanLiRap("GET", `LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`, null)
            .then((rs) => {
                dispatch(action.actGetListCinema(rs.data, "GET-LIST-CUMRAP-ADMIN"))

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