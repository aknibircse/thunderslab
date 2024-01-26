import logo from "./Thunderslab logo 2.svg";
import social from "./Group 1000003280.svg";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import f1 from '../../assets/img/footer (1).png'
import f2 from '../../assets/img/footer (2).png'
import f3 from '../../assets/img/footer (3).png'
import f4 from '../../assets/img/footer (4).png'
import f5 from '../../assets/img/footer (5).png'

const Footer = () => {
  return (
    <div className="bg-[#1A1818D9] text-white  p-10 ">
      <div className="max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-10 ">
        <h1 className="mb-10 text-center font-semibold text-lg">Services</h1>
        <footer className="footer  ml-14 lg:ml-0">
          <nav className="-mt-8">
            <img src={logo} alt="" />
          </nav>
          <nav className=" text-center">
            <header className="link link-hover">Strategy Game Testing</header>
            <a className="link link-hover">Sports/Racing Game Testing</a>
            <a className="link link-hover">FPS Testing</a>
            <a className="link link-hover">RPG Testing</a>
          </nav>
          <nav className=" text-center">
            <header className="link link-hover">Horror Game Testing</header>
            <a className="link link-hover">MMO Testing</a>
            <a className="link link-hover">Simulation Game Testing</a>
            <a className="link link-hover">Playtest Testing</a>
          </nav>
          <nav>
            <div className="lg:-mt-14 block">
              <a
                className="flex items-center gap-3"
                href="teamthunder@crusherslabqa.com"
              >
                <MdOutlineMail className="text-lg" />
                teamthunder@crusherslabqa.com
              </a>
              <p className="mb-5 mt-3 flex items-center gap-3">
                <FaPhoneVolume /> +88 01608217323
              </p>
            </div>
            <img src={social} alt="" />
          </nav>
        </footer>
        {/* divider */}
        <hr className="my-14" />
      </div>
      <footer className="footer px-10  max-w-[1400px] mx-auto xl:px-20 md:px-10 sm:px-2 text-white ">
        <aside className="items-center lg:flex justify-center ml-14 lg:ml-0 lg:gap-40">
          <img src={f1} className="md:w-32 h-24 " alt="" />
          <img src={f2} className="md:w-52 h-9 mb-5 " alt="" />
          <img src={f3} className="md:w-52 h-6 mb-5 " alt="" />
          <img src={f4} className="md:w-32 h-8 mb-5 " alt="" />
          <img src={f5} className="md:w-32 h-16" alt="" />
       
        </aside>
      
      </footer>
    </div>
  );
};

export default Footer;
