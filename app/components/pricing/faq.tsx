"use client";

import { useState } from "react";

export const FAQS = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="pt-[160px] pb-[120px] ">
        <div className="container mx-auto flex items-start p-[64px] gap-[32px] bg-[#F0F2FE] rounded-[24px]">
          <div className="flex flex-col gap-[28px] w-[448px] shrink-0">
            <h4 className="flex flex-col text-[#1D2130] text-[48px] font-bold">
              <span>Frequestly Asked</span>
              <span>Questions</span>
            </h4>
            <p className="text-[16px] leading-[150%] text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </div>
          <div className="grow flex flex-col gap-[16px]">
            {FAQSA.map((faq, inx) => {
              return (
                <div
                  onClick={() => setIndex(inx)}
                  className="pt-[40px] px-[40px] bg-white rounded-[24px]"
                  key={index}
                  
                >
                  <div
                    style={{
                      paddingBottom: index === inx ? "40px" : "16px",
                    }}
                    className="text-[#1D2130] leading-[140%] font-bold text-[24px]"
                  >
                    {faq.question}
                  </div>
                  <div
                    style={{ display: index === inx ? "block" : "hidden" }}
                    className="text-[#1D2130] leading-[150%] text-[16px] pb-[40px]"
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const FAQSA = [
  {
    question: "How do i grow my business?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    question: "How do i contact the support",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    question: "Is a credit card required",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
];
