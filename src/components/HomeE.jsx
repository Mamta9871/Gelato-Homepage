import React from 'react'

const HomeE = () => {
  return (
    <div className='flex mt-3 relative w-full'>
         <div className='w-1/2 flex justify-center mr-20 mt-28'>
              <img
                className='w-5/6 -mt-16'
                src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/"
                alt="Gelato product"
              />
         </div>
         <div className='md:w-1/2 space-y-6 flex flex-col justify-start p-6 pt-5 mt-64 text-start'>
              <p className='text-3xl font-normal ml-20 flex-col mt-3'>
                For print producers
              </p>
              <h1 className='w-3/4 text-8xl font-semibold ml-20 flex-col mt-4 text-black-100'>
                GelatoConnect
              </h1>
              <h2 className='text-4xl font-normal mb-4 ml-20 w-2/3'>
                Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution  
                for the print industry
              </h2>
              <div className='flex space-x-4 ml-20 mb-5'>
                <button className='bg-black font-semibold text-2xl text-white py-4 px-8 ml-5 mt-2 rounded-3xl hover:text-gray-600 transition-all'>
                  Learn more
                </button>
              </div>
        </div>

    </div>
  )
}

export default HomeE