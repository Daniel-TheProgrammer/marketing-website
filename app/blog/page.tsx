
import Image from "next/image";
import Link from "next/link";
export default function Blog(){
    return (
      <>
        <div className="py-[120px] flex flex-col gap-[48px] items-center">
          <div className="flex flex-col gap-[24px] items-center">
            <h3 className="text-[#1D2130] text-[56px] leading-[110%] font-bold ">
              Read our latest blogs
            </h3>
            <p className="text-[#1D2130] leading-[150%] text-[18px] flex flex-col items-center">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros
              </span>
              <span>
                elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor.
              </span>
            </p>
          </div>
          <div className="container mx-auto border-[1px] border-[#D8D8D8] p-[64px] flex gap-[24px] rounded-[24px] items-center">
            <div className="w-[50%] flex flex-col">
              <small className="insights text-[24px] leading-[120%] font-bold">
                Trending Post
              </small>
              <h2 className="text-[#1D2130] leading-[120%] font-bold text-[48px] mt-[23px]">
                New invoicing features to help you get paid faster
              </h2>
              <p className="mt-[24px] mb-[32px] text-[#6D6E76] text-[16px] leading-[120%]">
                Over the past few months, we{"'"}ve added several new features
                to SaaS Invoicing to help any business get paid faster and
                streamline their collection workflows.
              </p>
              <small className="text-[16px] leading-[150%] font-medium text-[#1D2130]">
                Luke Matthews l November 8, 2021
              </small>
            </div>
            <div className="w-[50%] shrink-0 relative">
              <Image
                src="/assets/ppleworking.png"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <div className="pt-[40px] pb-[120px]">
          <div className="container mx-auto flex flex-col gap-[54px]">
            <h2 className="leading-[110%] text-[56px] text-[#1D2130] text-center font-bold">
              All posts
            </h2>
            <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[64px]">
              {AllPosts.map((post, index) => {
                return (
                  <Link
                    className="no-underline flex flex-col"
                    key={index}
                    href={`/blog/${post.title}`}
                  >
                    <Image
                      src={`${post.image}`}
                      alt=""
                      width={0}
                      height={0}
                      layout="responsive"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex flex-col mt-[21px] gap-[21px]">
                      <h5 className="text-[#1D2130] text-[24px] leading-[140%] font-bold">
                        {post.title}
                      </h5>
                      <p className="text-[16px] text-[#1D2130] leading-[150%] ">
                        {post.content}
                      </p>
                      <span className="text-[#1D2130] leading-[150%] text-[16px]">
                        {post.authorDate}
                      </span>
                    </div>
                  </Link>
                );
              })}
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

const AllPosts = [
  {
    image: "/assets/b1.png",
    title: "7 Automation use cases that foster excellent CX",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
  {
    image: "/assets/b2.png",
    title: "10 Customer Retention Strategies for better Dwell time",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
  {
    image: "/assets/b3.png",
    title: "Managing Rails application secrets with encrypted credentials",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
  {
    image: "/assets/b4.png",
    title: "Account-based marketing: Data-driven selection for ABM success",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
  {
    image: "/assets/b5.png",
    title: " How to Calculate Your SaaS Gross Margin",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
  {
    image: "/assets/b6.png",
    title: " How to Calculate Your SaaS Gross Margin",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
  {
    image: "/assets/b7.png",
    title: "How to Make Data-driven Pricing Decisions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
  {
    image: "/assets/b8.png",
    title: "How to Make Recurring Invoicing More Efficient",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
  {
    image: "/assets/b9.png",
    title: "How to Reduce Checkout Abandonment for more Conversions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    authorDate: "Luke Matthews l  November 8, 2021",
  },
];
