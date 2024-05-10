import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#1D2130]">
        <div className="py-[54px] container mx-auto flex flex-col gap-[59px]">
          <div className="flex gap-[60px]">
            <div className="grow flex flex-col gap-[8px]">
              <span className="text-[18px] leading-[150%] capitalize font-semibold text-white">
                Company
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                About Us
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Why Choose Us
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Pricing
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Testimonial
              </span>
            </div>
            <div className="grow flex flex-col gap-[8px]">
              <span className="text-[18px] leading-[150%] capitalize font-semibold text-white">
                Resources
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Privacy Policy
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Terms and Condition
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Blog
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Contact Us
              </span>
            </div>
            <div className="grow flex flex-col gap-[8px]">
              <span className="text-[18px] leading-[150%] capitalize font-semibold text-white">
                Product
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Project management
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Time tracker
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Time Schedule
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Lead generate
              </span>
              <span className="text-[16px] leading-[150%] capitalize font-semibold text-white/[0.6]">
                Remote Collaboration
              </span>
            </div>
            <div className="flex flex-col gap-[27px] grow-[2]">
              <Image src="/assets/Logof.png" alt="" width={120} height={26} />
              <span className="text-white text-[18px] leading-[150%]">
                Subscribe to our Newsletter
              </span>
              <div className="flex w-full h-[56px] bg-[#2B2E3C] rounded-[8px] items-stretch overflow-hidden">
                <input
                  className="block bg-transparent grow outline-none border-none px-[22px]"
                  type="text"
                  placeholder="Enter your Email"
                />
                <button className="border-none outline-none w-[152px] flex items-center justify-center text-[16px] leading-[150%] bg-white rounded-[8px] font-medium text-[#1D2130] shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};
