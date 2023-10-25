import carImage from '../../assets/images/car-large-scale.png';
import carSecondImage from '../../assets/images/car-second-large-scale.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { CarInfo } from '../../components/CarInfo';
import { CarRating } from '../../components/CarRating';
import { RenterInfo } from '../../components/RenterInfo';

import renter from '../../assets/images/renter.png';

export function Car() {
  return (
    <div className="grid grid-cols-[1200px_auto] overflow-y-hidden">
      <div className="w-full h-full">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper max-h-[740px] h-full"
        >
          <SwiperSlide>
            <img
              src={carImage}
              alt="Car"
              className="object-cover h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={carSecondImage}
              alt="Car"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-full max-h-[1920px]">
        <CarInfo
          name="Alfa Romeo 4C"
          brand="Alfa Romeo"
          location="Porto Alegre/RS"
          maxSpeed={250}
          releaseYear="2014/2015"
          fuel="Gasolina"
          isAvailable
          dailyPrice={650}
        />

        <div className="h-[1px] w-full bg-gray-300 my-8"></div>

        <div className="px-9 flex flex-col">
          <strong className="text-gray-600">Avaliações</strong>

          <div className="mt-3 flex flex-col gap-2">
            <CarRating
              name="Gabriel Camargo"
              recommends
              message="Ótimo carro, desempenho surpreendente e percebe-se que o dono mantém sempre impecável."
            />

            <CarRating
              name="Gabriel Camargo"
              recommends
              message="Ótimo carro, desempenho surpreendente e percebe-se que o dono mantém sempre impecável."
            />
          </div>
          <div className="mt-12">
            <RenterInfo image={renter} />
          </div>
        </div>
      </div>
    </div>
  );
}
