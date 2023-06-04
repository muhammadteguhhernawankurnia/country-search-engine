import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import glassSearch from '../.././assets/icons/glass-search.svg';

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [suggestedCountries, setSuggestedCountries] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const result = await axios('https://restcountries.com/v3.1/all');
      setCountries(result.data);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let timeoutId = null;

    if (showNotFound) {
      timeoutId = setTimeout(() => {
        setShowNotFound(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showNotFound]);

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    if (inputValue.length > 0) {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      const topFiveCountries = filteredCountries.slice(0, 5);
      setSuggestedCountries(topFiveCountries);
      setShowNotFound(false);
    } else {
      setSuggestedCountries([]);
      setShowNotFound(false);
    }
  };

  const handleInputBlur = () => {
    setShowNotFound(true);
  };

  return (
    <>
      <div className='container'>
        <div className='grid justify-items-center items-center h-screen'>
          <div className='w-full max-w-lg'>
            <Link to='/result'>
              <div className='text-[72px] font-bold text-[#000000] text-center'>
                Country
              </div>
            </Link>
            <div className='relative'>
              <input
                type='text'
                placeholder='Type any country name'
                value={searchInput}
                onChange={handleSearchInputChange}
                onBlur={handleInputBlur}
                className='input input-dark input-bordered w-full max-w-lg focus:border-[#8362F2] shadow-md'
              />
              <img
                src={glassSearch}
                className='ml-[92%] mt-[-7%]'
                alt='glass-search'
              />
              {suggestedCountries.length > 0 ? (
                <ul className='absolute left-0 right-0 mt-2 bg-white border border-gray-200 shadow-md'>
                  {suggestedCountries.map((country) => (
                    <li key={country.name.common}>
                      <Link
                        to={`/result/${encodeURIComponent(
                          country.name.common
                        )}`}
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        {country.name.common}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : showNotFound ? (
                <div className='absolute left-0 right-0 mt-4'>
                  <p className='block px-4 py-2 text-red-600'>Data not found</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
