import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import SnowStorm from 'react-snowstorm';
import { getMovieListAdminShowtime, getMovieShowTimes } from '../../redux/action/action-showtimemovie';

function ShowTimeMovie(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieListAdminShowtime())
    }, [dispatch])

     const onClickDetaiMovie = (maPhim) =>{
        dispatch(getMovieShowTimes(maPhim))
    }

    const renderHtml = () => {
        return props.movieList && props.movieList.map((item, index) => {
            return (
                <div className="film-item" key={index} onClick={()=>onClickDetaiMovie(item.maPhim)}>
                    <a href>
                        <img style={{ width: '50px' }} className="film-image" src={item.hinhAnh} alt="film" />
                    </a>
                        <p className="film-title">{item.tenPhim}</p>
                </div>
            )
        })
    }

    const renderDetail = () =>{
        console.log(props.movieDetailShowTime);
    }

    return (
        <div id="ticket-admin" className='bg-dark'>
            <SnowStorm />
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-3'>
                    {renderHtml()}
                </div>
                <div className='col-6'>
                    {renderDetail()}
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        movieList: state.showtimeReducer.listMovies,
        movieDetailShowTime: state.showtimeReducer.detailShowTime
    }
}

export default connect(mapStateToProps)(ShowTimeMovie);
