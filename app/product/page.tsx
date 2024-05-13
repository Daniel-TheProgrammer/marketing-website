import Image from "next/image";
import { THeBest } from "../components/products/section/thebest";
import { DataDriven } from "../components/products/section/datadriven";
import { TimeTracker } from "../components/products/section/timetracker";
import { LeadGeneration } from "../components/products/section/leadgen";
import { Features } from "../components/section/features";

export default function Product() {
  return (
    <>
      <div className="py-[120px]">
        <div className="container mx-auto flex gap-[88px] items-center">
          <div className="grow flex flex-col">
            <h2 className="text-[56px] font-medium leading-[110%] text-[#1D2130] flex-col">
              <span className="block"> Grow your Sales and</span>
              <span className="block">Services</span>
            </h2>
            <p className="pt-[24px] pb-[32px] flex flex-col text-[18px] leading-[150%]">
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </span>
              <span>tempor incididunt ut labore et dolore magna aliqua.</span>
            </p>
            <div className="flex gap-[16px] items-center">
              <button className="outline-none border-none min-h-[56px] w-[163px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]">
                Get Started
              </button>
              <button className="outline-none border-[2px] border-[#E0E4FC] min-h-[56px] w-[163px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-transparent text-white leading-[150%] text-[16px]">
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-[45%] shrink-0">
            <div className="w-full h-[501px] relative">
              <Image
                src="/assets/Dashboard image.png"
                alt=""
                fill
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="pt-[96px]">
          <div className="container mx-auto flex justify-between items-center">
            <Image src="/assets/Logo 1.png" alt="" width={196} height={40} />
            <Image src="/assets/Logo 2.png" alt="" width={196} height={40} />
            <Image src="/assets/Logo 3.png" alt="" width={196} height={40} />
            <Image src="/assets/Logo 4.png" alt="" width={196} height={40} />
            <Image src="/assets/Logo 5.png" alt="" width={196} height={40} />
          </div>
        </div>
      </div>
      <THeBest />
      <DataDriven />
      <TimeTracker />
      <LeadGeneration />
      <Features page="product" />
    </>
  );
}
