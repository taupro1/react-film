import Axios from "axios"
import * as apiUrl from "./url"

export const callApiQuanLyNguoiDung = (method, uri, data) => {
    return Axios({
        method,
        url: `${apiUrl.apiQuanLyNguoiDung}/${uri}`,
        data
    })
}

// Api cybersoft
export const callApiQuanLiPhim = (method, uri, data) => {
    return Axios({
        method,
        url: `${apiUrl.apiQuanLiPhim}/${uri}`,
        data
    })
}

export const callApiQuanLiRap = (method, uri, data) => {
    return Axios({
        method,
        url: `${apiUrl.apiQuanLiRap}/${uri}`,
        data
    })
}

export const callApiQuanLiDatVe = (method, uri, data) => {
    return Axios({
        method,
        url: `${apiUrl.apiQuanLiDatVe}/${uri}`,
        data
    })
}
