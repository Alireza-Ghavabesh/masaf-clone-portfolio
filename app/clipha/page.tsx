"use client";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useRef } from "react";
import filterIcon from "@/public/svgs/main/filter.svg";
import Image from "next/image";
import GridSingleVideo from "@/components/singleVideo/gridSingleVideo";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getNestjsServerAdress } from "@/utils/utils";
import { postType } from "@/components.types";

function page() {

  const cursorRef = useRef(null);
  const limitRef = useRef(9);
  const [isLoading, setIsloading] = useState(false)
  const [posts, setPosts] = useState<postType[]>([]);
  const { data: session, status } = useSession();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [orderBy, setOrderBy] = useState<"mostPopular" | "oldest" | "newest">(
    "oldest"
  );
  const [searchTerm, setSearchTerm] = useState<string>("");


  const fetchPosts = async (url: string, filter: {
    cursor?: string, limit?: string, tags?: string[], orderBy?: string, searchTerm?: string, isForNextPart: boolean, category: string,
    filterFromDate?: string, filterToDate?: string,
  }) => {
    setIsloading(true);
    try {
      // await new Promise(res => setTimeout(res, 1000))

      const fd = new FormData();

      if (filter.tags) {
        if (filter.tags.length > 0) {
          filter.tags.forEach((tag, tagIndex) => {
            fd.append(`tags[${tagIndex}]`, tag);
          });
        }
      }

      if (filter.orderBy) {
        fd.append("orderBy", orderBy);
      }
      if (searchTerm) {
        fd.append("searchTerm", searchTerm);
      }

      if (filter.limit) {
        fd.append("limit", JSON.stringify(limitRef.current))
      }

      if (filter.cursor) {
        fd.append("cursor", JSON.stringify(cursorRef.current))
      }

      if(filter.category) {
        fd.append('category', filter.category)
      }


      const response = await fetch(url, {
        method: "POST",
        body: fd
      });
      const data = await response.json();

      console.log(`<the response data for ${selectedTags.length > 0 ? selectedTags[0]: ""}:`)
      console.log(data)
      console.log("<the response data>:")
    


      if (filter.isForNextPart) {
        setPosts(prevPosts => [...prevPosts, ...data]);
      } else {
        setPosts(() => [...data]);
      }



      // Update the cursor to the ID of the last fetched post
      if (data.length > 0) {
        cursorRef.current = data[data.length - 1].id;
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsloading(false);
    }

  };



  // Handle checkbox changes
  const changeFilter = (event: any) => {
    const tagName = event.target.name;
    if (event.target.checked) {
      setSelectedTags((prevTags) => [
        ...prevTags,
        tagName,
      ]);
    } else {
      setSelectedTags((prevTags) =>
        prevTags.filter((tag) => tag !== tagName)
      );
    }
  };

  const postRef = useCallback((post: any) => {
    if (post == null) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // TODO: load next posts
        fetchPosts(`${getNestjsServerAdress()}/api/postsByCursor`, {
          cursor: JSON.stringify(cursorRef.current),
          limit: JSON.stringify(limitRef.current),
          orderBy: orderBy,
          isForNextPart: true,
          tags: selectedTags,
          searchTerm: searchTerm,
          category: 'کلیپ',
        });
        console.log("last post shown")
        observer.unobserve(post)
      }
    })
    observer.observe(post)
  }, [cursorRef.current, selectedTags, searchTerm, limitRef.current])


  // Send request to server whenever filters change
  useEffect(() => {
    console.log(`selectedTags================`)
    console.log(selectedTags)
    console.log(`selectedTags================`)

    fetchPosts(`${getNestjsServerAdress()}/api/postsByCursor`, {
      limit: JSON.stringify(limitRef.current),
      isForNextPart: false,
      orderBy: orderBy,
      tags: selectedTags.length > 0 ? selectedTags : [],
      searchTerm: searchTerm,
      category: 'کلیپ',
    })

    console.log(selectedTags)

  }, [orderBy, selectedTags, searchTerm, limitRef.current]);



  return (
    <div className="container mx-auto px-6">
      <div className="flex lg:gap-2 lg:flex-row-reverse flex-col">
        <div className="mt-10 font-IranYekanWebBold whitespace-nowrap w-full lg:w-[30%]">
          <div className="border rounded-t-lg">
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2 rounded-t-lg">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="روایت عهد"
              />
              <div className="text-lg">روایت عهد ها</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="قرآن و اهل بیت"
              />
              <div className="text-lg">قرآن و اهل بیت</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="mahdaviatVaAkharezaman"
              />
              <div className="text-lg">مهدویت و آخرالزمان</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="feramasonary"
              />
              <div className="text-lg">فراماسونری و شیطان پرستی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="دشمن شناسی"
              />
              <div className="text-lg">دشمن شناسی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="farhangi"
              />
              <div className="text-lg">فرهنگی و اجتماعی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="سیاسی"
              />
              <div className="text-lg">سیاسی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="doayeNodbe"
              />
              <div className="text-lg">جلسات دعای ندبه</div>
            </div>

            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="khanevadeVaSabkZendegi"
              />
              <div className="text-lg">خانواده و سبک زندگی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2 rounded-b-lg">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="رسانه"
              />
              <div className="text-lg ">رسانه</div>
            </div>
          </div>
          <div className="mt-6 rounded-lg flex gap-2 items-center border p-1 bg-white">
            <input
              dir="rtl"
              type="text"
              className="w-full p-2 rounded-lg outline-none"
              placeholder="جستجو بر اساس کلمه"
              onInput={(e: any) => {
                setSearchTerm(() => e.target.value);
              }}
            />
            <FontAwesomeIcon
              className="text-[25px] h-full bg-white mr-1"
              icon={faSearch}
            ></FontAwesomeIcon>
          </div>
          <div className="border rounded-t-lg mt-5">
            <div dir="rtl" className="w-full bg-white rounded-t-lg p-4">
              <div className="text-lg">بازه زمانی</div>
            </div>
            <hr />
            <div
              dir="rtl"
              className="w-full bg-white p-4 flex 
          flex-col gap-2"
            >
              <div className="flex gap-2 items-center">
                <div>از تاریخ</div>
                <div className="w-full flex gap-2 border rounded-lg p-2">
                  <input type="text" className="w-full outline-none" />
                  <FontAwesomeIcon
                    className="text-[25px] h-full bg-white mr-1"
                    icon={faCalendarAlt}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>تا تاریخ</div>
                <div className="w-full flex gap-2 border rounded-lg p-2">
                  <input type="text" className="w-full outline-none" />
                  <FontAwesomeIcon
                    className="text-[25px] h-full bg-white mr-1"
                    icon={faCalendarAlt}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full">
          <div
            dir="rtl"
            className="p-4 flex justify-start font-IRANSansWeb gap-4 whitespace-nowrap"
          >
            <div className="flex gap-2 items-center">
              <Image src={filterIcon} alt="" width={19} height={20} />
              <div>مرتب سازی</div>
              <span className="h-8 mx-4 border border-gray-200"></span>
            </div>
            <div className="flex gap-3 flex-wrap justify-around items-center">
              {/* <div
                onClick={
                  () => {

                    setOrderBy(() => "mostPopular")
                  }
                }
                className="cursor-pointer hover:text-zomorod"
              >
                پربازدید ترین
              </div> */}
              <div
                onClick={() => {
                  setOrderBy(() => "newest")
                }}
                className="cursor-pointer hover:text-zomorod"
              >
                جدید ترین
              </div>
              <div
                onClick={() => {

                  setOrderBy(() => "oldest")
                }}
                className="cursor-pointer hover:text-zomorod"
              >
                قدیمی ترین
              </div>
            </div>
          </div>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 &&
              posts.map((post, postIndex) => (
                <GridSingleVideo
                  key={post.id}
                  src={`${getNestjsServerAdress()}/stream/thumbnail/${post.postThumbnail}`}
                  href={`/content/${post.id}`}
                  content={post.content}
                  date={post.jalaliDate}
                  isAdmin={session?.user.isAdmin as boolean}
                  category={post.category}
                  postId={post.id}
                  authorId={post.userId}
                  title={post.title}
                  ref={postIndex === posts.length - 1 ? postRef : undefined}
                  tags={[
                    "دشمن شناسی",
                    "سیاسی",
                    "رسانه",
                    "روایت عهد",
                  ]}
                />
              ))}

          </div>
          {isLoading && <div className="w-full text-center">loading...</div>}
        </div>
      </div>
    </div>
  );
}

export default page;
