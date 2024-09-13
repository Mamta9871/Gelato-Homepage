import React from 'react';

const HomeF = () => {
  return (
    <div className='bg-orange-50 flex flex-col md:flex-row mt-3 relative w-full'>
      <div className='w-full md:w-1/2 flex flex-col justify-center p-24 mb-15 pt-5 md:mt-64 text-start'>
        <h1 className='w-3/4 text-8xl font-semibold ml-28 flex-col -mt-36 text-black-100'>
          Meet GelatoConnect at
          Printing United
        </h1>
        <p className='w-4/3 text-2xl font-light ml-28 flex-col mt-4 text-black-100'>
          Meet us at Printing United from September 10-12 in Las Vegas. Book your 
          meeting slot to discover the innovative ways GelatoConnect is transforming 
          the landscape and driving success for businesses like yours.
        </p>
        <div className='flex space-x-4 ml-28 mb-10 mt-8 '>
          <button className='bg-black font-semibold text-lg md:text-2xl text-white py-2 md:py-4 px-4 md:px-8 rounded-3xl hover:bg-gray-700 transition-all'>
            Book meeting
          </button>
        </div>
      </div>
      <div className='items-center flex flex-row h-full justify-end w-full mr-40 mt-24'>
        <img
          className='object-contain object-bottom w-auto h-auto'
          src="https://a.storyblok.com/f/165154/1280x720/5d47159829/gelato-printing-united-2024.png/m/1000x0/"
          alt="Gelato product"
        />
      </div>
    </div>
  );
}

export default HomeF;
