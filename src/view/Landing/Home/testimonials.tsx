import Slider from "react-slick";

function Testimonials() {
  const TestimonialsData = [
    {
      id: 1,
      name: "Abdi Hope",
      text: "I am From Finfinne the coffee they deliver osoo argitan akkam jettu seetu it is baayee delicious ",
      img: "/src/assets/newCoffee.png",
    },
    {
      id: 2,
      name: "Abdi Hope",
      text: "I am From Finfinne the coffee they deliver osoo argitan akkam jettu seetu it is baayee delicious ",
      img: "/src/assets/newCoffee.png",
    },
    {
      id: 3,
      name: "Abdi Hope",
      text: "I am From Finfinne the coffee they deliver osoo argitan akkam jettu seetu it is baayee delicious ",
      img: "/src/assets/newCoffee.png",
    },
    {
      id: 4,
      name: "Abdi Hope",
      text: "I am From Finfinne the coffee they deliver osoo argitan akkam jettu seetu it is baayee delicious ",
      img: "/src/assets/newCoffee.png",
    },
    {
      id: 5,
      name: "Abdi Hope",
      text: "I am From Finfinne the coffee they deliver osoo argitan akkam jettu seetu it is baayee delicious ",
      img: "/src/assets/newCoffee.png",
    },
    {
      id: 6,
      name: "Abdi Hope",
      text: "I am From Finfinne the coffee they deliver osoo argitan akkam jettu seetu it is baayee delicious ",
      img: "/src/assets/newCoffee.png",
    },
    {
      id: 7,
      name: "Abdi Hope",
      text: "I am From Finfinne the coffee they deliver osoo argitan akkam jettu seetu it is baayee delicious ",
      img: "/src/assets/newCoffee.png",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-20">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="text-center  mb-10">
          <h1 className="text-4xl font-bold font-cursive">Testimonials</h1>
        </div>
        <div data-aos="zoom-in" className="mx-auto">
          <Slider {...settings}>
            {TestimonialsData.map((data) => {
              return (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4 ">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500"> {data.text}</p>
                        <h1 className="text-black/60 font-cursive font-bold text-xl">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-20 right-0">
                      ’’
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
