import svg from "./Vector 350 (1).svg";
import image from "../../assets/img/join.png";
import joinBorder from "../../assets/img/joinBorder.png";
import joinCard from "../../assets/img/joinCrad.png";
import responsiveCard from "../../assets/img/responsiveJoinCard.png";
import responsiveBorder from "../../assets/img/responsivejoinBorder.png";
import "./Join.css";
const Join = () => {
  return (
    <div className="max-w-[1800px] mx-auto xl:px-20 md:px-10 " id="career">
      <div className=" px-4">
        <h1 className="text-md font-semibold text-white">Join Us</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      <div className="md:flex justify-between items-center  xl:px-20 md:px-10 ">
        <div className="hidden lg:block mr-52">
          <img src={image} alt="" />
        </div>
        <div className="flex-1 text-white px-6">
          <p className="text-sm lg:text-[24px] font-medium mb-5">
            We are Looking For Talented Professionals
          </p>
          <h1 className="text-[24px] lg:text-[40px] mb-5">
            Lets Build The Future Of Video <br /> Games Together!
          </h1>
          <p className="mb-10 text-xs lg:text-lg">
            Our belief is that being simple, honest, self-driven and motivated
            <br /> combined with the constant pursuit of the ultimate company
            <br /> atmosphere can help grow a creative and robust team.
          </p>
        </div>
      </div>
      {/* ******LARGE SCREEN******* */}
      {/* cards */}
      <div className="hidden my-20 lg:flex justify-center items-center gap-40">
        {/* 1st card */}
        <div
          data-aos="flip-left"
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
            <div className="flex justify-between items-center gap-10 md:-mt-5 p-5">
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
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="butn text-2xl"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Apply Now
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box text-black">
                    {/* if there is a button in form, it will close the modal */}

                    <h3 className="font-bold text-center text-lg">
                      Apply Here
                    </h3>

                    <div className="modal-action">
                      <form method="dialog" className="space-y-7 mx-auto">
                        <button className="closeButn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        {/* form user name and email row */}
                        <div className="md:flex gap-6">
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                              <input
                                name="name"
                                type="text"
                                placeholder="name"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                              <input
                                name="email"
                                type="email"
                                placeholder="email@gmail.com"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                        </div>
                        {/* form phone no and years of experience row */}
                        <div className="md:flex gap-6">
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">Phone Number</span>
                            </label>
                            <label className="input-group">
                              <input
                                name="food_name"
                                type="text"
                                placeholder="+88013000000"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">
                                Years of Experience
                              </span>
                            </label>
                            <label className="input-group">
                              <input
                                name="food_image"
                                type="number"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                        </div>
                        {/* form device configuration and  Type of games you played row */}
                        <div className="md:flex gap-6">
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">
                                Device configuration
                              </span>
                            </label>
                            <label className="input-group">
                              <input
                                name="quantity"
                                type="text"
                                placeholder="configuration"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">
                                Types of games you played
                              </span>
                            </label>
                            <label className="input-group">
                              <input
                                name="game"
                                type="text"
                                placeholder="games"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                        </div>
                        {/* form cv drop */}
                        <div className="form-control">
                            <label className="label">
                              <span className="label-text mb-1">
                               Drop Your CV Here (PDF only)
                              </span>
                            </label>
                            <label className="input-group">
                            <input
                            type="file"
                            className="fileInput file-input-ghost w-full max-w-xs"
                            placeholder="upload you CV"
                          />
                            </label>
                          </div>
                        <div className="mt-20">
                          <input
                            type="submit"
                            value="Submit"
                            className="butn border-none bg-gradient-to-r bg-[#E63846] hover:bg-slate-600  text-white w-full"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd  card */}
        <div
          data-aos="flip-right"
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
            <div className="flex justify-between items-center gap-10 md:-mt-5 p-5">
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
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="butn"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Apply Now
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box text-black">
                    {/* if there is a button in form, it will close the modal */}
                    <h3 className="font-bold text-center text-lg">
                      Apply Here
                    </h3>
                    <div className="modal-action">
                      <form method="dialog" className="space-y-7 mx-auto">
                        <button className="closeButn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        {/* form user name and email row */}
                        <div className="md:flex gap-6">
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                              <input
                                name="name"
                                type="text"
                                placeholder="name"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                              <input
                                name="email"
                                type="email"
                                placeholder="email@gmail.com"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                        </div>
                        {/* form phone no and years of experience row */}
                        <div className="md:flex gap-6">
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">Phone Number</span>
                            </label>
                            <label className="input-group">
                              <input
                                name="food_name"
                                type="text"
                                placeholder="+88013000000"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">
                                Years of Experience
                              </span>
                            </label>
                            <label className="input-group">
                              <input
                                name="food_image"
                                type="number"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                        </div>
                        {/* form device configuration and  Type of games you played row */}
                        <div className="md:flex gap-6">
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">
                                Device configuration
                              </span>
                            </label>
                            <label className="input-group">
                              <input
                                name="quantity"
                                type="text"
                                placeholder="configuration"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                          <div className="form-control md:w-1/2">
                            <label className="label">
                              <span className="label-text">
                                Types of games you played
                              </span>
                            </label>
                            <label className="input-group">
                              <input
                                name="game"
                                type="text"
                                placeholder="games"
                                className="applyInput w-full"
                              />
                            </label>
                          </div>
                        </div>
                        {/* form cv drop */}
                        <div className="mb-10">
                          <input
                            type="file"
                            className="fileInput file-input-ghost w-full max-w-xs"
                            placeholder="upload you CV"
                          />
                        </div>
                        <div className="mt-20">
                          <input
                            type="submit"
                            value="Submit"
                            className="butn border-none bg-gradient-to-r bg-[#E63846] hover:from-red-500 hover:to-orange-500 text-white w-full"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *********MOBILE SCREEN*************** */}
      {/* responsive card */}
      <div className="lg:hidden mx-3">
        {/* 1st card */}
        <div
          className="p-2 mb-10"
          style={{
            backgroundImage: `url('${responsiveBorder}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "318px",
            height: "182px",
          }}
        >
          <div
            className="p-2 mx-[6px] my-[6px] text-white"
            style={{
              backgroundImage: `url('${responsiveCard}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "291",
              height: "154px",
            }}
          >
            <div className="">
              <div>
                <h1 className="text-md font-medium mx-6 mt-2 mb-3">
                  Game Tester
                </h1>
                <p className="text-[10px] mx-6">
                  Send your CV to career@crusherslabqa.com
                </p>
                <div className="flex justify-around items-center gap-5 mt-3 text-start text-xs">
                  <div className="flex justify-center items-center gap-3 mb-2">
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
              <div className="mx-6">
                <button className="minibutn">Game Testing Team</button>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div
          className="p-2"
          style={{
            backgroundImage: `url('${responsiveBorder}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "318px",
            height: "182px",
          }}
        >
          <div
            className="p-2 mx-[6px] my-[6px] text-white"
            style={{
              backgroundImage: `url('${responsiveCard}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "291",
              height: "154px",
            }}
          >
            <div className="">
              <div>
                <h1 className="text-md font-medium mx-6 mt-2 mb-3">
                  Game QA Analyst
                </h1>
                <p className="text-[10px] mx-6">
                  Send your CV to career@crusherslabqa.com
                </p>
                <div className="flex justify-around items-center gap-5 mt-3 text-start text-xs">
                  <div className="flex justify-center items-center gap-3 mb-2">
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
              <div className="mx-6">
                <button className="minibutn">Game Testing Team</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* responsive image */}
      <div className="lg:hidden">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Join;
