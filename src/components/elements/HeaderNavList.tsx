"use client";

import { DataHeader } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderNavListProps {
  DATA_HEADER: DataHeader[];
  className?: string;
}

const HeaderNavList: React.FC<HeaderNavListProps> = ({
  DATA_HEADER,
  className,
}) => {
  const pathname = usePathname();
  return (
    <nav className={className}>
      <ul className="flex flex-col items-center gap-4 lg:flex-row">
        {DATA_HEADER.map((item) => {
          const active =
            item.path === "/dashboard"
              ? pathname === item.path
              : pathname.startsWith(item.path);
          return (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`px-3 py-1 text-base font-bold ${
                  active ? "text-primary" : "text-[#6D737A]"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNavList;
