import Axios from "axios"
import * as apiUrl from "./url"

export const callApiQuanLyNguoiDung = (method, uri, data) => {
    return Axios({
        method,
        url: `${apiUrl.apiQuanLyNguoiDung}/${uri}`,
        data
    })
}
