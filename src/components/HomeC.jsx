import React from 'react'

const HomeC = () => {
  return (
    <div className='flex mt-3 relative w-full'>
      <div className='bg-white w-full'>
        <div className='flex items-start flex-col w-full mt-10'>
          <div className='w-full flex justify-center mb-5'>
            <h2 className='text-8xl font-semibold text-center'>Why choose Gelato</h2>
          </div>
          <div className='flex flex-row justify-center items-start w-full mt-12'>
            {/* Image container */}
            <div className='w-1/2 flex justify-center'>
              <img
                // className='w-3/4' 
                src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"
                alt="Gelato product"
              />
            </div>
            {/* Text container */}
            <div className='w-1/2 flex flex-col text-start p-5'>
              <div className='mb-5 space-y-5 mt-3'>
                <h2 className='text-4xl font-medium'>▻ World's largest print-on-demand network</h2>
                <p className='text-2xl font-light mt-5'>140+ print partners in 32 countries. Gelato is a truly global service.</p>
              </div>
              <div className='mb-5 space-y-5 mt-3'>
                <h2 className='text-4xl font-medium'>▻ Sell globally, produce locally</h2>
                <p className='text-2xl font-light'>Your products are produced close to your customers, wherever they are.</p>
              </div>
              <div className='mb-5 space-y-5 mt-3'>
                <h2 className='text-4xl font-medium'>▻ 100% free editing tools</h2>
                <p className='text-2xl font-light'>Create your custom products using our suite of free tools.</p>
              </div>
              <div className='mb-5 space-y-5 mt-3'>
                <h2 className='text-4xl font-medium'>▻ 60+ logistics partners</h2>
                <p className='text-2xl font-light w-2/3'>Our global network of logistics partners ensures your products are delivered fast.</p>
              </div>
              <div className='mb-5 space-y-5 mt-3'>
                <h2 className='text-4xl font-medium'>▻ High-quality products</h2>
                <p className='text-2xl font-light w-2/3'>We partner with the world's leading brands to ensure the best quality products.</p>
              </div>
              <div className='mb-5 space-y-5 mt-3'>
                <h2 className='text-4xl font-medium'>▻ Endless creativity with Shutterstock Images</h2>
                <p className='text-2xl font-light w-2/3'>Access millions of images and graphics to create unique products you can sell in your store.</p>
              </div>
              <div className='mb-5 space-y-5 mt-3'>
                <h2 className='text-4xl font-medium'>▻ 1-click integration to leading e-commerce platforms</h2>
                <p className='text-2xl font-light w-2/3'>Connect your store to Gelato using our integrations with Shopify, Etsy, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeC;
