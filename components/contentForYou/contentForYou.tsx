"use client";
import Image from "next/image";
import Link from "next/link";

import {
  faFileAlt,
  faPlay,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertToPersianNumbers, delaySimulator } from "@/utils/utils";
import { useEffect, useState } from "react";

type props = {
  href: string;
  src: string;
  desc: string;
  desc2: string;
  date: string;
  categoryTitle: string;
  categoryImageSrc: string;
};

function SkeletonLoader() {
  return (
    <>
      <div className="flex flex-col gap-1 animate-pulse bg-gray-400 rounded-lg p-1">
        <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>

        <div className="relative animate-pulse bg-gray-200 h-44 rounded-lg items-start p-2 flex flex-col gap-1">
          <div className="w-full flex gap-1 flex-row-reverse">
            <div className="w-[10%]">
              <div className="animate-pulse bg-gray-500 w-full h-9 rounded-lg"></div>
            </div>
            <div className="w-[90%] flex flex-col gap-1">
              <div className="animate-pulse bg-gray-500 h-4 w-full rounded-md"></div>
              <div className="animate-pulse bg-gray-500 h-4 w-full rounded-md"></div>
            </div>
          </div>
          <div className="w-full flex gap-2 flex-row-reverse">
            <div className="w-[100%] flex flex-col gap-1">
              <div className="animate-pulse bg-gray-500 h-4 w-full rounded-md"></div>
            </div>
          </div>
          <div className="w-[10%] absolute bottom-0 right-0 mr-2 mb-2">
            <div className="animate-pulse bg-gray-500 w-full h-9 rounded-lg"></div>
          </div>
          <div className="w-[10%] absolute bottom-0 left-0 ml-2 mb-2">
            <div className="animate-pulse bg-gray-500 w-full h-9 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContentForYou(props: props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    delaySimulator(2000).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }
  return (
    <Link
      href={props.href}
      className="flex flex-col gap-3 bg-[#F8F8F6] p-2 rounded-lg border"
    >
      <div className="w-full h-48 relative cursor-pointer">
        <Image
          src={props.src}
          alt="سخنرانی استاد رائفی پور - مراسم دعای ندبه جلسه 35"
          width={1000}
          height={1000}
          className="object-cover h-full w-full rounded-lg"
        />
        <button className="bg-black bg-opacity-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full text-white text-xs p-3 w-10 h-10  ">
          <FontAwesomeIcon icon={faPlay} size="xl" />
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="font-IRANSansWeb font-bold flex gap-3 justify-end">
            <p dir="rtl">{props.desc}</p>
            <FontAwesomeIcon
              icon={faFileAlt}
              className="opacity-60"
              size="xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          <p className="flex justify-end pr-4 font-IranYekanWebBold">
            {props.desc2}
          </p>
          <div className="flex gap-20 justify-end font-IRANSansWeb px-1">
            <div className="flex gap-1">
              <div className="text-[13px]">{props.categoryTitle}</div>
              <Image
                src={props.categoryImageSrc}
                alt=""
                width={1000}
                height={1000}
                className="w-[22px] h-[22px] rounded"
              />
            </div>
            <div className="flex gap-2 items-center">
              {convertToPersianNumbers(props.date)}
              <FontAwesomeIcon
                icon={faCalendarAlt}
                size="xl"
                className="opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ContentForYou;
