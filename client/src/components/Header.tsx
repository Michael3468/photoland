import React, { useContext, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { SlBag } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import { Cart, CategoryNavMobile, SearchForm } from '.';
import { CartContext } from '../context/CartContext';
import { Logo } from '../img';

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className="fixed top-0 z-40 py-6 w-full bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-row gap-5 justify-between mb-4 lg:items-center lg:mb-0">
          {/* menu */}
          <div className="text-3xl cursor-pointer xl:hidden" onClick={() => setCatNavMobile(true)}>
            <FiMenu />
          </div>

          {/* category nav mobile */}
          <div
            className={`${
              catNavMobile ? 'left-0' : '-left-full'
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>

          {/* logo */}
          <Link to="/">
            <img alt="Logo" src={Logo} />
          </Link>

          {/* search form show on desktop only */}
          <div className="hidden w-full lg:flex lg:max-w-[734px]">
            <SearchForm />
          </div>

          {/* phone & cart */}
          <div className="flex items-center gap-x-[10px]">
            {/* phone */}
            <div className="hidden uppercase xl:flex">Need help? 123 456 789</div>

            {/* cart icon */}
            <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <SlBag className="text-2xl" />

              {/* amount */}
              <div className="bg-accent text-primary absolute min-w-[20px] min-h-[20px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracing-[-0.1em] px-[3px]">
                {itemsAmount}
              </div>
            </div>

            {/* cart */}
            <div
              className={`${
                isOpen ? 'right-0' : '-right-full'
              } bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>

        {/* search form show on mobile only */}
        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
