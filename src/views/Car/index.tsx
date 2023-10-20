import carImage from '../../assets/images/car-large-scale.png';
import carSecondImage from '../../assets/images/car-second-large-scale.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export function Car() {
  return (
    <div className="grid grid-cols-[1200px_auto]">
      <div className="w-full">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img
              src={carImage}
              alt="Car"
              className="object-cover h-[80vh] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={carSecondImage}
              alt="Car"
              className="object-cover h-[80vh] w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="">
        <h1>Sobre o carro</h1>
      </div>
    </div>
  );
}
