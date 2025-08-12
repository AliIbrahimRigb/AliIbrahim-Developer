import Image from '../contents/Images.png'

export default function Langing() {
  return (
    <section >
      <div className="contianer md:flex justify-between">
        <section>
          <div className="container">
            <div className="text-white flex flex-col mt-40 ml-[70px] gap-5 items-start ">
              <h3 className="tracking-[2px] text-[#797483]">
                {" "}
                START SAVING MONEY
              </h3>
              <h1 className="text-[52px]">
                Smart Credit Card <br /> For Your Daily Lift
              </h1>
              <button className="bg-[#e9dcff] text-black px-3 py-2 rounded-[12px] font-medium">
                DownLoad
              </button>
            </div>
          </div>
        </section>

        <section>
            <div className="container mt-20 mr-14 justify-center">
                <img src={Image} alt="" className='w-[350px]' />
            </div>
        </section>
      </div>
    </section>
  );
}
