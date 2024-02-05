import svg from "./Vector.svg";
// import button from "../../assets/img/contactBtn.png";
import bookBtn from "../../assets/img/bookButton.png";
import kid from "../../assets/img/kid.png";
import line from "../../assets/img/line.png";
import border from "../../assets/img/connectBorder.png";
import card from "../../assets/img/connectCard.png";
import responsiveCard from "../../assets/img/responsiveConnectCrad.png";
import responsiveBtn from "../../assets/img/responsiveConnectBtn.png";
import responsivebookBtn from "../../assets/img/bookBtn.png";
import { MdPeopleAlt } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import "./Connect.css";
const Connect = () => {
  const handleBook = () => {
    toast.success("Successfully booked!");
  };
  return (
    <div
      className="lg:max-w-[1800px] h-[80svh] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-20 mb-20"
      id="connect"
    >
      <div>
        <h1 className="text-md font-semibold text-white mt-40">
          Let’s Connect
        </h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      {/* ***********LARGE SCREEN**************** */}
      {/* full card and content */}
      <div
        className="hidden lg:block p-6 overflow-clip"
        style={{
          backgroundImage: `url(${border})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "103%",
          height: "680px",
        }}
      >
        <div
          className="p-4"
          style={{
            backgroundImage: `url(${card})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "616px",
          }}
        >
          <div className="mx-40">
            <h1 className="text-white mt-20 mb-10 text-2xl">Book Your Team</h1>
            {/* buttons */}
            <div className="grid grid-cols-4 justify-center items-center">
              {/* 1st button */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-white -mt-6">
                    <MdPeopleAlt className="text-xl"></MdPeopleAlt>
                  </div>

                  <h1 className="text-white mb-5">Full Name</h1>
                </div>

                <div
                  style={{
                    // backgroundImage: `url(${button})`,
                    // backgroundRepeat: "no-repeat",
                    height: "120px",
                  }}
                >
                  <input type="text" placeholder="Enter your name" className="inputField" required />
                </div>
              </div>
              {/* 2nd button */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-white -mt-6">
                    <FaPhoneAlt className="text-lg" />
                  </div>

                  <h1 className="text-white mb-5">Phone Number</h1>
                </div>
                <div
                  style={{
                    // backgroundImage: `url(${button})`,
                    // backgroundRepeat: "no-repeat",
                    height: "120px",
                  }}
                >
                    <input type="text" placeholder="Enter phone number" className="inputField" required/>
                </div>
              </div>
              {/* 3rd button */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-white -mt-6">
                    <MdEmail className="text-lg" />
                  </div>

                  <h1 className="text-white mb-5">Email Address</h1>
                </div>
                <div
                  style={{
                    // backgroundImage: `url(${button})`,
                    // backgroundRepeat: "no-repeat",
                    height: "120px",
                  }}
                >
                 <input type="text" placeholder="Enter email address" className="inputField" required/>
                </div>
              </div>
              {/* 4th button */}
              <div
                className="-mt-[20px]"
                style={{
                  backgroundImage: `url(${bookBtn})`,
                  backgroundRepeat: "no-repeat",
                  width: "200px",
                  height: "49px",
                }}
              >
                <div className="">
                  <button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                    onClick={handleBook}
                    className="text-white text-center m-3 ml-16"
                  >
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
                  <p className="text-xs uppercase"> Days</p>
                </div>
                <div className="mt-5">
                  <img src={line} alt="" />
                </div>
                <div className="flex flex-col p-5 border-2 border-white   rounded-box text-white">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 10 }}></span>
                  </span>
                  <p className="text-xs uppercase"> Hours</p>
                </div>
                <div className="mt-5">
                  <img src={line} alt="" />
                </div>
                <div className="flex flex-col p-5 border-2  border-white   rounded-box text-white">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 24 }}></span>
                  </span>
                  <p className="text-xs uppercase"> Minutes</p>
                </div>
                <div className="mt-5">
                  <img src={line} alt="" />
                </div>
                <div className="flex flex-col p-5 border-2   border-white rounded-box text-white">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 22 }}></span>
                  </span>
                  <p className="text-xs"> SECONDS</p>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <img src={kid} className="h-[300px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***********MOBILE SCREEN*************** */}
      {/* responsive card*/}
      <div
        className="lg:hidden px-4 py-[12px] text-white"
        style={{
          backgroundImage: `url(${responsiveCard})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "320px",
          height: "285px",
        }}
      >
        <div>
          <p className="text-center font-semibold mb-3">Book your team</p>
          {/* buttons */}
          <div className="grid grid-cols-2 justify-center items-center mx-6">
            {/* 1st button */}
            <div>
              <div className="flex items-center gap-2">
                <div className="text-white -mt-[9px]">
                  <MdPeopleAlt className="text-sm"></MdPeopleAlt>
                </div>

                <h1 className="text-white text-xs mb-2">Full Name</h1>
              </div>
              <div
                style={{
                  backgroundImage: `url(${responsiveBtn})`,
                  backgroundRepeat: "no-repeat",
                  width: "120px",
                  height: "50px",
                }}
              >
                <p className="text-white text-[7px] text-center pr-[10px] pt-[5px]">
                  Enter your name
                </p>
              </div>
            </div>
            {/* 2nd button */}
            <div>
              <div className="flex items-center gap-2">
                <div className="text-white -mt-[9px]">
                  <FaPhoneAlt className="text-[7px]"></FaPhoneAlt>
                </div>

                <h1 className="text-white text-xs mb-2">Phone Number</h1>
              </div>
              <div
                style={{
                  backgroundImage: `url(${responsiveBtn})`,
                  backgroundRepeat: "no-repeat",
                  width: "120px",
                  height: "50px",
                }}
              >
                <p className="text-white text-[7px] text-center pr-[10px] pt-[5px]">
                  Enter phone number
                </p>
              </div>
            </div>
            {/* 3rd button */}
            <div>
              <div className="flex items-center gap-2 -mt-[8px]">
                <div className="text-white -mt-[9px]">
                  <FaPhoneAlt className="text-[7px]"></FaPhoneAlt>
                </div>

                <h1 className="text-white text-xs mb-2">Email Address</h1>
              </div>
              <div
                style={{
                  backgroundImage: `url(${responsiveBtn})`,
                  backgroundRepeat: "no-repeat",
                  width: "120px",
                  height: "50px",
                }}
              >
                <p className="text-white text-[7px] text-center pr-[10px] pt-[5px]">
                  Enter Email Address
                </p>
              </div>
            </div>
            {/* 4th button */}
            <div>
              <div
                className="p-2 -mt-[20px]"
                style={{
                  backgroundImage: `url(${responsivebookBtn})`,
                  backgroundRepeat: "no-repeat",
                  width: "80px",
                  height: "18px",
                }}
              >
                <p className="text-white text-[6px] px-4 ">Book Now</p>
              </div>
            </div>
          </div>
          <hr className="-mt-[20px]" />
          {/* bottom part */}
          <div className="mx-6">
            <h1 className="text-xs mt-1">We Are Waiting For... Offer Time</h1>
            {/* countdown */}
            <div className="grid grid-flow-col gap-2 mx-auto text-center auto-cols-min">
              <div className="flex flex-col p-3 border-2 my-2 border-white rounded-box text-white ">
                <span className="countdown font-mono text-lg">
                  <span style={{ "--value": 15 }}></span>
                </span>
                <p className="text-[6px] mt-1 uppercase"> Days</p>
              </div>
              <div className="mt-5">
                <img src={line} alt="" />
              </div>
              <div className="flex flex-col p-3 border-2 my-2 border-white   rounded-box text-white">
                <span className="countdown font-mono text-lg">
                  <span style={{ "--value": 10 }}></span>
                </span>
                <p className="text-[6px] mt-1  uppercase"> Hours</p>
              </div>
              <div className="mt-5">
                <img src={line} alt="" />
              </div>
              <div className="flex flex-col p-3 border-2 my-2 border-white   rounded-box text-white">
                <span className="countdown font-mono text-lg">
                  <span style={{ "--value": 24 }}></span>
                </span>
                <p className="text-[6px] mt-1 uppercase"> Minutes</p>
              </div>
              <div className="mt-5">
                <img src={line} alt="" />
              </div>
              <div className="flex flex-col p-3 border-2 my-2 border-white rounded-box text-white">
                <span className="countdown font-mono text-lg">
                  <span style={{ "--value": 22 }}></span>
                </span>
                <p className="text-[6px] mt-1 uppercase"> SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
