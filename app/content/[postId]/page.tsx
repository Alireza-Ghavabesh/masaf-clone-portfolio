"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import imageMasaf from "@/public/jpgs/masaf.jpg";
import { convertToPersianNumbers, getNestjsServerAdress } from "@/utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import downloadIcon from "@/public/svgs/content/download.svg";
import { usePost } from "@/contexts/postContext";
import { CommentList } from "@/components/CommentList/CommentList";
import { CommentForm } from "@/components/CommentForm/CommentForm";
import { useAsyncFn } from "@/hooks/useAsync";
import { createComment } from "@/services/comments";
import { useSession } from "next-auth/react";
import { Player } from 'react-simple-player';
import ImageGallery from "react-image-gallery";
import { IconBtn } from "@/components/iconBtn/IconBtn";

import {
  addToFavoritePost
} from "@/services/posts";
import { FaHeart, FaRegHeart } from "react-icons/fa";


type singlePostStateType = {
  id: number;
  title: string;
  content: string;
  jalaliDate: string;
  score: string;
  category: string;
  authorId: number;
  videos: {
    url: string;
    audios: {
      url: string;
    }[];
  }[];
  images: {
    url: string;
  }[];
};

function page({ params }: { params: { postId: string } }) {
  const { post, rootComments, createLocalComment } = usePost();
  const [isFavorited, setIsFavorited] = useState(false);

  const imageList = post.images.map((image: any) => {
    return {
      original: `${getNestjsServerAdress()}/stream/gallery/${image.url}`,
      thumbnail: `${getNestjsServerAdress()}/stream/gallery/${image.url}`,
    }
  });

  useEffect(() => {
    if (post && post.favorites) {
      setIsFavorited(post.favorites.length > 0);
    }
  }, [post]);


  const {
    loading,
    error,
    execute: createCommentFn,
  } = useAsyncFn(createComment);

  const addToFavoritePostFn = useAsyncFn(addToFavoritePost);


  const { data: session, status } = useSession();

  function onCommentCreate(text: string) {
    return createCommentFn({
      postId: post.id,
      text: text,
      userId: session?.user.id,
    }).then(createLocalComment);
  }


  function onAddToFavorites() {
    setIsFavorited((prevIsFavorite) => !prevIsFavorite)
    addToFavoritePostFn.execute({ postId: post.id, userId: session?.user.id })
      .then((data: any) => {
        // Handle success, e.g., show a success message or update local state
        console.log(data);

        // should run LocaladdToFavoritePost()
      })
      .catch((error: any) => {
        // Handle error, e.g., show an error message
        console.error('Failed to add post to favorites:', error);
      });
  };

  const galleryRef = useRef<ImageGallery>(null); const handleImageClick = () => {
    if (galleryRef.current) {
      galleryRef.current.fullScreen();
    }
  };


  return (
    <div
      dir="rtl"
      className="flex lg:container lg:mx-auto flex-col lg:flex-row gap-4 my-10 font-IRANSansWeb lg:justify-center"
    >
      <div className="bg-white rounded-2xl border lg:w-6/12">
        <div className="font-IRANSansWeb text-2xl line-clamp-2 px-5 font-bold mt-4">
          {post.title}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between my-8 gap-5 md:gap-0 px-5">
          <div className="flex gap-2 items-center">
            <Image
              alt=""
              src={imageMasaf}
              width={1000}
              height={1000}
              className="w-20 h-20 rounded-full"
            />
            <div className="font-IRANSansWeb">{post.category}</div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 items-center font-IRANSansWeb">
              <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
              {convertToPersianNumbers(`${post.jalaliDate}`)}
            </div>
            {/* <div className="font-IRANSansWeb">
              {convertToPersianNumbers(`${post.score}`)} امتیاز
            </div> */}
            <div className="flex gap-2 p-2 border rounded-lg items-center">
              <IconBtn
                size={20}
                onClick={onAddToFavorites}
                Icon={isFavorited ? FaHeart : FaRegHeart}
                aria-label={isFavorited ? "Unlike" : "Like"} isActive={undefined} color={undefined} children={undefined}>
              </IconBtn>
              <button onClick={onAddToFavorites} className="font-IRANSansWeb">
                علاقمندی ها
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {post.videos.length > 0 && post.videos.map((video: any) => (
            <>
              <video
                width="320"
                height="240"
                controls
                preload="none"
                className="w-full px-5 mb-5"
                poster={`${getNestjsServerAdress()}/stream/thumbnail/${video.thumbnail}`}
              >
                <source
                  // src="https://cdn.masaf.ir/contents/media/video/Iran_Parcham_1080.mp4"
                  src={`${getNestjsServerAdress()}/stream/video/${video.url.replace(".mp4", "")}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* <div className="px-5 py-2 font-IRANSansWeb">
                <div className="border rounded-2xl px-5 flex flex-col gap-4 py-10">
                  <div className="flex gap-2">
                    <Image src={downloadIcon} alt="" />
                    <div>دانلود این ویدیو</div>
                  </div>
                  <div className="p-2 rounded-2xl  border flex justify-end">
                    <button className="bg-zzomorod text-white rounded-lg p-2">
                      دانلود
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="flex flex-col gap-4 mt-5 mb-20">
                {video.audios.length > 0 && video.audios.map((audio: any) => (
                  <>
                    {/* <audio controls preload="none" className="w-full px-5 mb-5">
                      <source src={`${getNestjsServerAdress()}/stream/audio/${audio.url}`} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio> */}
                    <div className="px-4 cursor-pointer" dir="ltr">
                      <Player src={`${getNestjsServerAdress()}/stream/audio/${audio.url.replace(".mp3", "")}`} height={40} />
                    </div>

                  </>
                ))}
              </div>
            </>
          ))}
        </div>


        <div className="w-full px-2 text-justify">{post.content}</div>


        <div className="border">
          <div className="px-4">
            <ImageGallery ref={galleryRef} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} items={imageList} onClick={handleImageClick} />
          </div>
        </div>



        <div className="flex gap-4 items-center font-IRANSansWeb px-5 mt-5">
          <hr className="w-full" />
          <div className="whitespace-nowrap">آیا این مطلب را دوست داشتید؟</div>
          <hr className="w-full" />
        </div>

        <div className="py-9 text-center">
          <h1 className="text-2xl font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="3"
              fill="none"
              className="inline ml-2"
              viewBox="0 0 35 3"
            >
              <path
                stroke="#3998AC"
                stroke-linecap="round"
                stroke-width="3"
                d="M1.5 1.5h31.859"
              ></path>
            </svg>
            دیدگاه شما
          </h1>
        </div>
        <div className="px-5 flex flex-col gap-2 mb-10">
          <CommentForm
            loading={loading}
            error={error}
            onSubmit={onCommentCreate}
            authStatus={status}
          />

          <div className="flex flex-col">
            <div className="flex gap-4 items-center mt-4">
              <div className="flex gap-1 whitespace-nowrap items-center">
                <div>دیدگاه ها</div>
                <div className="border rounded-full text-white bg-zzomorod px-2">
                  {convertToPersianNumbers("0")}
                </div>
              </div>
              <hr className="w-full" />
            </div>
            <section className="w-full">
              <div className="mt-4"></div>
              {rootComments != null && rootComments.length > 0 && (
                <div className="mt-4">
                  <CommentList comments={rootComments} authStatus={status} />
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-white py-5 rounded-2xl border px-5 flex flex-col gap-4">
          <h3 className="font-medium text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="3"
              fill="none"
              className="inline ml-2"
              viewBox="0 0 35 3"
            >
              <path
                stroke="#3998AC"
                stroke-linecap="round"
                stroke-width="3"
                d="M1.5 1.5h32"
              ></path>
            </svg>
            مطالب مرتبط
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <Image
                src={
                  "https://cdn.masaf.ir/contents/media/coverImage/photo_2022-11-10_11-53-50.jpg"
                }
                alt=""
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p>سخنرانی استاد رائفی پور - انقلاب اسلامی انقلاب فطرت ها</p>
                <div className="flex gap-2 items-center font-IRANSansWeb">
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                  {convertToPersianNumbers("1402/06/29")}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src={
                  "https://cdn.masaf.ir/contents/media/coverImage/Capture_pUWILS0.PNG"
                }
                alt=""
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p>سخنرانی استاد رائفی پور - انقلاب اسلامی انقلاب فطرت ها</p>
                <div className="flex gap-2 items-center font-IRANSansWeb">
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                  {convertToPersianNumbers("1402/06/29")}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src={
                  "https://cdn.masaf.ir/contents/media/coverImage/Screenshot_2023-12-12_205732.png"
                }
                alt=""
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p>سخنرانی استاد رائفی پور - انقلاب اسلامی انقلاب فطرت ها</p>
                <div className="flex gap-2 items-center font-IRANSansWeb">
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                  {convertToPersianNumbers("1402/06/29")}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src={
                  "https://cdn.masaf.ir/contents/media/coverImage/%DA%A9%D8%A7%D9%88%D8%B1_%D8%B3%D8%AE%D9%86%D8%B1%D8%A7%D9%86%DB%8C_%D8%B1%D9%85%D8%B2_%D9%88_%D8%B1%D8%A7%D8%B2_%D8%B2%D9%86%D8%AF%DA%AF%DB%8C_%D9%86%D9%88%D8%AC%D9%88%D8%A7%D9%86%DB%8C.jpg"
                }
                alt=""
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p>سخنرانی استاد رائفی پور - انقلاب اسلامی انقلاب فطرت ها</p>
                <div className="flex gap-2 items-center font-IRANSansWeb">
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                  {convertToPersianNumbers("1402/06/29")}
                </div>
              </div>
            </div>
            این بخش درحال پیاده سازی است ...
          </div>
        </div>
        <div className="bg-white py-5 rounded-2xl border px-5 flex flex-col gap-4">
          <h3 className="font-medium text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="3"
              fill="none"
              className="inline ml-2"
              viewBox="0 0 35 3"
            >
              <path
                stroke="#3998AC"
                stroke-linecap="round"
                stroke-width="3"
                d="M1.5 1.5h32"
              ></path>
            </svg>
            مطالب مناسب شما
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <Image
                src={
                  "https://cdn.masaf.ir/contents/media/coverImage/MASAF-Prof01.jpg"
                }
                alt=""
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p>ایْنَ طامِسُ آثارِ الزَّیْغِ وَالاَْهْوآءِ</p>
                <div className="flex gap-2 items-center font-IRANSansWeb">
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                  {convertToPersianNumbers("1402/06/29")}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src={
                  "https://cdn.masaf.ir/contents/media/coverImage/MASAF-Prof01.jpg"
                }
                alt=""
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p>کلیپ «انتظار، نیروی امید»</p>
                <div className="flex gap-2 items-center font-IRANSansWeb">
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                  {convertToPersianNumbers("1402/06/29")}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src={
                  "https://cdn.masaf.ir/contents/media/coverImage/MASAF-Prof01.jpg"
                }
                alt=""
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p>خانه های گنبد دار(2)</p>
                <div className="flex gap-2 items-center font-IRANSansWeb">
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
                  {convertToPersianNumbers("1402/06/29")}
                </div>
              </div>
            </div>
            این بخش درحال پیاده سازی است ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
