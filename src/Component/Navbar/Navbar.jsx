import logo from "../../assets/img/logo.png";
import navbar from "../../assets/img/navbar.png";
import hireBtn from "./hireBtn.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div
      className="h:[50px] md:h-[100px] fixed z-10 w-full max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
      style={{
        backgroundImage: `url(${navbar})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="navbar  text-white ">
        <div className="bg-opacity-60"></div>
        <div className="navbar-start">
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
              <li className="w-[120px] h-[40px]  text-center item">
                <a>Home</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a>Our Works</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a>Our Team</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a>Service</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a>About Us</a>
              </li>
              <li className="w-[120px] h-[40px]  text-center item">
                <a>Career</a>
              </li>
            </ul>
          </div>
          <img src={logo} className="ml-3" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white  ">
            <li className="w-[120px] h-[40px]  text-center item">
              <a>Home</a>
            </li>
            <li className="w-[120px] h-[40px]  text-center item">
              <a>Our Works</a>
            </li>
            <li className="w-[120px] h-[40px]  text-center item">
              <a>Our Team</a>
            </li>
            <li className="w-[120px] h-[40px]  text-center item">
              <a>Service</a>
            </li>
            <li className="w-[120px] h-[40px]  text-center item">
              <a>About Us</a>
            </li>
            <li className="w-[120px] h-[40px]  text-center item">
              <a>Career</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div
            style={{
              backgroundImage: `url(${hireBtn})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100px",
              height: "29px",
            }}
          >
            <span className="ml-3 mt-10">Hire Team</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
