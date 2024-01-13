"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSignInAlt,
  faTimes,
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
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <header className="bg-white font-IranYekanWebBold">
      <div>
        <nav className="lg:hidden">
          <div className="flex justify-between p-2">
            <button className="border font-IranYekanWebBold flex items-center gap-1 px-1 rounded-lg">
              <Link href={"/auth"}>
                <div>ورود و ثبت نام</div>
              </Link>
              <FontAwesomeIcon icon={faSignInAlt} />
            </button>
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
              <li className="flex gap-2">
                <Image src={montakhab} alt="" width={19} height={20} />
                <Link href={"#"}>منتخب مطالب واحد ها</Link>
              </li>
              <li className="flex gap-2">
                <Image src={sokhanrani} alt="" width={19} height={20} />
                <Link href={"/units?portalId=12"}>سخنرانی ها</Link>
              </li>
              <li className="flex gap-2">
                <Image src={clipha} alt="" width={19} height={20} />
                <Link href={"#"}>کلیپ ها</Link>
              </li>
              <li className="flex gap-2">
                <Image src={galleryMarasem} alt="" width={19} height={20} />
                <Link href={"#"}>گالری مراسم</Link>
              </li>
              <li className="flex gap-2">
                <Image src={twiitha} alt="" width={19} height={20} />
                <Link href={"#"}>توییت ها</Link>
              </li>
              <li className="flex gap-2">
                <Image src={etelaResani} alt="" width={19} height={20} />
                <Link href={"#"}>اطلاع رسانی</Link>
              </li>
              <li className="flex gap-2">
                <Image src={darbarema} alt="" width={19} height={20} />
                <Link href={"#"}>درباره ما و تماس با ما</Link>
              </li>
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
          <div className="flex gap-2 w-full justify-between p-4">
            <button className="border font-IranYekanWebBold h-fit my-auto px-3 flex items-center gap-1 py-2 rounded-lg">
              <Link href={"/auth"}>
                <div className="whitespace-nowrap">ورود و ثبت نام</div>
              </Link>

              <FontAwesomeIcon icon={faSignInAlt} />
            </button>
            <Link href={"/"}>
              <div className="flex gap-2">
                <Search />
                <Image src={MasafLogo} alt="" width={137} height={47} />
              </div>
            </Link>
          </div>

          <ul className="flex gap-2 justify-end pr-4 w-full container pb-4">
            <div className="flex gap-5 whitespace-nowrap">
              <li>
                <Link href={"#"}>منتخب مطالب واحد ها</Link>
              </li>
              <li>
                <Link href={"#"}>سخنرانی ها</Link>
              </li>
              <li>
                <Link href={"#"}>کلیپ ها</Link>
              </li>
              <li>
                <Link href={"#"}>گالری مراسم</Link>
              </li>
              <li>
                <Link href={"#"}>توییت ها</Link>
              </li>
              <li>
                <Link href={"#"}>اطلاع رسانی</Link>
              </li>
              <li>
                <Link href={"#"}>درباره ما و تماس با ما</Link>
              </li>
            </div>
            <div className="opacity-35">|</div>
            <button className="whitespace-nowrap flex gap-2">
              <Image src={vahedha} alt="" width={19} height={20} />
              <div>واحد ها</div>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
