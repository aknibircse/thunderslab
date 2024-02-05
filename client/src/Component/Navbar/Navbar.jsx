import logo from "../../assets/img/logo.png";
import navbar from "../../assets/img/navbar.png";
import responsiveNavbar from "../../assets/img/responsiveNavbar.png";
import hireBtn from '../../assets/img/hireBtn.png';
import responsiveHireBtn from '../../assets/img/responsiveHireBtn.png'
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/* ***************larger screen****************** */}
      <div
        className="hidden lg:block md:h-[105px] fixed z-10 w-full container lg:max-w-[2520px] mx-auto xl:px-20 md:px-10 "
        style={{
          backgroundImage: `url(${navbar})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="navbar  text-white ">
          <div className="bg-opacity-60"></div>
          <div className="navbar-start">
            {/* navbar logo */}
            <img src={logo} className="ml-3" alt="" />
          </div>
          {/* nav links */}
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1 pt-4 text-white  ">
              <li className="w-[120px] h-[40px]  text-center item">
                <a href="#home">Home</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a href="#about" className="">About Us</a>
              </li>
              <li className="w-[120px] h-[40px] text-center item">
                <a href="#works">Our Works</a>
              </li>
              <li className="w-[120px] h-[40px] text-center item">
                <a href="#team">Our Team</a>
              </li>
              <li className="w-[120px] h-[40px] text-center item">
                <a href="#services">Service</a>
              </li>

              <li className="w-[120px] h-[40px] text-center item">
                <a href="#career">Career</a>
              </li>
            </ul>
          </div>
          {/* navbar button */}
          <div className="navbar-end ">
            <a href="#connect"
              className="h-[29px] w-[94px]"
              style={{
                backgroundImage: `url(${hireBtn})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <span className="ml-3 text-sm">Hire Team</span>
            </a>
          </div>
        </div>
      </div>
      {/* ***************responsive navbar*************** */}
      <div
        className=" fixed z-10 w-full container lg:hidden  px-2"
        style={{
          backgroundImage: `url(${responsiveNavbar})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
            
        }}
      >
        <div className="navbar  text-white ">
          <div className="bg-opacity-60"></div>
          <div className="navbar-start">
                    {/* nav links */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1A1818F2] rounded-box w-52 text-white "
            >
       <li className="w-[120px] h-[40px] text-center item">
          <a href="#">
            <Link to="/">Home</Link>
          </a>
        </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a href="#about">About Us</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a href="#works">Our Works</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a href="#team">Our Team</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a href="#services">Service</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a href="#career">Career</a>
              </li>
            </ul>
          </div>
            <img src={logo} className="ml-3 w-[38px] h-[31px]" alt="" />
          </div>
          
          {/* navbar button */}
          <div className="navbar-end ">
            <a href="#connect" 
              className="h-[18px] w-[63px] cursor-pointer"
              style={{
                backgroundImage: `url(${responsiveHireBtn})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <span className="ml-3 text-[10px]">Hire Team</span>
            </a >
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
