import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../HomeComponents/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#E63846]">
            <Outlet></Outlet>
            <Footer></Footer>
            <div><Toaster/></div>
            </div>
          
        </div>
    );
};

export default Layout;