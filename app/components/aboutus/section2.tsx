import { AuthenticityIcon, Discount, EmailBox, Inventory, Marketing, Thumbsup } from "../icons";


export const Section2 = () => {
    return (
      <>
        <div className="flex flex-col items-center py-[120px]">
          <div className="flex flex-col items-center">
            <h2 className="text-[#1D2130] text-[48px] font-bold leading-[120%]">
              Our corporate values
            </h2>
            <p className="text-[16px] mt-[24px] mb-[32px] text-[#1D2130] leading-[150%]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className="grid grid-cols-3 container mx-auto px-[85px] py-[64px] bg-[#F9F0FB] bottom-0 rounded-[24px] gap-x-[24px] gap-y-[64px]">
            <div className="flex flex-col gap-[16px]">
              <Thumbsup />
              <span className="text-[#1D2130] font-bold leading-[140%] text-[24px]">
                Best in Class
              </span>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <AuthenticityIcon />
              <span className="text-[#1D2130] font-bold leading-[140%] text-[24px]">
                Authenticity
              </span>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <EmailBox />
              <span className="text-[#1D2130] font-bold leading-[140%] text-[24px]">
                Email Support
              </span>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Discount />
              <span className="text-[#1D2130] font-bold leading-[140%] text-[24px]">
                Discount Available
              </span>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Marketing />
              <span className="text-[#1D2130] font-bold leading-[140%] text-[24px]">
                Powerful Marketing 
              </span>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Inventory />
              <span className="text-[#1D2130] font-bold leading-[140%] text-[24px]">
                Inventory Management
              </span>
              <p className="text-[#1D2130] leading-[150%] text-[16px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}