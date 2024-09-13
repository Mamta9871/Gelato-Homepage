import React from 'react';

function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center h-auto bg-gray-50 w-full">
        <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-start p-6 text-center md:text-start">
          <h1 className="text-4xl md:text-8xl font-semibold p-4 md:p-10 mx-4 md:mx-20 text-black">Print on demand for your ecommerce business</h1>
          <p className="text-2xl md:text-4xl mx-4 md:mx-32 text-black">Sign up for free and only pay for what you sell.</p>
          <p className="text-lg md:text-2xl mx-4 md:mx-32 text-gray-600 md:w-2/3">Turn your passion into profit with the world's largest print on demand network.</p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mx-4 md:mx-32">
            <button className="bg-black text-white font-semibold text-lg md:text-2xl py-3 px-6 rounded-3xl">Get started for free</button>
            <button className="bg-gray-100 text-lg md:text-2xl py-3 px-6 rounded-3xl font-semibold">See our products</button>
          </div>
        </div>
        <div className="w-full md:w-auto h-auto mt-12 md:mt-0 flex justify-center">
          <img src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/" alt="Product preview" className="w-full md:w-auto" />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-orange-50 py-10 mt-16 w-full">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-10 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-3xl md:text-5xl font-semibold">90%</h3>
              <p className="text-xl md:text-4xl text-gray-800">of all orders are produced locally</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-3xl md:text-5xl font-semibold">90%</h3>
              <p className="text-xl md:text-4xl text-gray-800">of orders arrive within 5 days of ordering</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-3xl md:text-5xl font-semibold">140+</h3>
              <p className="text-xl md:text-4xl text-gray-800">print providers across 32 countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
