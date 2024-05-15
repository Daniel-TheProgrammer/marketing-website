import Image from "next/image";
import Link from "next/link";

export default function BlogDetail (){
    return (
      <>
        <div className="flex py-[120px] flex-col">
          <h2 className="flex flex-col text-[#1D2130] font-bold leading-[120%] items-center text-[48px] mb-[24px]">
            <span>New invoicing features to help you</span>
            <span>get paid faster</span>
          </h2>
          <p className="text-center font-medium text-[#1D2130]  text-[16px]">
            Luke Matthews l November 8, 2021
          </p>
          <div className="mt-[64px] mx-auto container">
            <Image
              src="/assets/Main image (1).png"
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
        <div className="pt-[40px] pb-[120px] mx-auto container flex flex-col gap-[23px]">
          <h1 className="text-[48px] leading-[120%] text-[#1D2130] font-bold">
            This is a blog post headline
          </h1>
          <p className="text-[16px] leading-[150%] text-[#1D2130]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <p className="text-[16px] leading-[150%] text-[#1D2130]">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
          <h3 className="font-bold leading-[120%] text-[36px] text-[#1D2130]">
            This is a small blog post headline
          </h3>
          <p className="text-[16px] leading-[150%] text-[#1D2130]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <p className="text-[18px] pl-[16px] relative leading-[150%] text-[#1D2130]">
            <div className="absolute left-0 top-0 h-full w-[7px] bg-[#E0E4FC]"></div>
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante.
          </p>
          <p className="text-[16px] leading-[150%] text-[#1D2130]">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
        </div>
        <div className="pt-[40px] pb-[120px]">
          <div className="container mx-auto flex flex-col gap-[54px]">
            <h2 className="leading-[110%] text-[56px] text-[#1D2130] text-center font-bold">
              Read more posts
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

 
];