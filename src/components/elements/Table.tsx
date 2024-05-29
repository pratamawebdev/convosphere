import { ReactNode } from "react";

interface TableProps {
  th: ReactNode;
  tr: ReactNode;
}

const Table: React.FC<TableProps> = ({ th, tr }) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr className="bg-primary">{th}</tr>
      </thead>
      <tbody>{tr}</tbody>
    </table>
  );
};

export default Table;
