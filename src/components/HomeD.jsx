import React from 'react';

const HomeD = () => {
  return (
    <div className='flex mt-3 relative w-full'>
      <div className='bg-orange-50 w-full mt-10'>
        <div className='flex items-start flex-col w-full mt-10'>
          <div className='flex flex-row justify-center items-start w-full mt-12'>
            {/* Text container (now on the left side) */}
            <div className='md:w-1/2 space-y-5 flex flex-col justify-start p-6 pt-5 text-start'>
              <p className='text-3xl font-normal ml-72 flex-col mt-3'>
                For print-on-demand sellers
              </p>
              <h1 className='w-3/4 text-8xl font-semibold ml-72 flex-col mt-4 text-black-100'>
                Accelerate business<br />
                growth with 
                innovative design
                tools and apps
              </h1>
              <h2 className='text-3xl font-semibold mb-4 ml-72'>
                See how our cutting-edge solutions can help you <br />
                reach new customers and maximize your profits.
              </h2>
              <div className='flex space-x-4 ml-72 mb-5'>
                <button className='bg-black font-semibold text-white py-4 px-8 ml-5 mt-2 rounded-3xl hover:text-gray-600 transition-all'>
                  Get Started
                </button>
              </div>
            </div>

            {/* Image container (now on the right side) */}
            <div className='w-1/2 flex justify-center mr-20'>
              <img className='w-5/6 -mt-16'
                src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/"
                alt="Gelato product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeD;
