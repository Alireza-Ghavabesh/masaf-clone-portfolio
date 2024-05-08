"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const pathName = usePathname();
  return (
    <div className="w-full py-11 px-4">
      <div className="bg-white rounded-lg border mt-[10px] font-IRANSansWeb container mx-auto lg:w-[1300px]">
        <div className="flex justify-center">
          <Link
            href={"/auth/register"}
            className={`${
              pathName === "/auth/register" ? "isRegister" : ""
            } py-4 border-b-[2px] hover:border-b-[2px] hover:border-slate-400 w-full flex justify-center items-center`}
          >
            ثبت نام
          </Link>
          <Link
            href={"/auth/login"}
            className={`${
              pathName === "/auth/login" ? "isLogin" : ""
            } py-4 border-b-[2px] hover:border-b-[2px] hover:border-slate-400 w-full flex justify-center`}
          >
            ورود به حساب کاربری
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
