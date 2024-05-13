import Image from "next/image";

export const Features = ({ page }: { page?: string }) => {
  return (
    <>
      <div className="flex flex-col py-[120px] container mx-auto gap-[48px]">
        <h3 className="text-[#000] text-[48px] font-bold leading-[120%] text-center">
          Features
        </h3>
        <div className="w-full flex gap-[70px] p-[64px] rounded-[24px] bg-[rgba(215,152,225,0.15)]">
          <div className="flex  flex-col gap-[20px]">
            <Image src="/assets/encrypt.png" alt="" width={56} height={56} />
            <h4 className="text-[#1D2130] text-[36px] font-bold leading-[120%]">
              Advanced 256-bit encryption
            </h4>
            <p className="text-[#1D2130] text-[18px] leading-[150%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <Image src="/assets/Icon@1x.png" alt="" width={56} height={56} />
            <h4 className="text-[#1D2130] text-[36px] font-bold leading-[120%]">
              Simple collaboration tools
            </h4>
            <p className="text-[#1D2130] text-[18px] leading-[150%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <Image src="/assets/Ai.png" alt="" width={56} height={56} />
            <h4 className="text-[#1D2130] text-[36px] font-bold leading-[120%]">
              Customizable AI features
            </h4>
            <p className="text-[#1D2130] text-[18px] leading-[150%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>
        </div>
      </div>
      { page !== 'product' && (
      <div className="flex flex-col items-center gap-[48px] py-[120px] container mx-auto">
        <h3 className="text-[#1d2130] text-[48px] font-bold leading-[120%] flex flex-col items-center">
          <span>The stunning results our</span>
          <span>customers have experienced</span>
        </h3>
        <div className="w-full flex items-center gap-[24px]">
          <div className="border-[2px] border-[rgba(97,153,237,0.26)] rounded-[24px] flex flex-col gap-[12px] items-center p-[64px]">
            <p className="text-[18px] leading-[150%] text-[#1D2130] text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Image
              src="/assets/bearded-man-in-black-leather-jacket-3775534.png"
              alt=""
              width={56}
              height={56}
            />
            <p className="leading-[150%] text-[20px] text-center text-[#1D2130]">
              Ron Wood
            </p>
            <small className="text-[12px] leading-[18px] text-[#1D2130]">
              CEO
            </small>
          </div>
          <div className="border-[2px] border-[rgba(97,153,237,0.26)] rounded-[24px] flex flex-col gap-[12px] items-center p-[64px]">
            <p className="text-[18px] leading-[150%] text-[#1D2130] text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Image
              src="/assets/photography-of-a-guy-wearing-green-shirt-1222271.png"
              alt=""
              width={56}
              height={56}
            />
            <p className="leading-[150%] text-[20px] text-center text-[#1D2130]">
              Mark Mason
            </p>
            <small className="text-[12px] leading-[18px] text-[#1D2130]">
              MArketing Manager
            </small>
          </div>
          <div className="border-[2px] border-[rgba(97,153,237,0.26)] rounded-[24px] flex flex-col gap-[12px] items-center p-[64px]">
            <p className="text-[18px] leading-[150%] text-[#1D2130] text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Image
              src="/assets/bearded-man.png"
              alt=""
              width={56}
              height={56}
            />
            <p className="leading-[150%] text-[20px] text-center text-[#1D2130]">
              Sam Preston
            </p>
            <small className="text-[12px] leading-[18px] text-[#1D2130]">
              CTO
            </small>
          </div>
        </div>
      </div>)}
      <div className="flex flex-col items-center gap-[24px] pt-[38px] pb-[120px]">
        <h2 className="flex flex-col items-center text-[#1D2130] leading-[110%] text-[56px]">
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
