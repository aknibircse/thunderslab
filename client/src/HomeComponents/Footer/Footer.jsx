import logo from "./Thunderslab logo 2.svg";
import social from "./Group 1000003280.svg";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import f1 from "../../assets/img/footer (1).png";
import f2 from "../../assets/img/footer (2).png";
import f3 from "../../assets/img/footer (3).png";
import f4 from "../../assets/img/footer (4).png";
import f5 from "../../assets/img/footer (5).png";

const Footer = () => {
  return (
    <div className=" bg-[#1A1818D9] text-white  lg:p-10 overflow-hidden">
        <nav className="lg:hidden flex justify-center items-center">
    <img src={logo} className="w-[102px] h-[107.212px]" alt="" />
   
  </nav>
  <h1 className=" lg:hidden  footer-center font-semibold mt-5">Services</h1>
      {/* 1st part */}
      <h1 className="hidden lg:flex justify-center items-center font-semibold  -pb-10">Services</h1>
      <footer className="footer  max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-10">
     
        <nav className="hidden lg:block -mt-8">
          <img src={logo} alt="" />
        </nav>
        <nav className="footer-center  px-20 lg:px-40">
          <header className="link link-hover">Strategy Game Testing</header>
          <a className="link link-hover">Sports/Racing Game Testing</a>
          <a className="link link-hover">FPS Testing</a>
          <a className="link link-hover">RPG Testing</a>
        </nav>
        <nav className="footer-center  px-24 lg:px-10">
          <header className="link link-hover">Horror Game Testing</header>
          <a className="link link-hover">MMO Testing</a>
          <a className="link link-hover">Simulation Game Testing</a>
          <a className="link link-hover">Playtest Testing</a>
        </nav>
        {/* 4th row */}
        <nav className="text-start footer-center px-12 lg:px-10 lg:-mt-10">
          <div className="flex justify-center items-center gap-2">
            <p className="">
              <MdOutlineMail className="text-xl " />
            </p>
            <p>teamthunder@crusherslabqa.com</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p>
              <FaPhoneVolume className="text-md " />
            </p>
            <p>+88 01608217323</p>
          </div>
                {/* social images */}
      <div className=" lg:mx-0 mt-3">
        <img src={social} alt="" />
      </div>
        </nav>
      </footer>

      <hr className="lg:max-w-[1600px] mx-auto" />

      {/* 2nd part */}
      <footer className="footer px-10 py-4 lg:max-w-[1400px]   lg:mx-auto ">
        <aside className=" footer-center px-20 lg:flex justify-center items-center lg:gap-40">
          <img src={f1} className="md:w-32 h-24 " alt="" />
          <img src={f2} className="md:w-52 h-9 mb-5 " alt="" />
          <img src={f3} className="md:w-52 h-6 mb-5 " alt="" />
          <img src={f4} className="md:w-32 h-8 mb-5 " alt="" />
          <img src={f5} className="md:w-32 h-16" alt="" />
        </aside>
      
      </footer>
      <p className="text-center text-[10px] lg:text-xs mt-5">
Copyright © 2023 <a className="underline" href="https://www.thunderslab.com">Thunders Lab </a> - All Right Reserved
</p> 
    </div>
  );
};

export default Footer;
