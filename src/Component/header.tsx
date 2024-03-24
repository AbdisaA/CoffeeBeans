import { Coffee, Menu, X } from "lucide-react";
import React, { useState } from "react";

function Header() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "FAQ", link: "/" },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w-full shadow-md fixed top-0 left-0 z-30">
        <div className="md:flex md:items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-[#6F4E37]">
            <span className=" text-[#6F4E37] text-5xl mr-1">
              <Coffee className="" />
            </span>
            HakimiCoffee
          </div>
          <div
            className="text-3xl right-8 top-6 md:hidden absolute cursor-pointer "
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X /> : <Menu />}{" "}
          </div>
          <ul
            className={`md:flex md:items-center md:static absolute md:pb-0 pb-4  bg-white md:z-auto z-[-1] left-0 md:w-auto w-full md:pl-0 pl-8 transition-all duration-500 ease-in ${
              toggle ? "top-20" : "top-[-490px] md:opacity-100 opacity-0"
            } `}
          >
            {Links.map((index, key) => (
              <li
                key={key}
                className="md:ml-8 text-md md:my-0 my-4 md:mr-4 mr-0"
              >
                <a
                  href={index.link}
                  className="text-gray-900 hover:text-indigo-300 font-sans"
                >
                  {index.name}
                </a>
              </li>
            ))}
            <button className="text-white bg-[#6F4E37] rounded-md px-2 py-1 hover:bg-gray-500 shadow-md shadow-gray-600 duration-500 ">
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
