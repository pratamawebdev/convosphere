import Image from "next/image";
import CardBadge from "./CardBadge";
import { HeroCardProps } from "@/types";

const HeroCard: React.FC<HeroCardProps> = (props) => {
  const { badge, title, name, date, avatar } = props;
  return (
    <div className="bg-white w-[598px] p-10 rounded-[12px] shadow-lg border md:bottom-4 md:right-4 absolute hidden md:block lg:-bottom-16 lg:left-16">
      <div className="flex flex-col gap-4">
        <CardBadge>{badge}</CardBadge>
        <h2 className="text-black text-[36px] font-semibold">{title}</h2>
      </div>
      <div className="mt-6 flex items-center gap-5">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            width={36}
            height={36}
            alt="personal avatar"
            className="rounded-full border border-gray-300"
            loading="lazy"
          />
          <span className="text-base font-medium text-[#97989F]">{name}</span>
        </div>
        <span className="text-[#97989F] text-base font-medium">{date}</span>
      </div>
    </div>
  );
};

export default HeroCard;
