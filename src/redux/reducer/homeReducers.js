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
        {
            img: "./img/home-movie/show-movie/HO00001895.jfif",
            nameFilm: "Nắng 3: Lời hứa của cha"
        },
        {
            img: "./img/home-movie/show-movie/HO00001903.jfif",
            nameFilm: "The invisible man"
        },
        {
            img: "./img/home-movie/show-movie/HO00001973.jfif",
            nameFilm: "The protector"
        },
        {
            img: "./img/home-movie/show-movie/HO00002012.jfif",
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
            img: "./img/home-movie/show-movie/HO00002053.jfif",
            nameFilm: "I still believe"
        },
        {
            img: "./img/home-movie/show-movie/HO00002055.png",
            nameFilm: "Heartbeat"
        }
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
        },
        {
            name: "cgv",
            img: "./img/cinema/logo/cgv.png"
        },
        {
            name: "ddc",
            img: "./img/cinema/logo/ddc-cinema.png"
        },
        {
            name: "galaxy",
            img: "./img/cinema/logo/galaxy-cine.png"
        },
        {
            name: "mega",
            img: "./img/cinema/logo/mega.png"
        },
    ],
    listDetailCinema: [

    ],
    listUser: [
    ]
}

const homeReducers = (state = initalState, action) => {
    switch (action.type) {
        case actionType.actPostUserRegister:
            state.listUser = action.data;
            return { ...state };
        default:
            return { ...state };
    }
}

export default homeReducers;