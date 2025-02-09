"use client";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div className="bg-gray-100 font-IranYekanWebBold">
      {/* Sidebar */}
      <div dir="rtl" className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-white w-full md:w-64 p-5 md:min-h-screen">
          <ul className="space-y-1">
            <Link
              href="/dashboard/etelaatkarbari"
              className="block p-3 rounded hover:bg-gray-200 font-IranYekanWebBold"
            >
              اطلاعات حساب کاربری
            </Link>
            <Link
              href="/dashboard/moredeAlaghe"
              className="block p-3 rounded hover:bg-gray-200 font-IranYekanWebBold"
            >
              مورد علاقه ها
            </Link>

            {session?.user.isAdmin === "true" && (
              <>
                <Link
                  href="/dashboard/uploadVideo"
                  className="block p-3 rounded hover:bg-gray-200 font-IranYekanWebBold"
                >
                  ایجاد پست جدید
                </Link>
                <Link className="block p-3 rounded hover:bg-gray-200 font-IranYekanWebBold" href={`/dashboard/myPosts/${session.user.id}`}>
                  پست های من
                </Link>
                <Link className="block p-3 rounded hover:bg-gray-200 font-IranYekanWebBold" href={`/dashboard/updateSiteContent`}>
                  بروزرسانی محتوای سایت
                </Link>
              </>
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div className="pr-4 pt-4 w-full">{children}</div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden z-10 fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg text-xl font-IranYekanWebBold"
      >
        داشبورد
      </button>
    </div>
  );
};

export default DashboardLayout;
