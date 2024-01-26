import bg from "./shape.svg";
import svg from "./Vector.svg";
import button from "./button.svg";
import "./Connect.css";
import kid from "../../assets/img/kid.png";
import line from '../../assets/img/line.png'
const Connect = () => {
  return (
    <div className="max-w-[1800px] h-[80svh] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-20">
      <div>
        <h1 className="text-md font-semibold text-white mt-40">
          Let’s Connect
        </h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      <div
        className="p-4"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "103%",
          height: "642px",
        }}
      >
        <div className="max-w-[1300px] mx-auto ">
          <h1 className="text-white mt-20 mb-10 text-2xl">Book Your Team</h1>
          {/* buttons */}
          <div className="grid grid-cols-4 justify-center items-center">
            {/* 1st button */}
            <div>
              <h1 className="text-white mb-5">Full Name</h1>
              <div
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                  height: "120px",
                }}
              >
           
                <button className="text-white m-3 ml-8">Enter your name</button>
              </div>
            </div>
            {/* 2nd button */}
            <div>
              <h1 className="text-white mb-5">Phone Number</h1>
              <div
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                  height: "120px",
                }}
              >
                <button className="text-white m-3 ml-8">
                  Your phone number
                </button>
              </div>
            </div>
            {/* 3rd button */}
            <div>
              <h1 className="text-white mb-5">Email Address</h1>
              <div
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: "no-repeat",
                  height: "120px",
                }}
              >
                <button className="text-white m-3 ml-8">
                  Your email address
                </button>
              </div>
            </div>
            {/* 4th button */}
            <div>
              <div className="buton -mt-5">
                <button className="text-white text-center m-3 ml-16">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <hr />
          {/* bottom part */}
          <div className="flex justify-between items-center text-white">
            <h1 className="text-2xl -mt-32">
              We Are Waiting For... <br /> Offer Time
            </h1>
            {/* countdown */}
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max -mt-32">
              <div className="flex flex-col p-5 border-2 border-white rounded-box text-white ">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                <p className="text-xs uppercase">  Days</p>
                
              </div>
                <div className="mt-5"><img src={line} alt="" /></div>
              <div className="flex flex-col p-5 border-2 border-white   rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                <p className="text-xs uppercase">  Hours</p>
                
              </div>
              <div className="mt-5"><img src={line} alt="" /></div>
              <div className="flex flex-col p-5 border-2  border-white   rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                <p className="text-xs uppercase">  Minutes</p>
           
              </div>
              <div className="mt-5"><img src={line} alt="" /></div>
              <div className="flex flex-col p-5 border-2   border-white rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 22 }}></span>
                </span>
              <p className="text-xs">  SECONDS</p>
              </div>
            </div>
            <div>
              <img src={kid} className="h-[300px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
