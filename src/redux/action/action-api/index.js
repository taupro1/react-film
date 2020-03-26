import * as callApi from "../callAPI/index"
import * as action from "../action-redux/index"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export const actPostUserApi = (data) => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("POST", `listUser`, data)
            .then(() => {
                // dispatch(action.actPostUser(data))
                console.log("succcse");
                alert("Đăng kí thành công")
            })
            .catch(() => {
                console.log("error");
                alert("Đăng kí thất bại, chờ trong giây lát rồi đăng ký lại")
            })
    }
}

export const actGetUserApi = () => {
    return dispatch => {
        callApi.callApiQuanLyNguoiDung("GET", `listUser`, null)
            .then((result) => {
                dispatch(action.actPostUser(result.data))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}