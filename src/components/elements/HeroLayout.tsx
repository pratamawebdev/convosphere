import Image from "next/image";
import dynamic from "next/dynamic";
import { HeroCardProps } from "@/types";
import { Suspense } from "react";

const DynamicHeroCard = dynamic(() => import("./HeroCard"), {
  loading: () => <p>Loading...</p>,
});

type HeroLayoutProps = HeroCardProps & {
  heroImage: string;
};

const HeroLayout: React.FC<HeroLayoutProps> = (props) => {
  const { badge, title, name, date, avatar, heroImage } = props;
  return (
    <section className="w-full pt-8 pb-16 relative">
      <div className="relative w-full h-[800px] rounded-[12px]">
        <Suspense fallback={<p>Loading...</p>}>
          <Image
            src={heroImage}
            fill
            alt="hero"
            className="object-cover w-full rounded-[12px]"
            priority
          />
        </Suspense>
        <DynamicHeroCard
          badge={badge}
          title={title}
          name={name}
          date={date}
          avatar={avatar}
        />
      </div>
    </section>
  );
};

export default HeroLayout;
