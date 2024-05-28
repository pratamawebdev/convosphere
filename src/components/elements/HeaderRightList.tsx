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
          className="size-6"
        />
      </div>
    </div>
  );
};

export default HeaderRightList;
