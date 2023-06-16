import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm?.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
    } else {
      setIsAnimating(true);
    }
  };

  return (
    <form
      className={`${isAnimating ? 'animate-shake' : 'animate-none'} relative w-full`}
      onSubmit={handleSubmit}
    >
      <input
        className="input max-h-[40px]"
        type="text"
        placeholder="search for a product..."
        onChange={handleSearchInput}
        value={searchTerm}
      />
      <button
        type="submit"
        className="absolute top-0 right-0 px-5 rounded-tl-none rounded-bl-none btn btn-accent max-h-[40px]"
      >
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
