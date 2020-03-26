import React, { Component } from 'react'

export default class ListFilmItem extends Component {
    render() {
        return (
            <div className="list">
                <div className="film">
                    <img src="./img/home-movie/show-movie/HO00001895.jfif" alt />
                    <div className="date-film">
                        <ul>
                            <li>
                                <div className="type">
                                    <p className="classify">2D SUB</p>
                                    <p className="rating">C16</p>
                                </div>
                            </li>
                            <li className="time-name">
                                <div className="name-time">
                                    <div className="name-film">
                                        Nắng 3 : Lời hứa của cha
</div>
                                    <ul>
                                        <li>
                                            <a href>
                                                11:45
</a>
                                        </li>
                                        <li><a href>
                                            11:45
</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="film">
                    <img src="./img/home-movie/show-movie/HO00002018.jfif" alt />
                    <div className="date-film">
                        <ul>
                            <li>
                                <div className="type">
                                    <p className="classify">2D SUB</p>
                                    <p className="rating">P</p>
                                </div>
                            </li>
                            <li className="time-name">
                                <div className="name-time">
                                    <div className="name-film">
                                        Onward
</div>
                                    <ul>
                                        <li>
                                            <a href>
                                                11:45
</a>
                                        </li>
                                        <li><a href>
                                            11:45
</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
