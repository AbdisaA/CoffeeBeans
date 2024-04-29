import { Menu, X } from "lucide-react";
import { useState } from "react";
import LoginModal from "./Auth/login";

function Header() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "SERVICES", link: "#service" },
    { name: "BLOG'S", link: "/" },
    { name: "FAQ", link: "/" },
  ];

  const [toggle, setToggle] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="w-full shadow-md fixed top-0 left-0 z-30">
      <div className="md:flex md:items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-[#6F4E37]">
          <span className="text-[#6F4E37] text-5xl mr-1">
            <img
              src="/src/assets/newCoffee.png"
              className="h-5 w-5 ml-2"
              alt=""
            />
          </span>
          HakimiCoffee
        </div>
        <div
          className="text-3xl right-8 top-6 md:hidden absolute cursor-pointer "
          onClick={handleToggle}
        >
          {toggle ? <X /> : <Menu />}
        </div>
        <ul
          className={`md:flex md:items-center md:static absolute md:pb-0 pb-4  bg-white md:z-auto z-[-1] left-0 md:w-auto w-full md:pl-0 pl-8 transition-all duration-500 ease-in ${
            toggle ? "top-20" : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((index, key) => (
            <li key={key} className="md:ml-8 text-md md:my-0 my-4 md:mr-4 mr-0">
              <a
                href={index.link}
                className="text-gray-900 hover:text-indigo-300 font-sans"
              >
                {index.name}
              </a>
            </li>
          ))}
          <>
            <button
              title="Show More"
              onClick={handleLoginClick}
              className="bg-blue-400 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Login
            </button>{" "}
          </>
          {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
        </ul>
      </div>
    </div>
  );
}

export default Header;
