import React from 'react';

import { CategoryNav, MainSlider, Promo } from '.';
import { PromoImg1, PromoImg2 } from '../img';

const Hero = () => (
  <section className="mb-[30px]">
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
        {/* sidebar */}
        <CategoryNav />

        {/* main slider */}
        <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
          <MainSlider />
        </div>

        {/* promos */}
        <section className="flex flex-col lg:flex-row xl:flex-col gap-y-[30px] gap-x-[30px] w-full mx-auto h-[auto] lg:max-w-[734px] sm:max-w-[512px]">
          <Promo image={PromoImg1} text="Save 35% all dslr cameras" />

          <Promo
            image={PromoImg2}
            imageStyles="top-3 -right-4"
            text="Save 25% mirrorless cameras"
          />
        </section>
      </div>
    </div>
  </section>
);

export default Hero;
