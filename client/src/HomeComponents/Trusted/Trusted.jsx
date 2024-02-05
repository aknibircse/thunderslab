import Marquee from "react-fast-marquee";
import img1 from "../../assets/img/fortnite.png";
import img2 from "../../assets/img/gold.png";
import img3 from "../../assets/img/space.png";
import img4 from "../../assets/img/toca.png";
import img5 from "../../assets/img/english.png";
import svg from "./Vector 351.svg";

const Trusted = () => {
  return (
    <div className="my-40 ">
      <div className=" max-w-[1700px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <h1 className="text-md font-semibold text-white">Trusted By</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>

      <div className="bg-[#FFFFFF1C]">
        {/* marquee slider */}
        <Marquee speed={200}>
          <div className="max-w-[2520px] mx-auto flex justify-center items-center gap-10 lg:gap-52 my-10">
            <div className="flex justify-center items-center">
              <img src={img1} className="w-[168px] h-[113px]" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img2} className="w-[176px] h-[137px]" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img3} className="w-[230px] h-[108px]" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img4} className="w-[152px] h-[118.318px]" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src={img5} className="w-[176px] h-[137px]" alt="" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Trusted;
