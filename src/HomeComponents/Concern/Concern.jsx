import c1 from "./Frame (1).svg";
import c2 from "./Frame.svg";
import svg from "./Vector 350.svg";
import { FaArrowUpLong } from "react-icons/fa6";
import "./Concern.css";
const Concern = () => {
  return (
    <div className=" my-36">
      <div className="max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-40 flex justify-between items-center">
        <div>
          <h1 className="text-md font-semibold text-white">
            Our Sister Concern
          </h1>
          <img src={svg} className="mb-16 mt-1" alt="" />
        </div>
        <div className="box">
          <a href="#home">
            <FaArrowUpLong />
          </a>
        </div>
      </div>

      <div className="bg:[#0909090F] md:bg-[#FFFFFF1C]  ">
        <div className="px-40 md:px-0 md:flex justify-between items-center gap-12 md:max-w-[800px] md:mx-auto">
          <img src={c1} className="my-10" alt="" />
          <img src={c2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Concern;
