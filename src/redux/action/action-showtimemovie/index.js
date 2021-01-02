import Axios from "axios";

export function getMovieListAdminShowtime() {
    return (dispatch) => {
      // call api
      Axios.get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      )
        .then((res) => {
          dispatch(getMovieListSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(getMovieListFailed(error));
        });
    };
}
function getMovieListSuccess(movieList) {
    return {
      type: "GET-LIST-MOVIE-SHOWTIME-ADMIN",
      payload: movieList,
    };
  }
  
  function getMovieListFailed(error) {
    return {
      type: "GET_MOVIE_lIST_FAILED",
      payload: error,
    };
  }
//lấy thông tin hệ thống rạp
export function getCinemaSystem() {
  return (dispatch) => {
    // call api
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
    )
      .then((res) => {
        dispatch({
          type: "GET-CINEMA-SYSTEM-ADMIN",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
//lấy thông tin cụm rạp theo hệ thống
export function getListTheaters(maHeThong) {
  return (dispatch) => {
    // call api
    Axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThong}`
    )
      .then((res) => {;
        dispatch({
          type: "GET-LIST-THEATER-ADMIN",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//lay du liệu thông tin chiếu phim 
export function getMovieShowTimes(maPhim) {
  return (dispatch) => {
    // call api
    Axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    )
      .then((res) => {
        dispatch(getMovieShowTimesSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getMovieShowTimesFailed(error));
      });
  };
}
function getMovieShowTimesSuccess(ShowTimes) {
  return {
    type: "GET-MOVIE-SHOWTIME-DETAIL-ADMIN",
    payload: ShowTimes,
  };
}
function getMovieShowTimesFailed(error) {
  return {
    type: "GET_MOVIE_lIST_FAILED",
    payload: error,
  };
}

//tạo lịch chiếu
export function postShowTime(maPhim, ngayChieuGioChieu,maRap,giaVe) {
  return async function (dispatch) {
    try {
      // getlocal
      const user = JSON.parse(localStorage.getItem("login"));
      // call api
      const res = await Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
        data: {
          maPhim,
          ngayChieuGioChieu,
          maRap,
          giaVe,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      if (res.status === 200 || res.status === 201) {
        alert("Thành công");
      //   history.push('/')
      }
    } catch (error) {}
  };
}