import svg from "./underline.svg";
// import team1 from "../../assets/img/team1.webp";
// import team2 from '../../assets/img/team2.webp';
// import team3 from '../../assets/img/team3.jpg';
// import team4 from '../../assets/img/team4.webp'

const Team = () => {
  return (
    <div className=" max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-20 mt-40">
      {/* headline */}
      <div>
        <h1 className="text-md font-semibold text-white">Our Brilliant Mind</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      {/* content */}
      <div className="flex justify-center items-center">
        {/* images */}
        <div className="lg:flex-1">
    
        </div>

        {/* text */}
        <div className="flex-1 text-white px-6">
          <p className="text-[24px] font-medium mb-5">
            We Have A Passion For Games!
          </p>
          <h1 className="text-[40px] mb-5">
            {`Our Team Is Next-Level And`} <br />
            {`We're Proud Of It`}
          </h1>
          <p className="mb-10 text-lg">
            Our diverse team synergizes expertise, passion, and innovation.{" "}
            <br /> Collaborating seamlessly, we ensure top-notch game testing{" "}
            <br /> services with precision and dedication.
          </p>
        </div>
      </div>
     </div>
  );
};

export default Team;
