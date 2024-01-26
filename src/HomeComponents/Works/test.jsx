import border from './border.svg';

const test = () => {
    return (
        <div className='p-4' style={{
            backgroundImage: `url(${border})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',

           }}>
            <div  className="w-16 h-[300px] m-2 card" >
            <p className="text-start text-3xl  mt-6 ml-10">Fortnite</p>
          <p className="text-sm mt-3 ml-10 mb-6">Survival Game</p>
          <div className="mini flex justify-around items-center gap-4">
            <div>
              <p className="text-2xl">32</p>
              <p className="text-xs">Hours</p>
            </div>
            <div>
              <p className="text-2xl flex justify-center items-center gap-2">
             
              </p>
              <p className="text-xs">Client Satisfactions</p>
            </div>
            <div>
              <p className="text-2xl">20</p>
              <p className="text-xs">Testers</p>
            </div>
          </div>
            </div>
        </div>
    );
};

export default test;