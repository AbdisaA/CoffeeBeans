// Home.jsx
import React from "react";

function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="/src/assets/light-roast-.jpg"
          alt="coffee"
          className="h-screen w-screen duration-1000"
        />
      </div>
      <div className="absolute left-6 md:top-[500px] w-1/4">
        <span>
          WE BELIEVE A CUP OF COFFEE IS ONE OF THE MOST IMPORTANT, SIMPLE
          PLEASURES IN LIFE
        </span>
        <div>
          <button className="rounded-md mt-3 bg-[#6F4E37] p-2 hover:rotate-45 duration-1000">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute right-6 top-96">
        <img
          src="/src/assets/Header-Pins-30.jpg"
          className="w-80 h-80 hover:animate-bounce"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
