import glassSearch from '../.././assets/icons/glass-search.svg';

const HomePage = () => {
  return (
    <>
      <div className='container'>
        <div className='grid justify-items-center items-center h-screen'>
          <div className='w-full max-w-lg'>
            <div className='text-[72px] font-bold text-[#000000] text-center'>
              Country
            </div>
            <div className='relative'>
              <input
                type='text'
                placeholder='Type any country name'
                className='input input-dark input-bordered w-full max-w-lg focus:border-[#8362F2] shadow-md'
              />
              <img
                src={glassSearch}
                className='ml-[92%] mt-[-7%]'
                alt='glass-search'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
