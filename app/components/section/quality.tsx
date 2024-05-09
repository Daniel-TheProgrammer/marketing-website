import Image from "next/image";

export const Quality = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-[160px]">
        <h4 className="gradient1 leading-[120%] font-bold text-[24px]">
          High-quality
        </h4>
        <h6 className="flex flex-col leading-[120%] text-[48px] mt-[24px] mb-[48px] items-center">
          <span>We have the Best Solution</span>
          <span>for your Business</span>
        </h6>
        <div className="flex container mx-auto">
          <div className="w-full min-h-[344px] flex gap-[32px] rounded-[24px] items-center bg-[#E0E4FC] p-[64px]">
            <div className="flex flex-col gap-[22px]">
              <div className="w-[48px] h-[48px] relative">
                <Image src="/assets/Icon 1.png" alt="" fill sizes="" />
              </div>
              <h5 className="text-[32px] font-bold leading-[120%] text-[1D2130] flex-col flex">
                <span> High security to protect</span>
                <span>from piracy</span>
              </h5>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="flex flex-col gap-[22px]">
              <div className="w-[48px] h-[48px] relative">
                <Image src="/assets/Icon 2.png" alt="" fill sizes="" />
              </div>
              <h5 className="text-[32px] font-bold leading-[120%] text-[1D2130] flex-col flex">
                <span>Premium quality</span>
                <span>performance</span>
              </h5>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="flex flex-col gap-[22px]">
              <div className="w-[48px] h-[48px] relative">
                <Image src="/assets/Icon 3.png" alt="" fill sizes="" />
              </div>
              <h5 className="text-[32px] font-bold leading-[120%] text-[1D2130] flex-col flex">
                <span> Full time customer</span>
                <span>support - 24/7</span>
              </h5>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
