import React, { Component } from 'react'

export default class ContentRight extends Component {
    render() {
        return (
            <div className="col-sm-4 content-right">
                <div className="item-footer">
                    <h5 className="tiltle-footer">Đối tác</h5>
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.bhdstar.vn/">
                                <img src="./img/cinema/logo/bhd.png" alt />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.cgv.vn/">
                                <img src="./img/cinema/logo/cgv.png" alt />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://ddcinema.vn/lich-chieu-film.html">
                                <img src="./img/cinema/logo/ddc-cinema.png" alt />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.galaxycine.vn/#">
                                <img src="./img/cinema/logo/galaxy-cine.png" alt />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.megagscinemas.vn/">
                                <img src="./img/cinema/logo/mega.png" alt />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
