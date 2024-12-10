"use client";
import Image from "next/image";
import Link from "next/link";

import {
  faFilm,
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
  date: string;
  title: string;
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

function SingleVideo(props: props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // delaySimulator(2000).then(() => setLoading(false));
    setLoading(false);
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
      <div className="flex flex-col gap-10">
        <div className="font-IRANSansWeb font-bold flex gap-3">
          <div className="flex justify-between gap-2 w-full">
            <p className="text-right">{props.title}</p>
            <FontAwesomeIcon icon={faFilm} size="xl" />
          </div>

        </div>
        <div className="flex justify-between font-IRANSansWeb px-1">
          <div>سخنرانی</div>
          <div className="flex gap-2 items-center">
            {convertToPersianNumbers(props.date)}
            <FontAwesomeIcon icon={faCalendarAlt} size="xl" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SingleVideo;
