import svg from "./Vector 351.svg";
import { IoStar } from "react-icons/io5";
import border from "../../assets/img/workBorder.png";
import workCard from "../../assets/img/workCard.png";
import img1 from "../../assets/img/anime1.png";
import img2 from "../../assets/img/anime2.png";
import img3 from "../../assets/img/anime3.png";
// import card from './vector-351.svg'
import "./Work.css";
const Works = () => {
  return (
    <div className=" max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-20 mt-40">
      {/* headline */}
      <div>
        <h1 className="text-md font-semibold text-white">Our Works</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      {/* text */}
      <div className="lg:flex justify-between items-center mb-20">
        <div className="flex-1 text-white px-6">
          <p className="text-[24px] font-medium mb-5">
            Crafting Unforgettable Gaming Experiences
          </p>
          <h1 className="text-[40px] mb-5">
            Where Quality Meets Perfection: <br /> Unveiling Our Exceptional
            Work
          </h1>
          <p className="mb-10 text-lg">
            At our game testing studio, we specialize in meticulously testing{" "}
            <br /> and refining gaming experiences. Our dedicated team ensures{" "}
            <br /> flawless gameplay, identifying and resolving bugs to deliver
            top- <br />
            notch, seamless games. Partner with us to elevate your games <br />{" "}
            quality and success in the market.
          </p>
        </div>
        {/* images */}
        <div className="lg:flex-1 relative">
          <div className="flex justify-center items-center">
            <img src={img1} className="mr-40" alt="" />
            <img src={img2} className="absolute" alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      {/* three cards */}
      <div className="my-20 mt-48 lg:flex justify-center items-center gap:20">
        {/* 1st card */}
        <div
          className="px-4"
          style={{
            backgroundImage: `url(${border})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: " 383px",
            height: "215px",
          }}
        >
          <div
            className="text-white"
            style={{
              backgroundImage: `url(${workCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "349px",
              height: " 186px",
            }}
          >
            <p className="text-start text-2xl pt-3 mt-3 ml-10">Gold Fever</p>
            <p className="text-xs mt-3 ml-10 mb-5">MMO RPG Games Test</p>
            <div className="mini flex justify-around items-center gap-4">
              <div>
                <p className="text-2xl">156</p>
                <p className="text-xs">Hours</p>
              </div>
              <div>
                <p className="text-2xl flex justify-center items-center gap-2">
                  <IoStar className="text-[#FBE362] text-base" /> 5.0
                </p>
                <p className="text-xs">Client Satisfactions</p>
              </div>
              <div>
                <p className="text-2xl">30</p>
                <p className="text-xs">Testers</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div
          className="px-4 mx-14 lg:-mt-32"
          style={{
            backgroundImage: `url(${border})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: " 383px",
            height: "215px",
          }}
        >
          <div
            className="text-white"
            style={{
              backgroundImage: `url(${workCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "349px",
              height: " 186px",
            }}
          >
            <p className="text-start text-2xl pt-3 mt-3 ml-10">Fortnite</p>
            <p className="text-xs mt-3 ml-10 mb-5">Survival Game</p>
            <div className="mini flex justify-around items-center gap-4">
              <div>
                <p className="text-2xl">156</p>
                <p className="text-xs">Hours</p>
              </div>
              <div>
                <p className="text-2xl flex justify-center items-center gap-2">
                  <IoStar className="text-[#FBE362] text-base" /> 5.0
                </p>
                <p className="text-xs">Client Satisfactions</p>
              </div>
              <div>
                <p className="text-2xl">30</p>
                <p className="text-xs">Testers</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div
          className="px-4"
          style={{
            backgroundImage: `url(${border})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: " 383px",
            height: "215px",
          }}
        >
          <div
            className="text-white"
            style={{
              backgroundImage: `url(${workCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "349px",
              height: " 186px",
            }}
          >
            <p className="text-start text-2xl pt-3  mt-3 ml-10">
              Space Battle Royale
            </p>
            <p className="text-xs mt-3 ml-10 mb-5">MMO RPG Games Test</p>
            <div className="mini flex justify-around items-center gap-4">
              <div>
                <p className="text-2xl">3076</p>
                <p className="text-xs">Hours</p>
              </div>
              <div>
                <p className="text-2xl flex justify-center items-center gap-2">
                  <IoStar className="text-[#FBE362] text-base" /> 5.0
                </p>
                <p className="text-xs">Client Satisfactions</p>
              </div>
              <div>
                <p className="text-2xl">18</p>
                <p className="text-xs">Testers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
