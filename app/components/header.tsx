import Image from "next/image";

export const HeaderHero = () => {
    return (
      <>
        <div className=" pt-[120px]">
          <div className="flex flex-col items-center container mx-auto">
            <h2 className="text-[#1D2130] text-[56px] font-bold leading-[110%] flex flex-col mb-[32px] items-center">
              <span> The Best Software to Grow</span>
              <span>your Sales and Services</span>
            </h2>
            <p className="flex flex-col items-center text-[#1D2130] leading-[150%] text-[18px] ">
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </span>
              <span>invidunt ut labore et dolore magna aliquyam erat.</span>
            </p>
            <div className="w-[573px] min-h-[73px] border-[1px] border-[#CACACA] rounded-[20px] bg-white pl-[21px] pr-[8px] flex items-center mt-[48px] mb-[45px]">
              <input
                className="h-full grow"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="outline-none border-none min-h-[56px] w-[173px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]">
                Get Free trial
              </button>
            </div>
            <div className="w-[1024px] h-[666px] relative mx-auto">
                <Image src="/assets/Dashboard image.png" alt=""  fill sizes="100vw"/>
            </div>
          </div>
        </div>
      </>
    );
}