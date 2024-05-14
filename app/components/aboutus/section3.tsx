import Image from "next/image"

export const Section3 = () => {
  return (
    <>
      <div className="py-[120px] mx-auto container flex gap-[32px]">
        <div className="w-[608px] shrink-0 flex flex-col gap-[24px]">
          <h2 className="text-[#1D2130] leading-[120%] text-[48px] font-bold">
            Our talented Team
          </h2>
          <p className="text-[18px] text-[#1D2130] leading-[[150%] ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[24px]">
          <div className="flex flex-col grow rounded-[12px] overflow-hidden">
            <Image
              width={0}
              layout="responsive"
              height={0}
              src="/assets/2.png"
              alt=""
              style={{
                width: "100%",
                height: "224px",
                objectFit: "cover",
              }}
            />
            <div className="p-[24px] flex flex-col bg-[#E0E4FC] w-full">
              <span className="text-[24px] leading-[140%] font-bold text-[#1D2130]">
                Blake Mathews
              </span>
              <span className="text-[#1D2130] text-[16px] leading-[150%]">
                CEO & Co-Founder
              </span>
            </div>
          </div>
          <div className="flex flex-col grow rounded-[12px] overflow-hidden">
            <Image
              width={0}
              layout="responsive"
              height={0}
              src="/assets/1.png"
              alt=""
              style={{
                width: "100%",
                height: "224px",
                objectFit: "cover",
              }}
            />
            <div className="p-[24px] flex flex-col bg-[#E0E4FC] w-full">
              <span className="text-[24px] leading-[140%] font-bold text-[#1D2130]">
                Jack Newman
              </span>
              <span className="text-[#1D2130] text-[16px] leading-[150%]">
                CEO
              </span>
            </div>
          </div>
          <div className="flex flex-col grow rounded-[12px] overflow-hidden">
            <Image
              width={0}
              layout="responsive"
              height={0}
              src="/assets/ladysmile.png"
              alt=""
              style={{
                width: "100%",
                height: "224px",
                objectFit: "cover",
              }}
            />
            <div className="p-[24px] flex flex-col bg-[#E0E4FC] w-full">
              <span className="text-[24px] leading-[140%] font-bold text-[#1D2130]">
                Sarina Martins
              </span>
              <span className="text-[#1D2130] text-[16px] leading-[150%]">
                Marketing
              </span>
            </div>
          </div>
          <div className="flex flex-col grow rounded-[12px] overflow-hidden">
            <Image
              width={0}
              layout="responsive"
              height={0}
              src="/assets/guy.png"
              alt=""
              style={{
                width: "100%",
                height: "224px",
                objectFit: "cover",
              }}
            />
            <div className="p-[24px] flex flex-col bg-[#E0E4FC] w-full">
              <span className="text-[24px] leading-[140%] font-bold text-[#1D2130]">
                Spenser Wright
              </span>
              <span className="text-[#1D2130] text-[16px] leading-[150%]">
                Project management
              </span>
            </div>
          </div>
          <div className="flex flex-col grow rounded-[12px] overflow-hidden">
            <Image
              width={0}
              layout="responsive"
              height={0}
              src="/assets/5.png"
              alt=""
              style={{
                width: "100%",
                height: "224px",
                objectFit: "cover",
              }}
            />
            <div className="p-[24px] flex flex-col bg-[#E0E4FC] w-full">
              <span className="text-[24px] leading-[140%] font-bold text-[#1D2130]">
                Caroline Ming
              </span>
              <span className="text-[#1D2130] text-[16px] leading-[150%]">
                Sales
              </span>
            </div>
          </div>
          <div className="flex flex-col grow rounded-[12px] overflow-hidden">
            <Image
              width={0}
              layout="responsive"
              height={0}
              src="/assets/man-wearing-blue-crew-neck-t-shirt-2379005.png"
              alt=""
              style={{
                width: "100%",
                height: "224px",
                objectFit: "cover",
              }}
            />
            <div className="p-[24px] flex flex-col bg-[#E0E4FC] w-full">
              <span className="text-[24px] leading-[140%] font-bold text-[#1D2130]">
                Anna Mills
              </span>
              <span className="text-[#1D2130] text-[16px] leading-[150%]">
                Sales
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[24px] pt-[38px] pb-[120px]">
        <h2 className="flex flex-col items-center text-[#1D2130] leading-[110%] text-[56px] font-bold">
          <span>Are you ready to grow your</span>
          <span>business with us?</span>
        </h2>
        <p className="text-center text-[#1D2130] leading-[150%] text-[16px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
        <button className="outline-none border-none min-h-[56px] w-[173px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]">
          View Pricing
        </button>
      </div>
    </>
  );
};
