import svg from "./Vector 350 (1).svg";
import image from "../../assets/img/join.png";
import joinBorder from "../../assets/img/joinBorder.png";
import joinCard from "../../assets/img/joinCrad.png";
import "./Join.css";
const Join = () => {
  return (
    <div className="max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div>
        <h1 className="text-md font-semibold text-white">Join Us</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      <div className="md:flex justify-between items-center  xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex-1">
          {" "}
          <img src={image} alt="" />
        </div>
        <div className="flex-1 text-white px-6">
          <p className="text-[24px] font-medium mb-5">
            We are Looking For Talented Professionals
          </p>
          <h1 className="text-[40px] mb-5">
            Lets Build The Future Of Video <br /> Games Together!
          </h1>
          <p className="mb-10 text-lg">
            Our belief is that being simple, honest, self-driven and motivated{" "}
            <br /> combined with the constant pursuit of the ultimate company{" "}
            <br /> atmosphere can help grow a creative and robust team.
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="my-20 lg:flex justify-center items-center gap-40">
        {/* 1st card */}
        <div
          className="p-4"
          style={{
            backgroundImage: `url('${joinBorder}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "571px",
            height: "216px",
          }}
        >
          <div
            className="p-4 mx-[6px] text-white"
            style={{
              backgroundImage: `url('${joinCard}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "530px",
              height: "184px",
            }}
          >
            <div className="flex justify-between items-center gap-20 md:-mt-5 p-5">
              <div>
                <h1 className="text-2xl mb-3 mt-4">Game Tester</h1>
                <p className="text-xs mb-10">
                  Send your CV to career@crusherslabqa.com
                </p>
                <div className="flex justify-around items-center gap-10 mt-5">
                  <div className="flex justify-center items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 7H4C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H16M8 7V3.6C8 3.44087 8.06321 3.28826 8.17574 3.17574C8.28826 3.06321 8.44087 3 8.6 3H15.4C15.5591 3 15.7117 3.06321 15.8243 3.17574C15.9368 3.28826 16 3.44087 16 3.6V7M8 7H16"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <p>1 year</p>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 3H5V5H3V19H5V21H19V19H21V5H19V3ZM19 5V19H5V5H19ZM11 7H13V13H17V15H11V7Z"
                        fill="white"
                      />
                    </svg>
                    <p>Full-time</p>
                  </div>
                </div>
              </div>
              <div className="-mt-10">
                <button className="butn">Game Testing Team</button>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd  card */}
        <div
          className="p-4"
          style={{
            backgroundImage: `url('${joinBorder}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "571px",
            height: "216px",
          }}
        >
          <div
            className="mx-[6px] p-4 text-white"
            style={{
              backgroundImage: `url('${joinCard}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "530px",
              height: "184px",
            }}
          >
            <div className="flex justify-between items-center gap-20 md:-mt-5 p-5">
              <div>
                <h1 className="text-2xl mb-3 mt-4">Game QA Analyst</h1>
                <p className="text-xs mb-10">
                  Send your CV to career@crusherslabqa.com
                </p>
                <div className="flex justify-around items-center gap-10">
                  <div className="flex justify-center items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 7H4C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H16M8 7V3.6C8 3.44087 8.06321 3.28826 8.17574 3.17574C8.28826 3.06321 8.44087 3 8.6 3H15.4C15.5591 3 15.7117 3.06321 15.8243 3.17574C15.9368 3.28826 16 3.44087 16 3.6V7M8 7H16"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <p>2 years</p>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 3H5V5H3V19H5V21H19V19H21V5H19V3ZM19 5V19H5V5H19ZM11 7H13V13H17V15H11V7Z"
                        fill="white"
                      />
                    </svg>
                    <p>Full-time</p>
                  </div>
                </div>
              </div>
              <div className="-mt-10">
                <button className="butn">Game Testing Team</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
