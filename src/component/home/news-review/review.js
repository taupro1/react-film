import React, { PureComponent } from 'react'
import { Typography } from "@material-ui/core"
import AOS from "aos"
import "aos/dist/aos.css"

export default class Review extends PureComponent {
    render() {
        AOS.init()
        return (
            <div className="col-sm-12 col-12 col-lg-6 news review">
                <Typography variant="h4" className="tiltle">Đánh giá phim</Typography>
                <div data-aos="fade-left" data-aos-duration="600" className="news-film">
                    <img src="./img/news-review/review/bloooshot.jpg" alt="" />
                    <div className="news-item">
                        <div className="tiltle-film">
                            <a href>
                                [Review] Bloodshot: Vin Diesel Và Giấc Mơ Siêu Anh Hùng
              </a>
                        </div>
                        <p>
                            Dù hóa thân thành Groot trong Guardians Of The Galaxy là siêu anh hùng nhưng Vin
                            Diesel chỉ lồng tiếng chứ chẳng đóng một cảnh giải cứu thế giới nào cả.
              <span>...</span>
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="700" className="news-film">
                    <img src="./img/news-review/review/onward.jpg" alt />
                    <div className="news-item">
                        <div className="tiltle-film">
                            <a href>
                                [Review] Onward: Lộ Diện Ứng Viên Đầu Tiên Cho Oscar Hoạt Hình 2021?
              </a>
                        </div>
                        <p>
                            Pixar luôn là Pixar. Dù rất nhiều ý kiến cho rằng việc về dưới trướng Disney khiến
                            hãng phim hoạt hình dần mai một, đánh mất chính mình thì theo thời gian
              <span>...</span>
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="800" className="news-film">
                    <img src="./img/news-review/review/a quiet palce 2.jpg" alt />
                    <div className="news-item">
                        <div className="tiltle-film">
                            <a href>
                                [Review] Bloodshot: Vin Diesel Và Giấc Mơ Siêu Anh Hùng
              </a>
                        </div>
                        <p>
                            90 phút căng như dây đàn của A Quiet Place giúp nhà sản xuất kiếm cả núi tiền từ
                            kinh phí chỉ 17 triệu $
              <span>...</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
