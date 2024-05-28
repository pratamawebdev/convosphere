import { MouseEventHandler } from "react";

type SidebarControllerProps = {
  sidebarOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const SidebarController: React.FC<SidebarControllerProps> = ({
  sidebarOpen,
  onClick,
}) => {
  return (
    <button
      className="z-50 lg:hidden hover:shadow-lg p-1 transition-all border border-white hover:border-gray-200"
      onClick={onClick}
      aria-label="menu"
    >
      {!sidebarOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 "
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      )}
    </button>
  );
};

export default SidebarController;
