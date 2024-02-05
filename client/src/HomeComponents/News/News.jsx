import svg from "./Vector 350 (2).svg";
import border from "../../assets/img/newsBorder.png";
import button from "../../assets/img/button.png";
import sky from "../../assets/img/sky.png";
import battle from "../../assets/img/battel.jpg";
import gold from "../../assets/img/gold.png";
import "./News.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="max-w-[1800px] mx-auto xl:px-20 md:px-10">
      <div className="px-4">
        <h1 className="text-md font-semibold text-white mt-40">
          News and Insights
        </h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      {/* ***************large screen**************** */}
      {/* cards */}
      {/* three cards */}
      <div className="hidden my-20 lg:flex justify-center items-center gap:20">
        {/* 1st card */}
        <div className="relative" data-aos="fade-up-left">
          {/* mini card */}
          <div className="absolute miniBox z-10">
            <p className="mt-3">3rd January 2023</p>
          </div>
          <div
            className="p-4"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "370px",
              height: "336px",
            }}
          >
            <div className="news">
              <img src={sky} className="w-96 h-40" alt="" />
              <p className="text-sm mt-3 ml-10 mb-6">
                Unveiling the Galactic Mayhem: <br /> Space Battle Royal Testing
                Update!
              </p>
              <div
                className="p-4 ml-10"
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link to={"/pageOne"}>
                  <p className="-mt-3 -ml-2 text-base">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="my-20 lg:mx-20" data-aos="fade-up-left">
          {/* mini card */}
          <div className="lg:ml-10">
            <div className="absolute miniBox z-10">
              <p className="mt-3">3rd January 2023</p>
            </div>
          </div>
          <div
            className="p-4 lg:mx-10"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "370px",
              height: "336px",
            }}
          >
            <div className="news">
              <img src={battle} className="w-96 h-40" alt="" />
              <p className="text-sm mt-3 ml-10 mb-6">
                Unveiling the Galactic Mayhem: <br /> Space Battle Royal Testing
                Update!
              </p>
              <div
                className="p-4 ml-10"
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link to={"/pageTwo"}>
                  <p className="-mt-3 -ml-2 text-base">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="" data-aos="fade-up-right">
          {/* mini card */}
          <div className="absolute miniBox z-10">
            <p className="mt-3">3rd January 2023</p>
          </div>
          <div
            className="p-4"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "370px",
              height: "336px",
            }}
          >
            <div className="news">
              <img src={gold} className="w-96 h-40" alt="" />
              <p className="text-sm mt-3 ml-10 mb-6">
                {` Stake Your Claim in "Gold Fever": Testing Update & Exclusive Insights!`}
              </p>
              <div
                className="p-4 ml-10"
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link to={"/pageThree"}>
                  <p className="-mt-3 -ml-2 text-base">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********mobile screen*************  */}
      {/* three cards */}
      <div className="lg:hidden mx-3 my-20 justify-center items-center gap:20">
        {/* 1st card */}
        <div className="relative">
          {/* mini card */}
          <div className="absolute responsiveMiniBox z-10">
            <p className="mt-3">3rd January 2023</p>
          </div>
          <div
            className="p-4"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "318px",
              height: "289px",
            }}
          >
            <div className="responsiveNews">
              <img src={sky} className="w-80 h-40" alt="" />
              <p className="text-sm mt-3 ml-5 mb-2">
                Unveiling the Galactic Mayhem: <br /> Space Battle Royal Testing
                Update!
              </p>
              <div
                className="p-4 ml-5"
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link to={"/pageOne"}>
                  <p className="-mt-[10px] mr-[6px] text-sm">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="my-20 lg:mx-20">
          {/* mini card */}
          <div className="lg:ml-10">
            <div className="absolute responsiveMiniBox z-10">
              <p className="mt-3">3rd January 2023</p>
            </div>
          </div>
          <div
            className="p-4 lg:mx-10"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "318px",
              height: "289px",
            }}
          >
                    <div className="responsiveNews">
              <img src={battle} className="w-80 h-40" alt="" />
              <p className="text-sm mt-3 ml-5 mb-2">
              Introducing the Fortified Realms: <br /> Fortnite Testing Insights!
              </p>
              <div
                className="p-4 ml-5"
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link to={"/pageOne"}>
                  <p className="-mt-[10px] mr-[6px] text-sm">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="">
          {/* mini card */}
          <div className="absolute responsiveMiniBox z-10">
            <p className="mt-3">3rd January 2023</p>
          </div>
          <div
            className="p-4"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "318px",
              height: "289px",
            }}
          >
            <div className="responsiveNews">
              <img src={gold} className="w-80 h-40" alt="" />
              <p className="text-sm mt-3 ml-5 mb-2">
             {` Stake Your Claim in "Gold Fever":`} <br /> Testing Update & Exclusive Insights!
              </p>
              <div
                className="p-4 ml-5"
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link to={"/pageOne"}>
                  <p className="-mt-[10px] mr-[6px] text-sm">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
