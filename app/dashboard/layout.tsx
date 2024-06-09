"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathName = usePathname();
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-2">
        <Link href={"/dashboard/etelaatkarbari"}>اطلاعات حساب کاربری</Link>
        <Link href={"/dashboard/moredeAlaghe"}>مورد علاقه ها</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
