import style from "./style.module.css";
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Clients() {
  return (
    <div className={style.clients} id="testimoni">
      <div className={style.clients_section}>
        <div>
          <h1>
            Customer Say’s <br />
            About <u>Logo</u>
          </h1>
          <p>
          "Discover What Our Clients Have to Say - Real Stories, Real Satisfaction."{" "}
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className={style.mySwiper}
          >
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>‘’</h1>
                <p>
                "Exceptional creativity and attention to detail – this architecture design company brought our vision to life with precision and style. They exceeded our expectations, and our new space is truly a work of art."{" "}
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <img src="/img/avatar-1.png" />
                </div>
                <p>VSLuis</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>‘’</h1>
                <p>
                "Our experience with Logo Architecture Design has been nothing short of exceptional. Their creative expertise and attention to detail transformed our vision into a breathtaking reality."{" "}
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <img src="/img/avatar-2.png" />
                </div>
                <p>Riya - Designer</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
