type TitleSectionProps = {
  title: string;
};

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return <h3 className="font-bold text-black text-2xl">{title}</h3>;
};

export default TitleSection;
