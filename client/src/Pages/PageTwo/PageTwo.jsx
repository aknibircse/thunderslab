import border from "../../assets/img/skyBorder.png";
import battleImg from "../../assets/img/battleImg.png";
import responsiveBorder from '../../assets/img/reponsiveBorder.png'
const PageTwo = () => {
  return (
    <div className="bg-[#E63846] min-h-screen">
      {/* headline */}
      <div className="h-[40vh] flex items-center justify-center text-white bg-[#1A1818D9]">
        <div className="text-center">
          <h1 className="mb-5 text-[30px] md:text-[40px] mt-10">News and Insights</h1>
        </div>
      </div>
      <div className=" max-w-[1600px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-20">
        {/* news title */}
        <div className=" ">
          <div className="lg:flex justify-between items-center text-white">
            <h1 className="text-4xl">
              Introducing the Fortified Realms: <br /> Fortnite Testing
              Insights!
            </h1>
            <div className="my-5">
              <p className="font-semibold">Date Published:</p>
              <p>18 May, 2023</p>
            </div>
          </div>
          <div>
          <div
            className=" lg:hidden p-4"
            style={{
              backgroundImage: `url(${responsiveBorder})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: " 314.114px",
              height: "287.301px",
            }}
          >
            <img src={battleImg} className="mb-60" alt="" />
          </div>
          </div>
        </div>
        {/* content */}
        <div className="flex-col-reverse lg:flex :justify-between items-center lg:flex-row text-white">
          <div className="flex-1 space-y-10">
            <p className="mt-10">
              Greetings, fellow gamers and fort-building enthusiasts!
            </p>
            <p>
              {`At Thunderslab, we've embarked on an interstellar journey like
                never before,`}
              <br />
              {`diving into the thrilling universe of "Space
                Battle Royal." As avid space explorers and`}
              <br />
              {`devoted gamers,
                we've been engrossed in dissecting, analyzing, and experiencing`}
              <br /> {`every pulse-pounding moment of this cosmic odyssey.`}
            </p>
            <p>
              {`Our mission has been nothing short of exhilarating. With our
                laser-sharp focus and`}
              <br />
              {`dedicated team of gaming aficionados,
                we've delved into the heart of "Space Battle `}
              <br />
              {`Royal" to
                bring you the latest scoop straight from the stars.`}
            </p>
            <p>{`Here's a sneak peek into what we've discovered so far:`}</p>
            <p>
              1.<b>Galactic Combat Dynamics:</b>
              {`Dive headfirst into the chaos of
                celestial warfare as`}
              <br />
              {`players engage in heart-pounding
                battles amidst stunning galactic backdrops.`}
              <br />
              {`From asteroid
                fields to celestial cities, every corner of this universe is a `}
              <br />
              battleground waiting to be conquered. <br />
              2. <b>Strategic Gameplay:</b>
              {`"Space
                Battle Royal" isn't just about firepower; it's a  game of `}
              <br />
              {`strategy and cunning. We've been honing our skills, mastering ship `}
              <br />
              {` maneuverability, weapon systems, and resource management to stay
                ahead of the`}
              <br /> competition.
            </p>
          </div>
          <div
            className="hidden lg:block p-4"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: " 486px",
              height: "444px",
            }}
          >
            <img src={battleImg} className="mb-60" alt="" />
          </div>
        </div>
        <div className="text-white">
          <p>
            3.<b>Diverse Arsenal:</b> Explore a vast array of futuristic
            weaponry and spaceship customization options. From energy cannons to
            quantum disruptors, each weapon brings its own flair to the
            interstellar skirmishes.
          </p>
          <p>
            4.<b>Immersive Multiplayer Experience:</b> Brace yourself for an
            unparalleled multiplayer experience. Team up with friends or go solo
            as you vie for cosmic dominance in adrenaline-pumping battles.
          </p>
          <p className="mb-10">
            5.<b> Breathtaking Visuals:</b> The beauty of space has been
            encapsulated within this game. The stunning visuals and detailed
            designs of celestial bodies, ships, and weapons are truly a sight to
            behold.
          </p>
          <p className="mb-10">
            {`But hey, our journey doesn't end here! We're continuing to delve deeper into the uncharted territories of "Space Battle Royal," uncovering hidden secrets, mastering advanced tactics, and preparing ourselves for the ultimate showdown among the stars.`}
          </p>
          <p className="mb-10">{`Stay tuned to our website and social channels for more exclusive insights, tips, and updates     as we navigate the cosmos of "Space Battle Royal" together!
              Keep your thrusters primed and your blasters at the ready—because in this galactic arena, the adventure never ends.`}</p>
          <p className="mb-10">
            Happy gaming and may the cosmic forces be with you!
          </p>
          <p className="mb-10">
            Warm regards, <br />
            Thunderslab Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
