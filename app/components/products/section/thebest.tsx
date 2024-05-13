import Image from "next/image";
import {
  NoteIcon,
  CapIcon,
  ProfileIcon,
  DocIcon,
  AiIcon,
  Security,
} from "../../icons";

export const THeBest = () => {
  return (
    <>
      <div className="relative h-[888px]">
        <Image
          src="/assets/image 4.png"
          alt=""
          fill
          sizes="100vw"
          className="z-0"
        />
        <div className="absolute w-full h-full z-10">
          <div className="relative  h-full w-full ">
            <h2 className="flex flex-col items-center text-[#1D2130] font-bold leading-[120%] text-[48px] pt-[128px]">
              <span>Get the best out of your company</span>
              <span>with our service</span>
            </h2>
            <div className="grid grid-cols-3 w-[90%] px-[85px] py-[96px] bg-[rgba(255,255,255,0.69)] absolute bottom-0 thebest gap-x-[24px] gap-y-[64px]">
              <div className="flex flex-col gap-[16px]">
                <Security />
                <span className="text-[#1D2130] font-bold leading-[140%]">
                  Security and privacy
                </span>
                <p className="text-[#1D2130] leading-[150%] text-[16px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <AiIcon />
                <span className="text-[#1D2130] font-bold leading-[140%]">
                  Built-In AI features
                </span>
                <p className="text-[#1D2130] leading-[150%] text-[16px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <ProfileIcon />
                <span className="text-[#1D2130] font-bold leading-[140%]">
                  Collaborate with others
                </span>
                <p className="text-[#1D2130] leading-[150%] text-[16px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <NoteIcon />
                <span className="text-[#1D2130] font-bold leading-[140%]">
                  Real time sync
                </span>
                <p className="text-[#1D2130] leading-[150%] text-[16px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <CapIcon />
                <span className="text-[#1D2130] font-bold leading-[140%]">
                  Built-in Ai features
                </span>
                <p className="text-[#1D2130] leading-[150%] text-[16px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <DocIcon />
                <span className="text-[#1D2130] font-bold leading-[140%]">
                  Easy notes organization
                </span>
                <p className="text-[#1D2130] leading-[150%] text-[16px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
