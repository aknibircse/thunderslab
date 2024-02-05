import arrow from "../../assets/img/Group.png";
import getBtn from "../../assets/img/getBtn.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      className="hero-overlay bg-opacity-40 h-[100%] md:h-[90svh] flex items-center justify-center text-white "
      id="home"
    >
      <div className="text-center -mt-20 md:-mt-0">
        <p className=" lg:text-[37px] mt-60">Elevating Gaming Excellence</p>
        <h1 className="mb-5 text-[48px] lg:text-[64px] ">
          Precision Game Testing Studio
        </h1>
        <p className=" text-[15px] lg:text-[24px] mb-10">
          Ensuring Impeccable Quality Every Release
        </p>
        <br />
        <div
          className="flex justify-center items-center mb-12 md:mt-10 md:ml-60 lg:ml-80 ml-20"
          style={{
            backgroundImage: `url(${getBtn})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "187px",
            height: "47px",
          }}
        >
          <a href="#connect" className="">
            <button className="flex justify-center items-center gap-3">
              <p>Get Started</p>
              <img src={arrow} alt="" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// btn hover:bg-gray-300 hover:text-white hover:border-[#E63846]
