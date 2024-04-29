// import React from "react";
import BgTexture from "../../assets/light-roast-new.jpg";
const backgroundStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "rgba(255, 255, 255, 0.95)",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function AppStore() {
  return (
    <>
      <div style={backgroundStyle} className="py-14 ">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="space-y-6 max-w-xl mx-auto ">
              <h1
                data-aos="slide-right"
                className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3"
              >
                Hakimi Coffee is Available for Android and IOS
              </h1>
              {/* logo section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  href="#"
                  title="store"
                >
                  <img
                    src="/src/assets/AndroidAppStore.png"
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-delay="500"
                  href="#"
                  title="store"
                >
                  <img
                    src="/src/assets/iosAppStore.png"
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppStore;
