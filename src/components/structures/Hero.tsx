import React from "react";
import HeroLayout from "../elements/HeroLayout";
import { DATA_HERO } from "@/constants";

const Hero = () => {
  return (
    <HeroLayout
      badge={DATA_HERO.badge}
      title={DATA_HERO.title}
      name={DATA_HERO.name}
      date={DATA_HERO.date}
      avatar={DATA_HERO.avatar}
      heroImage={DATA_HERO.heroImage}
    />
  );
};

export default Hero;
