// import Swiper core and required modules
import { Autoplay, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.css"

const Team = () => {
  return (
    <Swiper
      modules={[A11y, Autoplay, EffectFade]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      speed={3000}
      loop={true}
      navigation
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      className="w-full mx-auto py-12 md:py-32"
    >
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-20.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Pamo Fernandes</h3>
            <span className="font-light uppercase text-[12px]">
              SOCIAL MEDIA e FOTÓGRAFA
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-11.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Fabrício Costa</h3>
            <span className="font-light uppercase text-[12px]">
              DESIGNER
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-22.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Raissa Cristina</h3>
            <span className="font-light uppercase text-[12px]">
              ENDOMARKETING
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-5.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Ana Carolina</h3>
            <span className="font-light uppercase text-[12px]">
              DESIGNER
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-18.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Rafa Purgatto</h3>
            <span className="font-light uppercase text-[12px]">
              Coordenador de Design
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-23.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Tati Rodrigues</h3>
            <span className="font-light uppercase text-[12px]">
              Coordenadora de vendas
            </span>
          </div>
        </div>
      </SwiperSlide>  
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-14.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Helô Infanti</h3>
            <span className="font-light uppercase text-[12px]">
            Coordenadora de estratégia
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-6.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Jé Alves</h3>
            <span className="font-light uppercase text-[12px]">
            Gerente
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-10.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Ari Ohashi</h3>
            <span className="font-light uppercase text-[12px]">
              Atendimento Publicitário
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-12.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Luis Guilherme</h3>
            <span className="font-light uppercase text-[12px]">
              coordenador de media
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <div className="p-4 grid gap-2">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/editadas-site-17.jpg"
              className="w-full"
            />
            <h3 className="font-bold text-xl uppercase">Rafael Guilherme</h3>
            <span className="font-light uppercase text-[12px]">
              Desenvolvedor Web
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Team;
