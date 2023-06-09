import React, { FC } from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '.';
import { TProduct } from '../types';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import '../slider.css';

type Props = {
  data: TProduct[] | null;
};

const ProductSlider: FC<Props> = ({ data }) => (
  <Swiper
    modules={[Pagination, Navigation]}
    loop={false}
    navigation
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }}
    pagination={{
      clickable: true,
    }}
    className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
  >
    <div>
      {data?.map((product) => (
        <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      ))}
    </div>
  </Swiper>
);

export default ProductSlider;
