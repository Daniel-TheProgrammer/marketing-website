import Image from "next/image";
import { Section1 } from "../components/aboutus/section1";
import { Section2 } from "../components/aboutus/section2";
import { Section3 } from "../components/aboutus/section3";

export default function AboutUs(){
    return (
      <>
        <div className="pt-[119px] pb-[120px]">
          <div className="mx-auto container flex flex-col items-center">
            <h2 className="leading-[110%] font-bold text-[56px] text-[#1D2130]">
              We are proud of our products
            </h2>
            <p className="mt-[14px] mb-[64px] text-center text-[18px] leading-[150%] flex flex-col">
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </span>
              <span>
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </span>
            </p>
            <div className="flex gap-[24px] w-full">
              <div className="grow shrink-0 h-[388px] relative overflow-hidden rounded-[24px]">
                <Image
                  src="/assets/person-using-macbook-pro-3861964.png"
                  alt=""
                  fill
                  sizes="100vw"
                />
              </div>
              <div className="grow shrink-0 h-[388px] relative overflow-hidden rounded-[24px]">
                <Image
                  src="/assets/man-working-from-home-5198252.png"
                  alt=""
                  fill
                  sizes="100vw"
                />
              </div>
              <div className="grow shrink-0 h-[388px] relative overflow-hidden rounded-[24px]">
                <Image
                  src="/assets/people-working-in-front-of-the-computer-3184357.png"
                  alt=""
                  fill
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
      </>
    );
}