// import React from "react";

function Product() {
  const ProductData = [
    {
      id: 1,
      img: "/src/assets/coffee.png",
      name: "Jimma Coffee",
      description: "Jimma Coffee special for export standard",
      aosDelay: "200",
    },
    {
      id: 2,
      img: "/src/assets/coffee.png",
      name: "Jimma Coffee",
      description: "Jimma Coffee special for export standard",
      aosDelay: "300",
    },
    {
      id: 3,
      img: "/src/assets/coffee.png",
      name: "Jimma Coffee",
      description: "Jimma Coffee special for export standard",
      aosDelay: "400",
    },
  ];
  return (
    <div className="py-10">
      <span id="service"></span>
      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Best Coffee For You
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-14 sm:gap-5 place-items-center">
          {ProductData.map((data, index) => {
            return (
              <div
                data-aos="fade-down"
                data-aos-delay={data.aosDelay}
                key={index}
                className="text-3xl rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
              >
                <div className="h-[122px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-200"
                  />
                </div>
                <div className="p-4 text-center ">
                  <h1 className="text-xl font-bold ">{data.name}</h1>
                  <p className="text-gray-500 text-sm  group-hover:text-white line-clamp-2 duration-300">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
