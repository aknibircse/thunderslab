import svg from "./Vector 351.svg";
import svg1 from "./Vector 9.svg";
import background from "../../assets/img/background.png";
import p1 from "../../assets/img/person1.png";
import p2 from "../../assets/img/person2.jpg";
import p3 from "../../assets/img/person3.jpg";
import redCard from "../../assets/img/redCard.png";
import whiteBorder from "../../assets/img/whiteBorder.png";
import resposiveCard from "../../assets/img/responsiveWhoCard.png";
import miniBtn from "../../assets/img/miniBtn.png";
const Who = () => {
  return (
    <div>
      <div className=" max-w-[1700px] mx-auto xl:px-20 md:px-10  px-4" id="about">
        <h1 className="text-md font-semibold text-white">Who We Are</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      {/* ***************larger screen********************** */}
      <div
        className="hidden lg:hero md:h-[100vh] md:max-w-[1500px] mx-auto "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center  text-white">
          <div className=" lg:flex justify-center items-center gap-20">
            {/* images */}
            <div className="flex-1 relative">
              <div className="flex justify-center items-center gap-10">
                <div className="flex-1">
                  <img src={p1} className="h-[403px] w-[268px]" alt="" />
                </div>
                <div className="flex-1">
                  <img src={p2} className="mb-14" alt="" />
                  <img src={p3} alt="" />

                  {/*  card */}
                  <div className="absolute -mt-[400px] -ml-40" data-aos="fade-up-right">
                    <div
                      className="p-4"
                      style={{
                        backgroundImage: `url('${whiteBorder}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "307px",
                        height: "195px",
                      }}
                    >
                      <div
                        className="p-4"
                        style={{
                          backgroundImage: `url('${redCard}')`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          width: "269px",
                          height: "154px",
                        }}
                      >
                        <div className="flex justify-center items-center mt-5 font-semibold gap-5">
                          <h1 className="text-7xl">2+</h1>
                          <p className="text-lg">
                            Years of <br /> Experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* description */}
            <div className="flex-1 space-y-8 text-start text-white">
              <h5 className="text-[20px] font-medium mt-2">
                Welcome To Thunderslab Game Testing Studio
              </h5>
              <h1 className="text-[40px]">
                Unlock Perfection in Gaming Development
              </h1>
              <p className="mb-10 text-lg">
                At Thunderslab, we specialize in comprehensive game testing
                <br /> services, ensuring each release meets the highest
                standards of <br /> quality. With over 2 years of invaluable
                experience, our <br /> dedicated team meticulously hunts down
                every bug, enhancing <br /> gameplay and user experience.
              </p>
              {/* flex description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-2xl mb-3">20+</p>
                  <p>
                    Dedicated testers ensuring <br />
                    perfection
                  </p>
                  <img src={svg1} className="my-6" alt="" />
                </div>
                <div>
                  <p className="text-2xl mb-3">25+</p>
                  <p>
                    Premium high-configuration devices <br /> for comprehensive
                    testing
                  </p>
                  <img src={svg1} className="my-6" alt="" />
                </div>
                <div>
                  <p className="text-2xl mb-3">4+</p>
                  <p>
                    Game-changing quality <br /> checks
                  </p>
                  <img src={svg1} className="my-6" alt="" />
                </div>
                <div>
                  <p className="text-2xl mb-3">4+</p>
                  <p>
                    Game testing services <br /> delivered
                  </p>
                  <img src={svg1} className="my-6" alt="" />
                </div>
              </div>

              <button className="btn">Explore Our Services</button>
            </div>
          </div>
        </div>
      </div>
      {/* *******************responsive screen*************** */}
      <div className="container mx-auto">
        <div
          className="md:hidden hero md:h-[100vh] md:max-w-[1500px] mx-auto mt-20 w-full"
          style={{
            backgroundImage: `url(${resposiveCard})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "874px",
          }}
        >
          <div className="mx-2">
            <div className="hero-content text-center  text-white">
              {/* description */}
              <div className="">
                <div className="space-y-3">
                  <p className="text-xs">
                    Welcome To Thunderslab Game Testing Studio
                  </p>
                  <h1 className="text-2xl font-bold">
                    Unlock Perfection in Gaming Development
                  </h1>
                  <p className="text-xs">
                    At Thunderslab, we specialize in comprehensive game testing
                    services, ensuring each release meets the highest standards
                    of quality. With over 2 years of invaluable experience, our
                    dedicated team meticulously hunts down every bug, enhancing
                    gameplay and user experience.
                  </p>
                </div>
                {/* flex description */}
                <div className="grid grid-cols-2 gap-10 text-start mt-2">
                  <div>
                    <p className="text-2xl mb-3">20+</p>
                    <p className="text-xs">
                      Dedicated testers ensuring <br />
                      perfection
                    </p>
                    <img src={svg1} className="my-6" alt="" />
                  </div>
                  <div>
                    <p className="text-2xl mb-3">25+</p>
                    <p className="text-xs">
                      Premium high-configuration devices for comprehensive
                      testing
                    </p>
                    <img src={svg1} className="mt-3" alt="" />
                  </div>
                  <div>
                    <p className="text-2xl mb-3">4+</p>
                    <p className="text-xs">
                      Game-changing quality <br /> checks
                    </p>
                    <img src={svg1} className="my-6" alt="" />
                  </div>
                  <div>
                    <p className="text-2xl mb-3">4+</p>
                    <p className="text-xs">
                      Game testing services <br /> delivered
                    </p>
                    <img src={svg1} className="my-6" alt="" />
                  </div>
                </div>
                {/* button */}
                <div
                  className="text-start"
                  style={{
                    backgroundImage: `url(${miniBtn})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "126.947px",
                    height: "32.568px",
                  }}
                >
                  <button className="text-[9.305px] font-bold px-[16px]">
                    Explore Our Services
                  </button>
                </div>
                <div className=" flex justify-center items-center gap-20">
                  {/* images */}
                  <div className="flex-1 relative">
                    <div className="flex justify-center items-center">
                      <div className="flex-1">
                        <img
                          src={p1}
                          className="h-[237.535px] w-[157.963px]"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <img src={p2} className="w-[152.659px] " alt="" />
                        <img
                          src={p3}
                          className="w-[101.38px] h-[90.936px] mx-3 my-5"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* card */}
                    <div className="absolute -mt-[235px] ml-24">
                      <div
                        className=" p-[10px]"
                        style={{
                          backgroundImage: `url('${whiteBorder}')`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          width: "180.951px",
                          height: "114.936px",
                        }}
                      >
                        <div
                          className="p-2"
                          style={{
                            backgroundImage: `url('${redCard}')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "158.553px",
                            height: "90.77px",
                          }}
                        >
                          <div className="flex justify-center items-center mt-5 font-semibold gap-2 ">
                            <h1 className="text-3xl font-semibold">2+</h1>
                            <p className="text-xs text-start">
                              Years of <br /> Experience
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
