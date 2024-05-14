import { MessageBoxIcon, Phone, EmailIcon1 } from "../components/icons";

export default function Contact() {
  return (
    <>
      <div className="pt-[119px] pb-[136px]">
        <h2 className="text-[56px] leading-[110%] font-bold text-[#1D2130] text-center mb-[48px]">
          Get in touch with us
        </h2>
        <div className="mx-auto container bg-[#F0F2FE] rounded-[24px] p-[64px] flex flex-col gap-[32px]">
          <h4 className="text-[#1D2130] leading-[120%] font-bold text-[36px]">
            Drop us a message
          </h4>
          <span className="text-[#1D2130] leading-[150%] text-[18px]">
            We will get back to you soon as possible
          </span>
          <div className="flex gap-[148px]">
            <div className="flex flex-col grow gap-[16px]">
              <div className="flex gap-[16px]">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-white rounded-[8px] border-none owuline-none grow py-[18px] px-[24px]"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="bg-white rounded-[8px] border-none owuline-none grow py-[18px] px-[24px]"
                />
              </div>
              <input
                type="text"
                placeholder="Work Email"
                className="bg-white rounded-[8px] border-none owuline-none grow py-[18px] px-[24px]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-white rounded-[8px] border-none owuline-none grow py-[18px] px-[24px]"
              />
              <textarea className="bg-white rounded-[8px] border-none owuline-none grow py-[18px] px-[24px] h-[148px]"></textarea>
              <button className="outline-none border-none min-h-[56px] w-full items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]">
                send
              </button>
            </div>
            <div className="basis-[300px] shrink-0 flex flex-col gap-[36px] mt-[36px]">
              <div className="flex  gap-[24px]">
                <Phone />
                <div className="flex flex-col justify-between">
                  <span className="text-[#1D2130] text-[24px] leading-[140%] font-bold">
                    + 1800 145 276
                  </span>
                  <span className="text-[#1D2130] text-[16px] leading-[150%]">
                    Free support
                  </span>
                </div>
              </div>
              <div className="flex  gap-[24px]">
                <EmailIcon1 />
                <div className="flex flex-col justify-between">
                  <span className="text-[#1D2130] text-[24px] leading-[140%] font-bold">
                    finsweet@gmail.com
                  </span>
                  <span className="text-[#1D2130] text-[16px] leading-[150%]">
                    Help Email support
                  </span>
                </div>
              </div>
              <div className="flex  gap-[24px]">
                <MessageBoxIcon />
                <div className="flex flex-col justify-between">
                  <span className="text-[#1D2130] text-[24px] leading-[140%] font-bold">
                    sales@finsweet.com
                  </span>
                  <span className="text-[#1D2130] text-[16px] leading-[150%]">
                    Sales Enquiry
                  </span>
                </div>
              </div>
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
}
