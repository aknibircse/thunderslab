import svg from "./Vector 350 (2).svg";
import border from "./border.svg";
import button from "./button.svg";
import sky from "../../assets/img/sky.png";
import battle from "../../assets/img/battel.jpg";
import gold from "../../assets/img/gold.png";
import "./News.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div>
        <h1 className="text-md font-semibold text-white mt-40">News and Insights</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      {/* cards */}
      {/* three cards */}
      <div className="my-20 flex justify-center items-center gap:20">
        {/* 1st card */}
        <div className="relative">
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
                <Link>
                  <p className="-mt-3 -ml-2 text-base">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="">
          {/* mini card */}
         <div className="ml-10">
         <div className="absolute miniBox z-10">
            <p className="mt-3">3rd January 2023</p>
          </div>
         </div>
          <div
            className="p-4 mx-10"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
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
                <Link>
                  <p className="-mt-3 -ml-2 text-base">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="">
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
                <Link>
                  <p className="-mt-3 -ml-2 text-base">Read More</p>
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
