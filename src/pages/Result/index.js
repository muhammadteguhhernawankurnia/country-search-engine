import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import arrowLeft from '../.././assets/icons/arrow-left.svg';
import globe from '../.././assets/icons/globe.svg';

const ResultPage = () => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          'https://restcountries.com/v3.1/name/japan'
        );
        // const response = await axios.get(
        //   'https://restcountries.com/v3.1/name/${name}'
        // );
        const country = response.data[0];
        setCountryData(country);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryData();
  }, []);
  return (
    <>
      <div className='container'>
        <div className='p-2'>
          <Link to='/'>
            <button className='btn-primary bg-[#8362F2] rounded-md text-white w-[18%] p-2 mt-10 mb-10 flex'>
              <img src={arrowLeft} className='mr-2' alt='arrow-left' />
              <p className='font-semibold'>Back to HomePage</p>
            </button>
          </Link>
          <div className='flex mb-2'>
            <p className='text-5xl font-bold mr-4'>
              {countryData?.name?.common}
            </p>
            <img
              className='w-18 h-12 shadow-sm border'
              src={countryData?.flags.svg}
              alt='Flag'
            />
          </div>
          <div className='flex p-1'>
            <div className='bg-[#8DD4CC] rounded-xl text-white text-sm mr-2 max-w-fit p-2'>
              {countryData?.altSpellings[0]}
            </div>
            <div className='bg-[#8DD4CC] rounded-xl text-white text-sm mr-2 max-w-fit p-2'>
              {countryData?.altSpellings[1]}
            </div>
            <div className='bg-[#8DD4CC] rounded-xl text-white text-sm mr-2 max-w-fit p-2'>
              {countryData?.altSpellings[2]}
            </div>
          </div>

          {/* start card 1*/}
          <div className='flex flex-row p-2'>
            <div className='flex border shadow-xl rounded-lg w-[40%] h-30 p-4 mr-5'>
              <div className='mr-2'>
                <p className='text-xl font-semibold'>LatLong</p>
                <p className='text-4xl font-bold text-[#8362F2] mr-24'>
                  {countryData?.latlng}
                </p>
              </div>
              <div>
                <img src={globe} className='w-[100px] h-[100px]' alt='globe' />
              </div>
            </div>

            <div className='flex border shadow-xl rounded-lg w-[40%] h-30 p-4'>
              <div className='mr-2'>
                <p className='text-xl font-semibold'>
                  Capital: {countryData?.capital}
                </p>
                <p className='text-xl font-semibold'>
                  Region: {countryData?.region}
                </p>
                <p className='text-xl font-semibold'>
                  Subregion: {countryData?.subregion}
                </p>
              </div>
            </div>
          </div>
          {/* end card 1*/}

          {/* start card 2*/}
          <div className='flex flex-row p-2'>
            <div className='flex w-[40%] h-30 p-4 mr-5'>
              <div className='mr-2'>
                <p className='text-xl font-semibold'>Calling Code</p>
                <p className='text-4xl font-bold text-[#8362F2] mr-24'>
                  {countryData?.idd?.root}
                  {countryData?.idd?.suffixes}
                </p>
                <div className='flex'>
                  <p className='text-xl font-semibold mr-1 underline text-[#8362F2]'>
                    1 country
                  </p>
                  <p className='text-xl font-semibold'>
                    {' '}
                    with this calling code
                  </p>
                </div>
              </div>
            </div>

            <div className='flex w-[40%] h-30 p-4'>
              <div className='mr-2'>
                <p className='text-xl font-semibold'>Currency</p>
                <p className='text-4xl font-bold text-[#8362F2] mr-24'>
                  {countryData?.currencies && (
                    <div>
                      {Object.keys(countryData.currencies).map((currency) => (
                        <div key={currency}>
                          {countryData.currencies[currency].name}
                        </div>
                      ))}
                    </div>
                  )}
                </p>
                <div className='flex'>
                  <p className='text-xl font-semibold mr-1 underline text-[#8362F2]'>
                    1 country
                  </p>
                  <p className='text-xl font-semibold'> with this currency</p>
                </div>
              </div>
            </div>
          </div>
          {/* end card 2*/}
        </div>
      </div>
    </>
  );
};

export default ResultPage;
