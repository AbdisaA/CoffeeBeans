// import React from "react";
import BgTexture from "../../../assets/footerbg.jpeg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
function Footer() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "FAQ", link: "/" },
  ];

  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5 mx-auto">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-2xl font-cursive font-semibold tracking-widest sm:text-3xl"
            >
              HakimiCoffee{" "}
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes Unforgettable Moments "" Your Perfect
              JimmaCo{" "}
            </p>
            <a
              href="#"
              className="inline-block bg-secondary py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit Us
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Footer Links
              </h1>
              <ul className="space-y-3 ">
                {Links.map((index, i) => {
                  return (
                    <li key={i} className=" ">
                      <a
                        href={index.link}
                        className="inline-block hover:scale-105 duration-200"
                      >
                        {index.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quik Links
              </h1>
              <ul className="space-y-3 ">
                {Links.map((index, i) => {
                  return (
                    <li key={i} className=" ">
                      <a
                        href={index.link}
                        className="inline-block hover:scale-105 duration-200"
                      >
                        {index.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:text-left mb-3">
              <h1>Address</h1>
              <div>
                <p className="mb-3">USA</p>
                <p>+1690393939</p>
                <div className="space-x-3 mt-6">
                  <a href="#" title="try contact us">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#" title="try contact us">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#" title="try contact us">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
