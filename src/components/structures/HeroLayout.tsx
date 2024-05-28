import Image from "next/image";
import HeroCard from "../elements/HeroCard";

const HeroLayout = () => {
  return (
    <section className="w-full pt-8 pb-16 relative">
      <div className="relative w-full h-[800px] rounded-[12px]">
        <Image
          src={"/images/hero.jpg"}
          fill
          alt="hero"
          className="object-cover w-full rounded-[12px]"
          priority
        />
        <HeroCard />
      </div>
    </section>
  );
};

export default HeroLayout;
