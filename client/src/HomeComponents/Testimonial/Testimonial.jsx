import svg from "./underline.svg";
import clientBorder from "../../assets/img/clientBorder.png";
import card from "../../assets/img/card.png";
import coma from "./coma.svg";
import man1 from "../../assets/img/man2.jpg";
import man2 from "../../assets/img/man1.jpg";
import responsiveCard from "../../assets/img/testimonialResCard.png";
import responsiveBorder from "../../assets/img/testimonialResBorder.png";
import './Testimonial.css'
//! Slider import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className=" max-w-[1800px] mx-auto xl:px-20 md:px-10  my-20 mt-40">
      <div className="px-4">
        <h1 className="text-md font-semibold text-white">Testimonials</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      <h1 className="lg:text-3xl  text-white mb-20 px-4">What Our Client Says</h1>
      {/* **********LARGE SCREEN*************** */}
      {/* cards */}
      <div className="hidden md:inline-block lg:flex justify-center items-center gap-60">
        {/* 1st card */}
        <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
          className="p-4 md:mb-10 md:mx-14 lg:mx-0"
          style={{
            backgroundImage: `url('${clientBorder}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "579px",
            height: "451px",
          }}
        >
          <div
            className="p-4 mx-[6px] mt-[4px] "
            style={{
              backgroundImage: `url('${card}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "535px",
              height: "406px",
            }}
          >
            <div className="m-6">
              <div className="flex justify-between items-center">
                <img src={coma} className=" mb-5" alt="" />
                {/* rating */}
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
              </div>
              <p className="text-white">
                Thunderslab has completely transformed my gaming experience!
                They tested every game I played with great care, making sure it
                was flawless and offered an immersive experience every time.
                Thunderslab is an essential resource for any game enthusiast
                looking for superior quality assurance because of their
                meticulous attention to detail and unwavering dedication to
                greatness.
              </p>
              {/* name and image */}
              <div className="flex justify-between items-center text-white my-3">
                <div>
                  <h1 className="text-2xl font-semibold">Guy Hawkins</h1>
                  <p className="text-[#868D8A] text-sm">CEO</p>
                </div>
                <div>
                  <img
                    src={man1}
                    className="w-[71px] h-[75px]"
                    style={{
                      borderRadius: "20px 0px",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
          className="p-4 md:mx-14 lg:mx-0"
          style={{
            backgroundImage: `url('${clientBorder}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "579px",
            height: "451px",
          }}
        >
          <div
            className="p-4 mx-[6px] mt-[4px]"
            style={{
              backgroundImage: `url('${card}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "535px",
              height: "406px",
            }}
          >
            <div className="m-6">
              <div className="flex justify-between items-center">
                <img src={coma} className=" mb-5" alt="" />
                {/* rating */}
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
              </div>
              <p className="text-white">
                Thunderslab is unmatched in their commitment to providing
                high-quality games! Their extensive testing guarantees a
                flawless, engaging gaming experience in addition to improving
                gameplay. When looking for top-notch game testing services,
                Thunderslab is the company to contact because of their rigorous
                approach and competence.
              </p>
              {/* name and image */}
              <div className="flex justify-between items-center text-white my-3">
                <div>
                  <h1 className="text-2xl font-semibold">Arlene McCoy</h1>
                  <p className="text-[#868D8A] text-sm">Curator</p>
                </div>
                <div>
                  <img
                    src={man2}
                    className="w-[71px] h-[75px]"
                    style={{
                      borderRadius: "20px 0px",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *************MOBILE SCREEN****************** */}
      {/* swiper slider*/}
      <div className="md:hidden  mx-3">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="testimonialSwiper"
        >
          <SwiperSlide>
            {/* 1st card */}
            <div className="mb-5">
              <div
                className="p-[10px]"
                style={{
                  backgroundImage: `url('${responsiveBorder}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "293px",
                  height: "228.13px",
                }}
              >
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${responsiveCard}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "269.39px",
                    height: "204.13px",
                  }}
                >
                  <div className="mx-4">
                    <div className="flex justify-between items-center">
                      <img src={coma} className="w-3 mb-3" alt="" />
                      {/* rating */}
                      <div className="rating  rating-xs">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                      </div>
                    </div>
                    <p className="text-white text-[10px]">
                      Thunderslab has completely transformed my gaming
                      experience! They tested every game I played with great
                      care, making sure it was flawless and offered an immersive
                      experience every time. 
                    </p>
                    {/* name and image */}
                    <div className="flex justify-between items-center text-white ">
                      <div>
                        <h1 className="text-sm font-semibold">Guy Hawkins</h1>
                        <p className="text-[#868D8A] text-xs">CEO</p>
                      </div>
                      <div>
                        <img
                          src={man1}
                          className="w-[ 59.109px] h-[57.838px]"
                          style={{
                            borderRadius: "20px 0px",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* 2nd card */}
            <div className="mb-5">
              <div
                className="p-[10px]"
                style={{
                  backgroundImage: `url('${responsiveBorder}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "293px",
                  height: "228.13px",
                }}
              >
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${responsiveCard}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "269.39px",
                    height: "204.13px",
                  }}
                >
                  <div className="mx-4">
                    <div className="flex justify-between items-center">
                      <img src={coma} className="w-3 mb-3" alt="" />
                      {/* rating */}
                      <div className="rating  rating-xs">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                      </div>
                    </div>
                    <p className="text-white text-[10px]">
                    Thunderslab is unmatched in their commitment to providing high-quality games! Their extensive testing guarantees a flawless, engaging gaming experience in addition to improving gameplay.
                    </p>
                    {/* name and image */}
                    <div className="flex justify-between items-center text-white ">
                      <div>
                        <h1 className="text-sm font-semibold">Arlene McCoy</h1>
                        <p className="text-[#868D8A] text-xs">Curator</p>
                      </div>
                      <div>
                        <img
                          src={man1}
                          className="w-[ 59.109px] h-[57.838px]"
                          style={{
                            borderRadius: "20px 0px",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
