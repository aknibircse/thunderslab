import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../HomeComponents/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#E63846]">
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
          
        </div>
    );
};

export default Layout;