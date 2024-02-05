import Banner from "../Component/Banner/Banner";
import Concern from "../HomeComponents/Concern/Concern";
import Connect from "../HomeComponents/Connect/Connect";
import Join from "../HomeComponents/Join/Join";
import News from "../HomeComponents/News/News";
import Services from "../HomeComponents/Services/Services";
import Team from "../HomeComponents/Team/Team";
import Testimonial from "../HomeComponents/Testimonial/Testimonial";
import Trusted from "../HomeComponents/Trusted/Trusted";
import Who from "../HomeComponents/Who/Who";
import Works from "../HomeComponents/Works/Works";

const Home = () => {
  return (
    <div className="bg-[#E63846] ">
      <div
        className={`h-[90svh]  md:bg-cover  bg-[url('https://i.ibb.co/Wv9pDQ9/reponsive-Banner.png')] md:bg-[url('https://i.ibb.co/Mshpscd/hero.png')] `}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
      <Banner></Banner>
      </div>
      <Trusted></Trusted>
      <Who></Who>
      <Works></Works>
      <Team></Team>
      <Services></Services>
      <Testimonial></Testimonial>
      <News></News>
      <Join></Join>
      <Connect></Connect>
      <Concern></Concern>
    </div>
  );
};

export default Home;

//!  banner image:
//! https://i.ibb.co/R3Qb3rn/banner.png
