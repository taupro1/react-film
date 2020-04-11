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
    listHomeMovie: [
    ],
    listDetailCinema: [
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
    listUser: [
    ],
    statusLogin: false,
    listDetailFilm: {},
    isValid: false

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
        case "EDIT-ISVALID-LOGIN-TICKET":
            state.isValid = action.data
            return { ...state }
        default:
            return { ...state };
    }
}

export default homeReducers;