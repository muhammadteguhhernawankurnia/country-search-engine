import arrowLeft from './assets/icons/arrow-left.svg';
import globe from './assets/icons/globe.svg';

const ResultPage = () => {
  return (
    <>
      <div className='container'>
        <div className='p-2'>
          <button className='btn-primary bg-[#8362F2] rounded-md text-white w-[18%] p-2 mt-10 mb-10 flex'>
            <img src={arrowLeft} className='mr-2' alt='arrow-left' />
            <p className='font-semibold'>Back to HomePage</p>
          </button>
          <div>
            <p className='text-5xl font-bold'>Indonesia</p>
            {/* <div className='flag'></div> */}
          </div>
          <div className='flex p-1'>
            <div className='bg-[#8DD4CC] rounded-xl text-white text-sm mr-2 max-w-fit p-2'>
              ID
            </div>
            <div className='bg-[#8DD4CC] rounded-xl text-white text-sm mr-2 max-w-fit p-2'>
              Republic of Indonesia
            </div>
            <div className='bg-[#8DD4CC] rounded-xl text-white text-sm mr-2 max-w-fit p-2'>
              Republik Indonesia
            </div>
          </div>

          {/* start card 1*/}
          <div className='flex flex-row p-2'>
            <div className='flex border shadow-xl rounded-lg w-[40%] h-30 p-4 mr-5'>
              <div className='mr-2'>
                <p className='text-xl font-semibold'>LatLong</p>
                <p className='text-4xl font-bold text-[#8362F2] mr-24'>
                  -5.0, 120.0
                </p>
              </div>
              <div>
                <img src={globe} className='w-[100px] h-[100px]' alt='globe' />
              </div>
            </div>

            <div className='flex border shadow-xl rounded-lg w-[40%] h-30 p-4'>
              <div className='mr-2'>
                <p className='text-xl font-semibold'>Capital: Jakarta</p>
                <p className='text-xl font-semibold'>Region: Asia</p>
                <p className='text-xl font-semibold'>
                  Subregion: South-Eastern Asia
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
                <p className='text-4xl font-bold text-[#8362F2] mr-24'>62</p>
                <div className='flex'>
                  <p className='text-xl font-semibold mr-1 underline text-[#8362F2]'>
                    1 country
                  </p>
                  <p className='text-xl font-semibold'>
                    {' '}
                    1 country with this calling code
                  </p>
                </div>
              </div>
            </div>

            <div className='flex w-[40%] h-30 p-4'>
              <div className='mr-2'>
                <p className='text-xl font-semibold'>Currency</p>
                <p className='text-4xl font-bold text-[#8362F2] mr-24'>IDR</p>
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
