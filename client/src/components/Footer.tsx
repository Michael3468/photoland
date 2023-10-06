import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="pt-16 bg-primary">
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className="mb-6 font-semibold uppercase h2">Subscribe to our newsletter</h2>
        <p className="text-white/70">
          Be the first to get the latest news about trends, promotions and much more!
        </p>
      </div>

      {/* form */}
      <form className="flex flex-col gap-5 mx-auto my-14 w-full max-w-3xl sm:flex-row">
        <input className="input" placeholder="Your email address" type="text" />
        <button className="btn btn-accent min-w-[150px]" type="button">
          Join
        </button>
      </form>

      {/* links */}
      <div className="flex gap-x-6 mx-auto mb-9 max-w-max text-base capitalize text-white/60">
        <a className="transition-all hover-text-white" href="#">
          Returns Policy
        </a>
        <a className="transition-all hover-text-white" href="#">
          Track Your Order
        </a>
        <a className="transition-all hover-text-white" href="#">
          Shipping & delivery
        </a>
      </div>

      {/* socials */}
      <div className="flex gap-x-6 mx-auto mb-16 max-w-max text-lg">
        <a className="transition-all hover-text-white" href="#">
          <FaYoutube />
        </a>
        <a className="transition-all hover-text-white" href="#">
          <FaInstagram />
        </a>
        <a className="transition-all hover-text-white" href="#">
          <FaTwitter />
        </a>
        <a className="transition-all hover-text-white" href="#">
          <FaFacebook />
        </a>
      </div>
    </div>

    {/* copyright */}
    <div className="py-10 border-t border-t-white/10">
      <div className="container mx-auto">
        <div className="text-sm text-center text-white/60">
          Copyright &copy; Photoland 2023. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
