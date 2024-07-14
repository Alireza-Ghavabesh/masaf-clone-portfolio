"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

import {
  faFilm,
  faPlay,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertToPersianNumbers, delaySimulator } from "@/utils/utils";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

type GridSingleVideoProps = {
  title: string;
  href: string;
  src: string;
  desc: string;
  date: string;
  isAdmin: boolean;
  category: string;
  postId?: number;
  authorId?: number;
};

function SkeletonLoader() {
  return (
    <>
      <div className="flex flex-col gap-1 animate-pulse bg-gray-400 p-1">
        <div className="animate-pulse bg-gray-200 h-32 "></div>
        <div className="relative animate-pulse bg-gray-200 h-44 items-start p-2 flex flex-col gap-1">
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

function GridSingleVideo(props: GridSingleVideoProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // delaySimulator(2000).then(() => setLoading(false));
    setLoading(false);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  const deletePost = async (postId: number) => {
    const fd = new FormData();
    fd.append('postId', JSON.stringify(postId));

    const res = await fetch("http://localhost:8000/api/deletePost", {
      method: "POST",
      body: fd,
      cache: 'no-cache'
    });
    
    const result = res.json()
    console.log(result)
  };

  return (
    <div className="flex flex-col p-4 bg-[#F8F8F6] border gap-2">
      <div className="w-full h-48 relative cursor-pointer">
        <Link href={props.href}>
          <Image
            src={props.src}
            alt="سخنرانی استاد رائفی پور - مراسم دعای ندبه جلسه 35"
            width={1000}
            height={1000}
            className="object-cover h-full w-full"
          />
        </Link>

        <button className="bg-black bg-opacity-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full text-white text-xs p-3 w-10 h-10  ">
          <FontAwesomeIcon icon={faPlay} size="xl" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-IRANSansWeb font-bold flex gap-3">
          <p className="text-right">{props.title}</p>
          <FontAwesomeIcon icon={faFilm} size="xl" />
        </div>
        <div className="flex justify-between font-IRANSansWeb px-1 flex-wrap gap-7 items-center">
          <div className="flex justify-between w-full">
            {session?.user.id == props.authorId && (
              <>
                <button
                  className="font-IranYekanWebBold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    router.push(`/dashboard/editPost/${props.postId}`);
                  }}
                >
                  ویرایش
                </button>
                <button
                  className="font-IranYekanWebBold bg-red-500 hover:bg-blue-gray-400 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    if (props.postId) {
                      return deletePost(props.postId);
                    }
                  }}
                >
                  حذف
                </button>
              </>
            )}
          </div>

          <div className="flex gap-2 items-center justify-between w-full">
            <div className="flex gap-2">
              {convertToPersianNumbers(props.date)}
              <FontAwesomeIcon icon={faCalendarAlt} size="xl" />
            </div>
            <div>{props.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridSingleVideo;
