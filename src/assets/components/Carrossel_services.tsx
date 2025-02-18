// import Swiper core and required modules
import { Autoplay, A11y, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BG_WPP from '../images/whatsapp-img.png';
import BG_criativo from '../images/criativos.png';
import BG_dashboard from '../images/dashboard.png';
import BG_lp from '../images/lps.png'
import BG_audiovisual from '../images/audiovisual-img.png'

const Carrossel_services = () => {
  return (
    <Swiper
      modules={[A11y, Autoplay, EffectFade, Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={1000}
      loop={true}
      pagination={{clickable: true}}
      navigation
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="w-full mx-auto -m-44 "
    >
      <SwiperSlide>
        {' '}
        <div className="p-4 grid gap-2">
          <img src={BG_WPP} className="w-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 grid gap-2">
          <img src={BG_criativo} className="w-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 grid gap-2">
          <img src={BG_dashboard} className="w-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 grid gap-2">
          <img src={BG_lp} className="w-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 grid gap-2">
          <img src={BG_audiovisual} className="w-full" />
        </div>
      </SwiperSlide>
    </Swiper>
    
  );
};

export default Carrossel_services;
