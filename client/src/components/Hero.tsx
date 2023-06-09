import React from 'react';

import { CategoryNav, MainSlider, Promo } from '.';
import { PromoImg1, PromoImg2 } from '../img';

const Hero = () => (
  <section className="mb-[30px] pt-36 lg:pt-0">
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
        {/* sidebar */}
        <div>
          <CategoryNav />
        </div>

        {/* main slider */}
        <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
          <MainSlider />
        </div>

        {/* promos */}
        <section className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
          <Promo text="Save 35% all dslr cameras" image={PromoImg1} />

          <Promo
            text="Save 25% mirrorless cameras"
            image={PromoImg2}
            imageStyles="top-3 -right-4"
          />
        </section>
      </div>
    </div>
  </section>
);

export default Hero;
