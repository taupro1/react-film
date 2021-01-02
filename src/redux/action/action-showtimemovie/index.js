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
        console.log(error);
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