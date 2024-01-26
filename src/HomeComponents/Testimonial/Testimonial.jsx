import svg from "./underline.svg";
import clientBorder from '../../assets/img/clientBorder.png'
import card from "../../assets/img/card.png";
import coma from "./coma.svg";
import man1 from "../../assets/img/man2.jpg";
import man2 from '../../assets/img/man1.jpg'
const Testimonial = () => {
  return (
    <div className=" max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-20 mt-40">
      <div>
        <h1 className="text-md font-semibold text-white">Testimonials</h1>
        <img src={svg} className="mb-16 mt-1" alt="" />
      </div>
      <h1 className="text-3xl  text-white mb-20">What Our Client Says</h1>
      {/* cards */}
      <div className="flex justify-center items-center gap-60">
      {/* 1st card */}
      <div
        className="p-4 "
        style={{
          backgroundImage: `url('${clientBorder}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "579px",
          height: "451px",
        }}
      >
        <div
          className="p-4 mx-[6px] mt-[4px]"
          style={{
            backgroundImage: `url('${card}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "535px",
            height: "406px",
          }}
        >
          <div className="m-6">
            <div className="flex justify-between items-center">
              <img src={coma} className=" mb-5" alt="" />
              {/* rating */}
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <p className="text-white">
              Thunderslab has completely transformed my gaming experience! They
              tested every game I played with great care, making sure it was
              flawless and offered an immersive experience every time.
              Thunderslab is an essential resource for any game enthusiast
              looking for superior quality assurance because of their meticulous
              attention to detail and unwavering dedication to greatness.
            </p>
            {/* name and image */}
            <div className="flex justify-between items-center text-white my-3">
              <div>
                <h1 className="text-2xl font-semibold">Guy Hawkins</h1>
                <p className="text-[#868D8A] text-sm">CEO</p>
              </div>
              <div>
                <img
                  src={man1}
                  className="w-[71px] h-[75px]"
                  style={{
                    borderRadius: "20px 0px",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd card */}
      <div
        className="p-4"
        style={{
          backgroundImage: `url('${clientBorder}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "579px",
          height: "451px",
        }}
      >
        <div
          className="p-4 mx-[6px] mt-[4px]"
          style={{
            backgroundImage: `url('${card}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "535px",
            height: "406px",
          }}
        >
          <div className="m-6">
            <div className="flex justify-between items-center">
              <img src={coma} className=" mb-5" alt="" />
              {/* rating */}
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
            <p className="text-white">
              Thunderslab has completely transformed my gaming experience! They
              tested every game I played with great care, making sure it was
              flawless and offered an immersive experience every time.
              Thunderslab is an essential resource for any game enthusiast
              looking for superior quality assurance because of their meticulous
              attention to detail and unwavering dedication to greatness.
            </p>
            {/* name and image */}
            <div className="flex justify-between items-center text-white my-3">
              <div>
                <h1 className="text-2xl font-semibold">Arlene McCoy</h1>
                <p className="text-[#868D8A] text-sm">Curator</p>
              </div>
              <div>
                <img
                  src={man2}
                  className="w-[71px] h-[75px]"
                  style={{
                    borderRadius: "20px 0px",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
