import Image from "next/image";
import Link from "next/link";

import {
  faVideo,
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
  iconSrc: string;
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

function SingleSocialVideo(props: props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    delaySimulator(2000).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <Link
        href={props.href}
        className="flex flex-col gap-3 bg-black p-2 rounded-lg"
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
          <div className="font-IRANSansWeb font-bold flex gap-3 text-white">
            <p className="text-right">{props.desc}</p>
            <Image
              src={props.iconSrc}
              alt=""
              width={1000}
              height={1000}
              className="w-[51px] h-[51px] rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1 items-center font-IRANSansWeb px-1 text-white">
            <div className="flex gap-2">
              <div>رسانه</div>
              <Image
                src={props.iconSrc}
                alt=""
                width={1000}
                height={1000}
                className="w-[22px] h-[22px] rounded"
              />
            </div>
            <div className="flex gap-2 items-center text-gray-400">
              {convertToPersianNumbers(props.date)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SingleSocialVideo;
