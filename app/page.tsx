import Image from "next/image";
import { HeaderHero } from "./components/header";
import { Quality } from "./components/section/quality";
import { Why } from "./components/section/why";
import { Impressions } from "./components/section/impressions";

export default function Home() {
  return (
    <>
      <HeaderHero />
      <Quality  />
      <Why />
      <Impressions />
    </>
  );
}
