import { ArrowRight } from "../icons";

export const Why = () => {
  return (
    <>
      <div className="py-[120px]">
        <div className="container mx-auto flex gap-[87px] items-center">
          <div className="flex flex-col items-start gap-[28px]">
            <h5 className="gradient1 leading-[120%] font-bold text-[24px]">
              Why should you work with us?
            </h5>
            <p className="flex flex-col leading-[120%] font-bold text-[48px] text-[#1D2130]">
              <span>To upscale your business</span>
              <span>to the next level</span>
            </p>
            <p className="leading-[150%] text-[16px] text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
          <div className="flex flex-col shrink-0 gap-[32px]">
            <div className="flex gap-[24px] items-center">
              <span className="flex items-center shrink-0">
                <ArrowRight />
              </span>
              <p className="font-medium text-[20px] leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="flex gap-[24px] items-center">
              <span className="flex items-center shrink-0">
                <ArrowRight />
              </span>
              <p className="font-medium text-[20px] leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="flex gap-[24px] items-center">
              <span className="flex items-center shrink-0">
                <ArrowRight />
              </span>
              <p className="font-medium text-[20px] leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
