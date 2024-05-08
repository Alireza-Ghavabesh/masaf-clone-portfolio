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
    <div className="mt-[10px] font-IRANSansWeb container mx-auto lg:w-[900px] pt-20 pb-40">
      <div className="flex justify-center mt-4 px-3">
        <Link
          href={"/auth/register"}
          className={`${pathName === '/auth/register' ? 'isRegister' : ''} border-b-[2px] p-2 w-full flex justify-center`}
        >
          ثبت نام
        </Link>
        <Link
          href={"/auth/login"}
          className={`${pathName === '/auth/login' ? 'isLogin' : ''} border-b-[2px] w-full p-2 flex justify-center`}
        >
          ورود به حساب کاربری
        </Link>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
