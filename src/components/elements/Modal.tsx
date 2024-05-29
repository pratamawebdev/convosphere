import Image from "next/image";
import React, { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, title }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl z-50 w-[90%] sm:w-[60%] md:w-[60%] lg:w-[40%] shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <Image
            src={"../images/xmark.svg"}
            alt="xmark icon"
            width={20}
            height={20}
          />
        </button>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-black text-lg">{title}</span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
