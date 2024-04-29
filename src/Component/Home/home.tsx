// Home.tsx

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="mt-16 min-h-[550px] sm:min-h-[600px] bg-hakimBrand flex justify-center items-center text-white ">
      <div className="container  pb-8 sm:pb-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold">
              We serve the Richest{" "}
              <span className="text-primary font-cursive">Coffee</span> for Our
              Customer
            </h1>

            <div data-aos="fade-up" data-aos-delay="100" className="my-4">
              <button className=" bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full border-2 border-primary text-white hover:scale-105 duration-500 hover:rotate-3">
                Coffee and Delivery
              </button>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="duration-300 min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative"
          >
            <img
              src="/src/assets/coffeecup.png"
              className="animate-spin-slow w-[300px] sm:w-[450px]"
              alt=""
            />
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r from-primary to-secondary absolute top-3 left-10 p-3 rounded-xl"
            >
              <h1>Premium Coffee</h1>
            </div>
            <div
              data-aos="fade-right"
              className="bg-gradient-to-r from-primary to-secondary absolute bottom-3 right-10 p-3 rounded-xl"
            >
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
