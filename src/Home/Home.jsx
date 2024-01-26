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
    <div className="bg-[#E63846]">
      <div className="h-[90svh] bg-[url('./banner.gif')] bg-cover">
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
