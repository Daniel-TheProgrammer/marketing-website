import Image from "next/image";

export const DataDriven = () => {
  return (
    <>
      <div className="py-[120px]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-[45%] flex flex-col">
            <small className="text-[24px] font-bold leading-[120%] insights">
              Marketing insights
            </small>
            <h4 className="flex flex-col text-[48px] leading-[120%] font-bold text-[#1D2130] mt-[20px] mb-[25px]">
              <span>Data-driven client</span>
              <span>feedback</span>
            </h4>
            <p className="leading-[150%] text-[16px] ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
          <div className="w-[45%] shrink-0">
            <Image
              src="/assets/datadiven.png"
              alt=""
              width={0}
              height={0}
              layout="responsive"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
