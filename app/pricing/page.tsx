import { PlantinumIcon, RegularAndStandardICon, TickIcon } from "../components/icons";
import { FAQS } from "../components/pricing/faq";

export default function Pricing() {
  return (
    <>
      <div className="pt-[122px]">
        <div className="flex flex-col items-center gap-[24px] mb-[48px]">
          <h2 className="text-[#1D2130] flex flex-col text-[56px] font-bold leading-[110%] items-center">
            <span> Pricing plans that</span>
            <span>suit you</span>
          </h2>
          <p className="flex flex-col items-center text-[18px] text-[#1D2130] leading-[150%]">
            <span> Lorem ipsum dolor sit amet, consectetur</span>
            <span>adipiscing elit, sed do eiusmod tempor.</span>
          </p>
          <div className="flex p-[8px] bg-[#E0E4FC] rounded-[20px]">
            <button className="outline-none border-none min-h-[56px] w-[155px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]">
              Monthly
            </button>
            <button className="outline-none border-none min-h-[56px] w-[155px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-transparent text-[#1D2130] leading-[150%] text-[16px] font-bold">
              Yearly
            </button>
          </div>
        </div>
        <div className="mx-auto container flex gap-[24px]">
          <div className="grow py-[48px] bg-white border-[1px] border-[#D8D8D8] rounded-[24px]">
            <div className="px-[40px] flex items-center gap-[24px]">
              <RegularAndStandardICon />
              <div className="flex flex-col">
                <h2 className="text-[36px] font-bold leading-[120%] text-[#1D2130]">
                  Regular
                </h2>
                <span className="text-[16px] text-[#1D2130] leading-[150%]">
                  Starter Plan
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-[#D8D8D8] w-full my-[34px]"></div>
            <div className="px-[40px] flex flex-col gap-[24px]">
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Limited Projects
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Regular Support Business
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  1 month Free Trial
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  3GB storage
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Ads Preview
                </span>
              </div>
            </div>
            <div className="mt-[10px] flex items-center flex-col gap-[34px]">
              <p className="text-center text-[#1D2130] leading-[150%] px-[40px] text-sm ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
              <div className="flex flex-col items-center">
                <span className="text-[#1D2130] text-[36px] font-bold leading-[120%]">
                  Free
                </span>
                <span className="text-[#1D2130] text-[12px] leading-[150%]">
                  For limited Period
                </span>
              </div>
              <button
                className="outline-none border-none min-h-[56px] w-[161px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]"
        
              >
                Get started
              </button>
            </div>
          </div>
          <div className="grow py-[48px] bg-white border-[4px] border-[#6B7CFF] rounded-[24px] plantinum">
            <div className="px-[40px] flex items-center gap-[24px]">
              <PlantinumIcon />
              <div className="flex flex-col">
                <h2 className="text-[36px] font-bold leading-[120%] text-[#1D2130]">
                  Plantinum
                </h2>
                <span className="text-[16px] text-[#1D2130] leading-[150%]">
                  Plantinum
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-[#D8D8D8] w-full my-[34px]"></div>
            <div className="px-[40px] flex flex-col gap-[24px]">
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Limited Projects
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Regular Support Business
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  1 month Free Trial
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  3GB storage
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Ads Preview
                </span>
              </div>
            </div>
            <div className="mt-[10px] flex items-center flex-col gap-[34px]">
              <p className="text-center text-[#1D2130] leading-[150%] px-[40px] text-sm ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
              <div className="flex flex-col items-center">
                <span className="text-[#1D2130] text-[36px] font-bold leading-[120%]">
                  Free
                </span>
                <span className="text-[#1D2130] text-[12px] leading-[150%]">
                  For limited Period
                </span>
              </div>
              <button
                className="outline-none border-none min-h-[56px] w-[161px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]"
        
              >
                Get started
              </button>
            </div>
          </div>
          <div className="grow py-[48px] bg-white border-[1px] border-[#D8D8D8] rounded-[24px]">
            <div className="px-[40px] flex items-center gap-[24px]">
              <RegularAndStandardICon />
              <div className="flex flex-col">
                <h2 className="text-[36px] font-bold leading-[120%] text-[#1D2130]">
                  Standard
                </h2>
                <span className="text-[16px] text-[#1D2130] leading-[150%]">
                  Most popular
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-[#D8D8D8] w-full my-[34px]"></div>
            <div className="px-[40px] flex flex-col gap-[24px]">
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Limited Projects
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Regular Support Business
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  1 month Free Trial
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  3GB storage
                </span>
              </div>
              <div className="flex gap-[24px] items-center">
                <TickIcon />
                <span className="text-[16px] text-[#1D2130] font-bold leading-[150%]">
                  Ads Preview
                </span>
              </div>
            </div>
            <div className="mt-[10px] flex items-center flex-col gap-[34px]">
              <p className="text-center text-[#1D2130] leading-[150%] px-[40px] text-sm ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
              <div className="flex flex-col items-center">
                <span className="text-[#1D2130] text-[36px] font-bold leading-[120%]">
                  Free
                </span>
                <span className="text-[#1D2130] text-[12px] leading-[150%]">
                  For limited Period
                </span>
              </div>
              <button
                className="outline-none border-none min-h-[56px] w-[161px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]"
        
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <FAQS />
    </>
  );
}
