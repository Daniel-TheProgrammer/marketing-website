import Image from "next/image";
import { Activity, Profile, Tracking } from "../icons";
export const Impressions = () => {
  return (
    <div className="flex flex-col gap-[80px]">
      <div className="min-h-[653px] relative">
        <Image
          src="/assets/image 4.png"
          alt=""
          fill
          sizes="100vw"
          className="z-0"
        />
        <div className="absolute top-0 right-0 w-full h-full z-10">
          <div className="container mx-auto h-full flex gap-[88px] items-center py-[70px]">
            <div className="flex flex-col gap-[28px]">
              <h3 className="font-bold leading-[120%] text-[48px] text-[#1D2130] flex flex-col">
                <span>More impressions, more</span>
                <span>conversions</span>
              </h3>
              <p className="flex flex-col text-[16px] leading-[150%]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
              <button className="outline-none border-none min-h-[56px] w-[173px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]">
                Get Free trial
              </button>
            </div>
            <div className="w-[50%] shrink-0 h-full relative">
              <Image src="/assets/Image (2).png" alt="" fill sizes="100vw" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/assets/Logo 1.png" alt="" width={196} height={40} />
          <Image src="/assets/Logo 2.png" alt="" width={196} height={40} />
          <Image src="/assets/Logo 3.png" alt="" width={196} height={40} />
          <Image src="/assets/Logo 4.png" alt="" width={196} height={40} />
          <Image src="/assets/Logo 5.png" alt="" width={196} height={40} />
        </div>
      </div>
      <div className="">
        <div className="flex container mx-auto items-center py-[40px] justify-between">
          <div className="w-[45%] flex flex-col gap-[28px]">
            <h6 className="gradient1 text-[20px] leading-[120%] font-bold">
              Discover More
            </h6>
            <h2 className="text-[48px] font-bold leading-120%] text-[#1D2130]">
              Analyze your sales and marketing leads
            </h2>
            <p className="text-[16px] leading-[150%] text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="w-[45%] flex flex-col gap-[40px]">
            <div className="flex gap-[32px]">
              <span className="flex items-center justify-center">
                <Tracking />
              </span>
              <div className="flex flex-col justify-between">
                <span className="text-[24px] font-bold leading-[140%] text-[#1D2130]">
                  Project Management
                </span>
                <span className="text-[16px] leading-[150%] text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
            <div className="flex gap-[32px]">
              <span className="flex items-center justify-center">
                <Profile />
              </span>
              <div className="flex flex-col justify-between">
                <span className="text-[24px] font-bold leading-[140%] text-[#1D2130]">
                  Activity Report
                </span>
                <span className="text-[16px] leading-[150%] text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
            <div className="flex gap-[32px]">
              <span className="flex items-center justify-center">
                <Activity />
              </span>
              <div className="flex flex-col justify-between">
                <span className="text-[24px] font-bold leading-[140%] text-[#1D2130]">
                  Sales Tracking
                </span>
                <span className="text-[16px] leading-[150%] text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
