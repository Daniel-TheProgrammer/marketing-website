

import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <>
      <div>
        <div className="flex container items-center mx-auto min-h-[116px] justify-between ">
          <Image src="/assets/Logo.png" alt="logo" width={140} height={48} />
          <ul className="flex items-center gap-[32px]">
            <li className="text-[#1D2130] leading-[150%]  text-[16px]">
              <Link href="/">Home </Link>
            </li>
            <li className="text-[#1D2130] leading-[150%]  text-[16px]">
              <Link href="/products">Product</Link>
            </li>
            <li className="text-[#1D2130] leading-[150%]  text-[16px]">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="text-[#1D2130] leading-[150%]  text-[16px]">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="text-[#1D2130] leading-[150%]  text-[16px]">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="text-[#1D2130] leading-[150%]  text-[16px]">
              <Link href="/contact">Contact</Link>
            </li>
            <button className="outline-none border-none min-h-[56px] w-[144px] items-center justify-center rounded-[12px] flex text-center itemss-center bg-[#1D2130] text-white leading-[150%] text-[16px]">
              Free trial
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
