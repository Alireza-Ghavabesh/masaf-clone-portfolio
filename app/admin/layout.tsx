// /auth/admin/layout.tsx
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const pathName = usePathname();
  return (
    <div className="w-full py-11 px-4">
      <div className="bg-white rounded-lg border mt-[10px] font-IRANSansWeb container mx-auto lg:w-[1300px]">
        <div className="flex justify-center">
          <Link
            href={"/admin/register"}
            className={`${
              pathName === "/admin/register" ? "isRegister" : ""
            } py-4 border-b-[2px] hover:border-b-[2px] hover:border-slate-400 w-full flex justify-center items-center`}
          >
            ثبت نام مدیر
          </Link>
          <Link
            href={"/admin/login"}
            className={`${
              pathName === "/admin/login" ? "isLogin" : ""
            } py-4 border-b-[2px] hover:border-b-[2px] hover:border-slate-400 w-full flex justify-center`}
          >
            ورود به حساب کاربری مدیر
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
