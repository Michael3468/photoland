import React, { FC } from 'react';

type Props = {
  text: string;
  image: string;
  imageStyles?: string;
};

const Promo: FC<Props> = ({ text, image, imageStyles = '-top-2 -right-4' }) => (
  <section className="grad flex-1 h-[250px] rounded-[10px] overflow-hidden relative p-6 min-h-[250px]">
    {/* text */}
    <div className="flex flex-col max-w-[144px] h-full justify-center ">
      <div className="text-[20px] uppercase font-medium leading-tight mb-4">{text}</div>
      <a className="uppercase text-accent" href="#">
        Shop now
      </a>
    </div>

    {/* image */}
    <img alt="Promo image" className={`absolute z-20 ${imageStyles}`} src={image} />
  </section>
);

export default Promo;
