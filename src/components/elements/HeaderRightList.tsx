import Sun from "@/assets/icons/Sun";

type HeaderRightListProps = {
  className?: string;
};

const HeaderRightList: React.FC<HeaderRightListProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex items-center">
        <Sun
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          className="size-8 transition-transform duration-300 ease-in-out hover:rotate-45 hover:text-primary hover:transition-all"
        />
      </div>
    </div>
  );
};

export default HeaderRightList;
