import FaceSmile from "@/assets/icons/FaceSmile";
import React from "react";

const WebsiteIcon = () => {
  return (
    <div className="flex items-center gap-1">
      <FaceSmile
        className="lg:w-10 lg:h-10 w-9 h-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <h1 className="font-bold text-black text-3xl  hidden md:block">
        Convo<span className="text-primary">Sphere</span>
      </h1>
    </div>
  );
};

export default WebsiteIcon;
