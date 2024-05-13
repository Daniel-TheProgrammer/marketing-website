import Image from "next/image";
export const LeadGeneration = () => {
  return (
    <div className="flex flex-col gap-[80px]">
      <div className="min-h-[653px] relative">
        <div className="absolute top-0 right-0 w-full h-full z-10">
          <div className="container mx-auto h-full flex gap-[88px] items-center py-[70px]">
            <div className="w-[45%] flex flex-col">
              <small className="text-[24px] font-bold leading-[120%] insights">
                Lead Generation
              </small>
              <h4 className="flex flex-col text-[48px] leading-[120%] font-bold text-[#1D2130] mt-[20px] mb-[25px]">
                <span>More leads that convert</span>
              </h4>
              <p className="leading-[150%] text-[16px] ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren.
              </p>
            </div>
            <div className="w-[50%] shrink-0 h-full relative">
              <Image src="/assets/Image (2).png" alt="" fill sizes="100vw" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
