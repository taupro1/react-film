import React, { useEffect,useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import SnowStorm from 'react-snowstorm';
import { getCinemaSystem, getListTheaters, getMovieListAdminShowtime, getMovieShowTimes, postShowTime } from '../../redux/action/action-showtimemovie';

//style
import './style.scss';


function ShowTimeMovie(props) {
    const dispatch = useDispatch();
    const [maCumRap, setMaCumRap] = useState('');
    const [maPhim, setmaPhim] = useState('');
    const [maRap, setmaRap] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        dispatch(getMovieListAdminShowtime());
        dispatch(getCinemaSystem());
    }, [dispatch])

     const onClickDetaiMovie = (e) =>{
        setmaPhim(e.target.value)
        dispatch(getMovieShowTimes(e.target.value))
    }

    const onChangeCinemaSystem = (e) =>{
        dispatch(getListTheaters(e.target.value))
    }

    const onChangeTheater = (e) =>{
        setMaCumRap(e.target.value);
    }

    const onChangeMaRap = (e) =>{
        setmaRap(e.target.value);
    }
    const onChangeDateTimePicker = e =>{
        setDateTime(e.target.value)
    }
    const onChangePrice = e =>{
        setPrice(e.target.value)
    }

    const onClickShowTime = () =>{
        dispatch(postShowTime(maPhim,dateTime,maRap,price))
    }
    const renderHtml = () => {
        return(
            <div>
                <div>
                    <select onChange={e => onClickDetaiMovie(e)}>
                        <option value="" selected disabled hidden>Chọn Phim</option>
                        {props.movieList && props.movieList.map((item, index) => {
                        return(
                            <option key={index} value={item.maPhim} >{item.tenPhim}</option>
                        )
                        })
                        }
                    </select>
                </div>
                <div>
                <select onChange={e =>onChangeCinemaSystem(e)}>
                                <option value="" selected disabled hidden>Chọn Hệ Thống Rạp</option>
                                {props.cynemaSystem && props.cynemaSystem.map((item, index) => {
                                    return(
                                        <option key={index} value={item.maHeThongRap} >{item.tenHeThongRap}</option>
                                    )
                                })
                                }
                            </select>
                </div>
                <div>
                    <select onChange={e =>onChangeTheater(e)}>
                        <option value="" selected disabled hidden>Chọn Cụm Rạp</option>
                        {props.listTheater && props.listTheater.map((item, index) => {
                            return(
                                <option key={index} value={item.maCumRap} >{item.tenCumRap}</option>
                            )})}
                    </select>
                </div>
                <div>
                    <select onChange={e =>onChangeMaRap(e)}>
                        <option value="" selected disabled hidden>Chọn Rạp</option>
                        {
                           props.listTheater && props.listTheater.map((item, index) => {
                                if(item.maCumRap=== maCumRap){
                                    return item.danhSachRap.map((item,index)=>{
                                        return(
                                            <option key={index} value={item.maRap}>{item.tenRap}</option>
                                        )
                                    })
                                }
                            })
                        }
                    </select>
                </div>
                <div>
                    <input type='text' placeholder="nhap ngày giờ chiếu" onChange={e => onChangeDateTimePicker(e)}/>
                </div>
                <div>
                    <input type='text' placeholder="giá tiền" onChange={e => onChangePrice(e)}/>
                </div>
                <div>
                    <button onClick={()=>onClickShowTime()}>Tạo Lịch Chiếu</button>
                </div>
            </div>

        )
    }

    const renderDetail = () =>{
        return props.movieDetailShowTime && props.movieDetailShowTime.heThongRapChieu.map((item,idex)=>{
            return(<div>
                <a href='#'><img style={{ width: '50px' }} src={item.logo} alt='logo'/></a>
            </div>

            )
        })
    }

    return (
        <div className='showtime'>
            <SnowStorm />
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-4'>{renderHtml()}</div>
                <div className='col-6'>{renderDetail()}</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movieList: state.showtimeReducer.listMovies,
        movieDetailShowTime: state.showtimeReducer.detailShowTime,
        cynemaSystem: state.showtimeReducer.cinemaSystem,
        listTheater: state.showtimeReducer.listTheater
    }
}

export default connect(mapStateToProps)(ShowTimeMovie);
