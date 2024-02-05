import svg from "./underline.svg";
import border from "../../assets/img/serviceBorder.png";
import card from "../../assets/img/serviceCard.png";
import bg from "../../assets/img/service.png";
import "./Services.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Services = () => {
  return (
    <div
      className=""
      id="services"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overly  bg-opacity-5 bg-[#e63846cf]">
      <div
        className=" max-w-[1800px] mx-auto xl:px-20 md:px-10  my-20"
      >
        {/* headline */}
        <div className="px-2">
          <h1 className="text-md font-semibold text-white mt-10">Our Services</h1>
          <img src={svg} className="mb-16 mt-1" alt="" />
        </div>
        {/* description */}
        <div className="text-white mb-10 px-2" >
          <h1 className="text-[28px] md:text-[40px] mb-5">
            Our Team Provide Next <br /> Level Services
          </h1>
          <p className="text-sm lg:text-base">
            Thunderslab Studio offers comprehensive game testing services. Our
            meticulous bug <br /> hunting and tailored solutions ensure flawless
            game releases through precision <br /> testing.
          </p>
        </div>
        <div className=" max-w-[2500px] mx-auto xl:px-20 md:px-10 sm:px-2 items-center">
          {/* swiper */}
          <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        spaceBetween={15}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              {/* 1st card */}
              <div className="ml-10 ">
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${border}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "398.647px",
                    height: "696px",
                  }}
                >
                  <div
                    className="p-4"
                    style={{
                      backgroundImage: `url('${card}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "372.998px",
                      height: "667.181px",
                    }}
                  >
                    <div className="m-6">
                      <h1 className="text-white text-2xl md:text-3xl  my-10">
                        Play Testing
                      </h1>
                      <p className="text-[#E63846] text-xl mb-5">
                        Usability Testing:
                      </p>
                      <p className="text-white text-xs md:text-base mb-10">
                        Evaluate interface, controls, and user experience for
                        intuitive design and smooth navigation.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Gameplay Mechanics Testing:
                      </p>
                      <p className="text-white mb-10">
                        Assess balance, pacing, and mechanics for an enjoyable
                        and immersive gaming experience.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Player Engagement Testing:
                      </p>
                      <p className="text-white">
                        Analyze story, level design, and retention to optimize
                        overall interest and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* 2nd card */}
              <div className="ml-6">
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${border}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "398.647px",
                    height: "696px",
                  }}
                >
                  <div
                    className="p-4"
                    style={{
                      backgroundImage: `url('${card}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "372.998px",
                      height: "667.181px",
                    }}
                  >
                    <div className="mx-6">
                      <h1 className="text-white text-3xl  mt-8 mb-6">
                        Strategy Game Testing
                      </h1>
                      <p className="text-[#E63846] text-xl mb-3">
                        Balance Testing
                      </p>
                      <p className="text-white mb-10">
                        Fine-tuning gameplay mechanics to <br /> ensure fair and
                        engaging matches. <br /> Balancing units, abilities, and
                        strategies <br /> to prevent dominant strategies.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        AI Behavior Testing
                      </p>
                      <p className="text-white mb-10">
                        Testing AI component’s behaviors and <br />{" "}
                        decision-making. Ensuring challenging <br /> and
                        strategic AI opponents for players.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Resource Management Testing
                      </p>
                      <p className="text-white">
                        Evaluating resources gathering, <br /> allowcation, and
                        management mechanics. Balancing resource availability
                        and impact on gameplay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* 3rd card */}
              <div className="ml-6">
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${border}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "398.647px",
                    height: "696px",
                  }}
                >
                  <div
                    className="p-4"
                    style={{
                      backgroundImage: `url('${card}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "372.998px",
                      height: "667.181px",
                    }}
                  >
                    <div className="m-6">
                      <h1 className="text-white text-3xl  my-8">
                        Sports/Racing Game Testing
                      </h1>
                      <p className="text-[#E63846] text-xl mb-5">
                        Mechanics Testing
                      </p>
                      <p className="text-white text-[ 14.663px] mb-10">
                        Testing core gameplay mechanics such <br /> as movement,
                        physics, and controls. Ensuring smooth and responsive
                        gameplay.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        AI Competency Testing
                      </p>
                      <p className="text-white mb-10">
                        Assessing AI opponents skill levels and behaviors.
                        Creating AI opponents with varying difficulty levels.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Multiplayer Testing
                      </p>
                      <p className="text-white">
                        Testing online multiplayer functionality for stability
                        and performance. Addressing latency and synchronization
                        issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* 4th card */}
              <div className="ml-6">
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${border}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "398.647px",
                    height: "696px",
                  }}
                >
                  <div
                    className="p-4"
                    style={{
                      backgroundImage: `url('${card}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "372.998px",
                      height: "667.181px",
                    }}
                  >
                    <div className="m-6">
                      <h1 className="text-white text-3xl  my-10">
                        FPS Testing
                      </h1>
                      <p className="text-[#E63846] text-xl mb-5">
                        Weapon Balance Testing
                      </p>
                      <p className="text-white mb-10">
                        Evaluate interface, controls, and user experience for
                        intuitive design and smooth navigation.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Hit Detecting Testing
                      </p>
                      <p className="text-white mb-10">
                        Assess balance, pacing, and mechanics for an enjoyable
                        and immersive gaming experience.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">Map Testing</p>
                      <p className="text-white">
                        Analyze story, level design, and retention to optimize
                        overall interest and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* 5th card */}
              <div className="ml-6">
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${border}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "398.647px",
                    height: "696px",
                  }}
                >
                  <div
                    className="p-4"
                    style={{
                      backgroundImage: `url('${card}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "372.998px",
                      height: "667.181px",
                    }}
                  >
                    <div className="m-6">
                      <h1 className="text-white text-3xl  my-10">
                        RPG Testing
                      </h1>
                      <p className="text-[#E63846] text-xl mb-5">
                        Quest And Dialogue Testing
                      </p>
                      <p className="text-white mb-10">
                        Evaluate interface, controls, and user experience for
                        intuitive design and smooth navigation.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Character Customization Testing
                      </p>
                      <p className="text-white mb-10">
                        Assess balance, pacing, and mechanics for an enjoyable
                        and immersive gaming experience.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Progression Testing
                      </p>
                      <p className="text-white">
                        Analyze story, level design, and retention to optimize
                        overall interest and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* 6th card */}
              <div className="ml-6">
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${border}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "398.647px",
                    height: "696px",
                  }}
                >
                  <div
                    className="p-4"
                    style={{
                      backgroundImage: `url('${card}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "372.998px",
                      height: "667.181px",
                    }}
                  >
                    <div className="m-6">
                      <h1 className="text-white text-3xl  my-10">
                        Horror Game Testing
                      </h1>
                      <p className="text-[#E63846] text-xl mb-5">
                        Atmosphere Testing:
                      </p>
                      <p className="text-white mb-10">
                        Evaluate interface, controls, and user experience for
                        intuitive design and smooth navigation.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Jump Scare Testing
                      </p>
                      <p className="text-white mb-10">
                        Assess balance, pacing, and mechanics for an enjoyable
                        and immersive gaming experience.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Pacing And Tension Testing
                      </p>
                      <p className="text-white">
                        Analyze story, level design, and retention to optimize
                        overall interest and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* 7th card */}
              <div className="ml-6">
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${border}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "398.647px",
                    height: "696px",
                  }}
                >
                  <div
                    className="p-4"
                    style={{
                      backgroundImage: `url('${card}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "372.998px",
                      height: "667.181px",
                    }}
                  >
                    <div className="m-6">
                      <h1 className="text-white text-3xl  my-10">
                        MMO Testing
                      </h1>
                      <p className="text-[#E63846] text-xl mb-5">
                        World Testing
                      </p>
                      <p className="text-white mb-10">
                        Evaluate interface, controls, and user experience for
                        intuitive design and smooth navigation.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Server Stress Testing:
                      </p>
                      <p className="text-white mb-10">
                        Assess balance, pacing, and mechanics for an enjoyable
                        and immersive gaming experience.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Economy Testing:
                      </p>
                      <p className="text-white">
                        Analyze story, level design, and retention to optimize
                        overall interest and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* 8th card */}
              <div className="ml-6">
                <div
                  className="p-4"
                  style={{
                    backgroundImage: `url('${border}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "398.647px",
                    height: "696px",
                  }}
                >
                  <div
                    className="p-4"
                    style={{
                      backgroundImage: `url('${card}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "372.998px",
                      height: "667.181px",
                    }}
                  >
                    <div className="m-6">
                      <h1 className="text-white text-3xl  my-10">
                        Simulation Game Testing
                      </h1>
                      <p className="text-[#E63846] text-xl mb-5">
                        Realism Testing
                      </p>
                      <p className="text-white mb-10">
                        Evaluate interface, controls, and user experience for
                        intuitive design and smooth navigation.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">
                        Complex System Testing:
                      </p>
                      <p className="text-white mb-10">
                        Assess balance, pacing, and mechanics for an enjoyable
                        and immersive gaming experience.
                      </p>
                      <p className="text-[#E63846] text-xl mb-5">UI Testing</p>
                      <p className="text-white">
                        Analyze story, level design, and retention to optimize
                        overall interest and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
