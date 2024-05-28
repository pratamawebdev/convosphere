import { DataHeader } from "@/types";
import HeaderNavList from "./HeaderNavList";

type SidebarProps = {
  DATA_HEADER: DataHeader[];
  sidebarOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ DATA_HEADER, sidebarOpen }) => {
  return (
    <div
      className={`lg:hidden fixed top-0 z-10 flex h-full w-full md:w-[50%] flex-col justify-between bg-white px-8 pt-24 pb-10 shadow-[0-4px_12px_rgba(0,0,0,0.12)] transition-all duration-400 lg:static lg:z-auto lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-4 xl:gap-8 lg:p-0 lg:shadow-none
    ${sidebarOpen ? "right-0 md:left-0" : "-right-full md:-left-full"}`}
    >
      <HeaderNavList DATA_HEADER={DATA_HEADER} />
    </div>
  );
};

export default Sidebar;
