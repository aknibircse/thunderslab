import arrow from "../../assets/img/Group.png";
import './Banner.css'
const Banner = () => {
  return (
    <div className="h-[87%] flex items-center justify-center text-white " id="home">
      <div className="text-center">
        <p className=" text-[37px] mt-60">Elevating Gaming Excellence</p>
        <h1 className="mb-5 text-[64px] ">Precision Game Testing Studio</h1>
        <p className=" text-[24px] mb-10">
          Ensuring Impeccable Quality Every Release
        </p>
        <br />
        <div className="flex justify-center items-center mt-10">
          <button className="btn hover:bg-gray-300 hover:text-white hover:border-[#E63846]">
            Get Started
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
