import React, { useContext } from 'react';
import { FiMenu } from 'react-icons/fi';
import { SlBag } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import { Cart, CategoryNavMobile, SearchForm } from '.';
import { CartContext } from '../context/CartContext';
import { Logo } from '../img';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 lg:mb-0">
          {/* menu */}
          <div className="text-3xl xl:hidden cursor-pointer">
            <FiMenu />
          </div>

          {/* category nav mobile */}
          <div>
            <CategoryNavMobile />
          </div>

          {/* logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          {/* search form show on desktop only */}
          <div className="hidden w-full lg:flex lg:max-w-[734px]">
            <SearchForm />
          </div>

          {/* phone & cart */}
          <div>
            {/* phone */}
            <div>Need help? 123 456 789</div>

            {/* cart icon */}
            <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <SlBag className="text-2xl" />

              {/* amount */}
              <div>2</div>
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
