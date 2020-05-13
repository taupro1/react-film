import * as actionType from "../actionType/index"

const initalState = {
    listImgCarousel: [
        {
            index: 0,
            img: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_3-1.jpg",
            href: "https://www.youtube.com/embed/gn5QmllRCn4"
        },
        {
            index: 1,
            img: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_8-1.jpg",
            href: "https://www.youtube.com/embed/6-T5-Tohan0"
        },
        {
            index: 2,
            img: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_4-1.jpg",
            href: "https://www.youtube.com/embed/DymKqNH_m8w"
        },
        {
            index: 3,
            img: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_5-1.jpg",
            href: "https://www.youtube.com/embed/UH_67fgOrj0"
        },
        {
            index: 4,
            img: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_6-1.jpg",
            href: "https://www.youtube.com/embed/UH_67fgOrj0"
        },
        {
            index: 5,
            img: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_2-1.jpg",
            href: "https://www.youtube.com/embed/"
        },
        // {
        //     index: 6,
        //     img: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_8-1.jpg",
        //     href: "https://www.youtube.com/embed/"
        // },
        // {
        //     index: 7,
        //     img: "http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_1-1.jpg",
        //     href: "https://www.youtube.com/embed/"
        // }
    ],
    listHomeMovie: [
    ],
    listDetailCinema: [
    ],
    listSoonMovie: [
        {
            hinhAnh: "./img/home-movie/movie-soon/HO00001886.jfif",
            tenPhim: "Scoob"
        },
        {
            hinhAnh: "./img/home-movie/movie-soon/HO00002017.jfif",
            tenPhim: "The invisible man"
        },
        {
            hinhAnh: "./img/home-movie/show-movie/HO00001973.jfif",
            tenPhim: "The protector"
        },
        {
            hinhAnh: "./img/home-movie/movie-soon/HO00002019.jfif",
            tenPhim: "The call of the wild"
        },
        {
            hinhAnh: "./img/home-movie/show-movie/HO00002018.jfif",
            tenPhim: "Onward"
        },
        {
            hinhAnh: "./img/home-movie/show-movie/HO00002044.jfif",
            tenPhim: "Bloodshot"
        },
        {
            hinhAnh: "./img/home-movie/movie-soon/HO00002025.jfif",
            tenPhim: "I still believe"
        },
        {
            hinhAnh: "./img/home-movie/movie-soon/HO00002024.jfif",
            tenPhim: "Heartbeat"
        }
    ],
    listUser: [
    ],
    statusLogin: false,
    listDetailFilm: {},
    trailer: "",
}

const homeReducers = (state = initalState, action) => {
    switch (action.type) {
        case actionType.actPostUserRegister:
            state.listUser = action.data;
            return { ...state };
        case actionType.actGetListShowFilm:
            state.listHomeMovie = action.data;
            return { ...state }
        case "EDIT-STATUS-LOGIN":
            state.statusLogin = action.data;
            return { ...state }
        case "GET-LIST-DETAIL-HOME":
            state.listDetailFilm = action.data;
            return { ...state }
        default:
            return { ...state };
    }
}

export default homeReducers;