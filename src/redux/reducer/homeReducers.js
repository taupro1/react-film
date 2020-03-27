import * as actionType from "../actionType/index"

const initalState = {
    listImgCarousel: [
        {
            index: 0,
            img: "./img/carousel/wild-15834618796245.jpg",
            href: "https://www.youtube.com/watch?v=gn5QmllRCn4"
        },
        {
            index: 1,
            img: "./img/carousel/bloodshot-sneak-2048x682-1583483072373-2.jpg",
            href: "https://www.youtube.com/watch?v=6-T5-Tohan0"
        },
        {
            index: 2,
            img: "./img/carousel/nang-3-15834617419228.jpg",
            href: "https://www.youtube.com/watch?v=DymKqNH_m8w"
        },
        {
            index: 3,
            img: "./img/carousel/wild-15822193320074.gif",
            href: "https://www.youtube.com/watch?v=UH_67fgOrj0"
        }
    ],
    // listHomeMovie: [
    //     {
    //         "maPhim": 1,
    //         "hinhAnh": "./img/home-movie/show-movie/HO00001895.jfif",
    //         tenPhim: "Nắng 3: Lời hứa của cha"
    //     },
    //     {
    //         "maPhim": 2,
    //         "hinhAnh": "./img/home-movie/show-movie/HO00001903.jfif",
    //         "tenPhim": "The invisible man"
    //     },
    //     {
    //         "maPhim": 3,
    //         "hinhAnh": "./img/home-movie/show-movie/HO00001973.jfif",
    //         "tenPhim": "The protector"
    //     },
    //     {
    //         "maPhim": 4,
    //         "hinhAnh": "./img/home-movie/show-movie/HO00002012.jfif",
    //         "tenPhim": "The call of the wild"
    //     },
    //     {
    //         "maPhim": 5,
    //         "hinhAnh": "./img/home-movie/show-movie/HO00002018.jfif",
    //         "tenPhim": "Onward"
    //     },
    //     {
    //         "maPhim": 6,
    //         "hinhAnh": "./img/home-movie/show-movie/HO00002044.jfif",
    //         "tenPhim": "Bloodshot"
    //     },
    //     {
    //         "maPhim": 7,
    //         "hinhAnh": "./img/home-movie/show-movie/HO00002053.jfif",
    //         "tenPhim": "I still believe"
    //     },
    //     {
    //         "maPhim": 8,
    //         "hinhAnh": "./img/home-movie/show-movie/HO00002055.png",
    //         "tenPhim": "Heartbeat"
    //     }
    // ],
    listHomeMovie: [

    ],
    listSoonMovie: [
        {
            img: "./img/home-movie/movie-soon/HO00001886.jfif",
            nameFilm: "Scoob"
        },
        {
            img: "./img/home-movie/movie-soon/HO00002017.jfif",
            nameFilm: "The invisible man"
        },
        {
            img: "./img/home-movie/show-movie/HO00001973.jfif",
            nameFilm: "The protector"
        },
        {
            img: "./img/home-movie/movie-soon/HO00002019.jfif",
            nameFilm: "The call of the wild"
        },
        {
            img: "./img/home-movie/show-movie/HO00002018.jfif",
            nameFilm: "Onward"
        },
        {
            img: "./img/home-movie/show-movie/HO00002044.jfif",
            nameFilm: "Bloodshot"
        },
        {
            img: "./img/home-movie/movie-soon/HO00002025.jfif",
            nameFilm: "I still believe"
        },
        {
            img: "./img/home-movie/movie-soon/HO00002024.jfif",
            nameFilm: "Heartbeat"
        }
    ],
    listCinema: [
        {
            name: "bhd",
            img: "./img/cinema/logo/bhd.png",
            nameCinema: "BHD STAR",
            heThongRap1: "Vincom Thảo Điền",
            heThongRap2: "Vincom Lê Văn Việt",
            heThongRap3: "Vincom Quang Trung",
            diaChi: "L5-Megamall, 159 XL Hà Nội , Q.2"
        },
        {
            name: "cgv",
            img: "./img/cinema/logo/cgv.png",
            nameCinema: "CGV",
            heThongRap1: "Vincom Thảo Điền",
            heThongRap2: "Vincom Lê Văn Việt",
            heThongRap3: "Vincom Quang Trung",
            diaChi: "L5-Megamall, 159 XL Hà Nội , Q.2"
        },
        {
            name: "ddc",
            img: "./img/cinema/logo/ddc-cinema.png",
            nameCinema: "DDC",
            heThongRap1: "Vincom Thảo Điền",
            heThongRap2: "Vincom Lê Văn Việt",
            heThongRap3: "Vincom Quang Trung",
            diaChi: "L5-Megamall, 159 XL Hà Nội , Q.2"
        },
        {
            name: "galaxy",
            img: "./img/cinema/logo/galaxy-cine.png",
            nameCinema: "GALAXY CINE",
            heThongRap1: "Vincom Thảo Điền",
            heThongRap2: "Vincom Lê Văn Việt",
            heThongRap3: "Vincom Quang Trung",
            diaChi: "L5-Megamall, 159 XL Hà Nội , Q.2"
        },
        {
            name: "mega",
            img: "./img/cinema/logo/mega.png",
            nameCinema: "MEGA",
            heThongRap1: "Vincom Thảo Điền",
            heThongRap2: "Vincom Lê Văn Việt",
            heThongRap3: "Vincom Quang Trung",
            diaChi: "L5-Megamall, 159 XL Hà Nội , Q.2"
        },
    ],
    listDetailCinema: [

    ],
    listUser: [
    ],
    listDetailFilm: {}
}

const homeReducers = (state = initalState, action) => {
    switch (action.type) {
        case actionType.actPostUserRegister:
            state.listUser = action.data;
            return { ...state };
        case actionType.actGetListShowFilm:
            state.listHomeMovie = action.data;
            return { ...state }
        case actionType.actGetDetailFilm:
            state.listDetailFilm = action.data
            return { ...state };
        default:
            return { ...state };
    }
}

export default homeReducers;