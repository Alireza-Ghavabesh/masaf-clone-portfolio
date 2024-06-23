"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSignInAlt,
  faSignOut,
  faTimes,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Search from "../search/search";
import MasafLogo from "@/public/svgs/header/masaf.ad4a5f49.svg";
import montakhab from "@/public/svgs/header/navbarIcons/montakhab.svg";
import sokhanrani from "@/public/svgs/header/navbarIcons/sokhanrani.svg";
import clipha from "@/public/svgs/header/navbarIcons/clipha.svg";
import galleryMarasem from "@/public/svgs/header/navbarIcons/galleryMarasem.svg";
import twiitha from "@/public/svgs/header/navbarIcons/twiitha.svg";
import etelaResani from "@/public/svgs/header/navbarIcons/etelaResani.svg";
import darbarema from "@/public/svgs/header/navbarIcons/darbarema.svg";
import vahedha from "@/public/svgs/header/navbarIcons/vahedha.svg";

function Header() {
  const { data: session, status } = useSession();
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <header className="bg-white font-IranYekanWebBold">
      <div>
        <nav className="lg:hidden">
          <div className="flex justify-between p-2">
            <div className="w-36 whitespace-nowrap h-14">
              {status === "unauthenticated" && (
                <Link
                  className="w-full h-full border font-IranYekanWebBold flex items-center justify-between px-2 gap-1 rounded-lg"
                  href={"/auth/login"}
                >
                  <div>ورود و ثبت نام</div>
                  <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
              )}

              {status === "authenticated" && (
                <button
                  onClick={() => signOut({ callbackUrl: "/auth/login" })}
                  className="justify-center w-full h-full border font-IranYekanWebBold flex items-center gap-1 px-1 rounded-lg"
                >
                  <div>خروج</div> <FontAwesomeIcon icon={faSignOut} />
                </button>
              )}

              {status === "loading" && (
                <div className="bg-gray-400 rounded-2xl animate-pulse w-full h-full"></div>
              )}
            </div>

            <Link href={"/"}>
              <Image src={MasafLogo} alt="" width={137} height={47} />
            </Link>
            <button onClick={toggleHidden}>
              <FontAwesomeIcon icon={faBars} size="2xl" className="mr-1" />
            </button>
          </div>
          <hr />
          <Search />
          {isHidden ? null : (
            <div
              className="fixed inset-0 bg-[#7CA8B0] opacity-50 z-[998]"
              onClick={toggleHidden}
            />
          )}
          <ul
            dir="rtl"
            className={`${
              isHidden ? "-right-full" : "right-0"
            } top-0 z-[999] fixed w-9/12 h-screen bg-white transition-all duration-300 ease-in-out
            p-5 flex flex-col border-l-4`}
          >
            <li className="flex justify-between">
              <Image src={MasafLogo} alt="" width={137} height={47} />
              <button onClick={toggleHidden}>
                <FontAwesomeIcon icon={faTimes} size="xl" className="mr-1" />
              </button>
            </li>
            <hr className="my-3" />
            <div className="flex flex-col gap-8">
              <Link
                onClick={toggleHidden}
                href={"/vahedha"}
                className="flex gap-2"
              >
                <Image src={vahedha} alt="" width={19} height={20} />
                <li>منتخب مطالب واحد ها</li>
              </Link>
              <Link
                onClick={toggleHidden}
                href={"/sokhanraniha"}
                className="flex gap-2"
              >
                <Image src={sokhanrani} alt="" width={19} height={20} />
                <li>سخنرانی ها</li>
              </Link>
              <Link
                onClick={toggleHidden}
                href={"/clipha"}
                className="flex gap-2"
              >
                <Image src={clipha} alt="" width={19} height={20} />
                <li>کلیپ ها</li>
              </Link>
              <Link
                onClick={toggleHidden}
                href={"/marasemha"}
                className="flex gap-2"
              >
                <Image src={galleryMarasem} alt="" width={19} height={20} />
                <li>گالری مراسم</li>
              </Link>
              <Link
                onClick={toggleHidden}
                href={"/twittha"}
                className="flex gap-2"
              >
                <Image src={twiitha} alt="" width={19} height={20} />
                <li>توییت ها</li>
              </Link>
              <Link
                onClick={toggleHidden}
                href={"/etelaresani"}
                className="flex gap-2"
              >
                <Image src={etelaResani} alt="" width={19} height={20} />
                <li>اطلاع رسانی</li>
              </Link>
              <Link
                onClick={toggleHidden}
                href={"/darbarema"}
                className="flex gap-2"
              >
                <Image src={darbarema} alt="" width={19} height={20} />
                <li>درباره ما و تماس با ما</li>
              </Link>
            </div>
            <hr className="my-3" />
            <div className="flex gap-2 font-bold">
              <Image src={vahedha} alt="" width={19} height={20} />
              <div className="font-bold font-IRANSansWeb">واحد ها</div>
            </div>
            <hr className="my-3" />
          </ul>
        </nav>
        <nav className="hidden lg:flex flex-col gap-2 container mx-auto">
          <div className="flex gap-2 w-full justify-between p-4 items-center">
            {status === "unauthenticated" && (
              <Link
                className="hover:border-2 border font-IranYekanWebBold h-fit my-auto px-3 flex items-center gap-1 py-2 rounded-lg"
                href={"/auth/login"}
              >
                <div className="whitespace-nowrap">ورود و ثبت نام</div>
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            )}

            <div className="flex gap-2 h-10">
              {status === "authenticated" && (
                <button
                  onClick={() => signOut({ callbackUrl: "/auth/login" })}
                  className="w-24 whitespace-nowrap hover:border-2 border font-IranYekanWebBold h-full my-auto px-3 flex items-center gap-3 py-2 rounded-lg"
                >
                  <div>خروج</div> <FontAwesomeIcon icon={faSignOut} />
                </button>
              )}

              {status === "authenticated" && (
                <Link
                  className="w-10 hover:border-2 border font-IranYekanWebBold h-full my-auto px-3 flex items-center gap-1 py-2 rounded-lg"
                  href={"/dashboard/etelaatkarbari"}
                >
                  <FontAwesomeIcon icon={faUserAlt} />
                </Link>
              )}

              {status === "loading" && (
                // <button className="whitespace-nowrap hover:border-2 border font-IranYekanWebBold h-fit my-auto px-3 flex items-center gap-3 py-2 rounded-lg"></button>
                <div className="bg-gray-400 rounded-lg animate-pulse w-36 h-10"></div>
              )}
            </div>

            <div className="flex gap-2">
              <Search />
              <Image src={MasafLogo} alt="" width={137} height={47} />
            </div>
          </div>

          <ul className="flex gap-2 justify-end pr-4 w-full container pb-4">
            <div className="flex gap-4 whitespace-nowrap">
              <Link
                href={"/darbarema"}
                className="flex gap-2 items-center cursor-pointer hover:opacity-50"
              >
                <li>درباره ما و تماس با ما</li>
                <Image src={darbarema} alt="" width={19} height={20} />
              </Link>
              <Link
                href={"/etelaresani"}
                className="flex gap-2 items-center cursor-pointer hover:opacity-50"
              >
                <li>اطلاع رسانی</li>
                <Image src={etelaResani} alt="" width={19} height={20} />
              </Link>
              <Link
                href={"/twittha"}
                className="flex gap-2 items-center cursor-pointer hover:opacity-50"
              >
                <li>توییت ها</li>
                <Image src={twiitha} alt="" width={19} height={20} />
              </Link>
              <Link
                href={"/marasemha"}
                className="flex gap-2 items-center cursor-pointer hover:opacity-50"
              >
                <li>گالری مراسم</li>
                <Image src={galleryMarasem} alt="" width={19} height={20} />
              </Link>
              <Link
                href={"/clipha"}
                className="flex gap-2 items-center cursor-pointer hover:opacity-50"
              >
                <li>کلیپ ها</li>
                <Image src={clipha} alt="" width={19} height={20} />
              </Link>
              <Link
                href={"/sokhanraniha"}
                className="flex gap-2 items-center cursor-pointer hover:opacity-50"
              >
                <li>سخنرانی ها</li>
                <Image src={sokhanrani} alt="" width={19} height={20} />
              </Link>
              <Link
                href={"/vahedha"}
                className="flex gap-2 items-center cursor-pointer hover:opacity-50"
              >
                <li>منتخب مطالب واحد ها</li>
                <Image src={vahedha} alt="" width={19} height={20} />
              </Link>
            </div>
            <div className="opacity-35">|</div>
            <button className="whitespace-nowrap flex gap-2 items-center cursor-pointer">
              <div>واحد ها</div>
              <Image src={vahedha} alt="" width={19} height={20} />
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
