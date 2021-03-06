import React, { PureComponent } from 'react'
import { Typography } from "@material-ui/core"
import AOS from "aos"
import "aos/dist/aos.css"

export default class News extends PureComponent {
    render() {
        AOS.init()
        return (
            <div className="col-sm-12 col-12 col-lg-6 news">
                <Typography variant="h4" className="tiltle">Tin tức</Typography>
                <div data-aos="fade-right" data-aos-duration="600" className="news-film">
                    <img src="./img/news-review/news/sau-mot-bo-phim-ho-tro-thanh-con-sen.jpg" alt="" />
                    <div className="news-item">
                        <div className="tiltle-film">
                            <a href>
                                Sau Một Bộ Phim, Họ Trở Thành “Con Sen” Của Các Boss!
              </a>
                        </div>
                        <p>
                            Các diễn viên bốn chân xuất hiện ngày càng nhiều trong phim ảnh. Cộng tác nhiều ngày
                            cùng những ngôi sao đáng yêu vượt mức thế này, chẳng trách các ngôi sao đẳng
              cấp<span>...</span>
                        </p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="700" className="news-film">
                    <img src="./img/news-review/news/450x300-nang_1583823710226.jpeg" alt />
                    <div className="news-item">
                        <div className="tiltle-film">
                            <a href>
                                Nắng 3: Lời Hứa Của Cha – Câu Chuyện Tình Cha Con Cảm Động Và Nhân Văn
              </a>
                        </div>
                        <p>
                            Nắng 3 thuộc series phim cùng tên từng rất thành công với diễn xuất của Thu Trang, Trấn
                            Thành,
              Kiều Minh Tuấn và bé Kim Thư.<span>...</span>
                        </p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="800" className="news-film">
                    <img src="./img/news-review/news/450x300-can-ho_1583741812707.jpg" alt />
                    <div className="news-item">
                        <div className="tiltle-film">
                            <a href>
                                Căn Hộ Của Quỷ: Tác Phẩm Kinh Dị Đầy Bất Ngờ Của Tây Ban Nha
              </a>
                        </div>
                        <p>
                            Dựa trên chuyện có thật, Căn Hộ Của Quỷ nói về sự kiện ma ám nổi tiếng tại căn nhà số 32
              đường Malasana ở thủ đô Madrid - Tây Ban Nha<span>...</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
