"use client";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import filterIcon from "@/public/svgs/main/filter.svg";
import Image from "next/image";
import GridSingleVideo from "@/components/singleVideo/gridSingleVideo";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { postStateType } from "../dashboard/myPosts/[userId]/page";

function page() {
  const [posts, setPosts] = useState<postStateType[]>([]);
  const { data: session, status } = useSession();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [orderBy, setOrderBy] = useState<"mostPopular" | "oldest" | "newest">(
    "mostPopular"
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Handle checkbox changes
  const changeFilter = (event: any) => {
    const categoryName = event.target.name;
    if (event.target.checked) {
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        categoryName,
      ]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((category) => category !== categoryName)
      );
    }
  };

  // const categorys = [
  //   "سخنرانی",
  //   "کلیپ",
  //   "گالری",
  //   "نویسا",
  //   "توییت",
  //   "اطلاع رسانی",
  // ];

  // Send request to server whenever selectedCategories change
  useEffect(() => {
    // Make your API request here using selectedCategories
    // Example: fetchPosts(selectedCategories);

    async function getPosts() {
      const fd = new FormData();

      fd.append(`categories[0]`, "گالری");

      const res = await fetch("http://localhost:8000/api/getPost", {
        body: fd,
        method: "POST",
      });

      const posts = await res.json();
      setPosts(() => posts)
      console.log(posts);
    }

    console.log(session?.user.id)
    getPosts();
  }, []);
  
  // Send request to server whenever selectedCategories change
  useEffect(() => {
    // Make your API request here using selectedCategories
    // Example: fetchPosts(selectedCategories);

    async function fetchPosts() {
      const fd = new FormData();

      selectedCategories.forEach((category, categoryIndex) => {
        fd.append(`categories[${categoryIndex}]`, category);
      });

      fd.append("orderBy", orderBy);
      fd.append("searchTerm", searchTerm);

      // console.log("Selected categories:", selectedCategories);
      // console.log(orderBy);
      // console.log(searchTerm);

      const res = await fetch("http://localhost:8000/api/getPost", {
        body: fd,
        method: "POST",
      });

      const posts = await res.json();
      setPosts(() => posts)
      console.log(posts);
    }

    // Call the fetchPosts function whenever any of the dependencies change
    if (!isFirstRender) {
      fetchPosts();
    } else {
      setIsFirstRender(() => false);
    }
  }, [selectedCategories, orderBy, searchTerm]);

  return (
    <div className="container mx-auto px-6">
      <div className="flex lg:gap-2 lg:flex-row-reverse flex-col">
        <div className="mt-10 font-IranYekanWebBold whitespace-nowrap w-full lg:w-[30%]">
          <div className="border rounded-t-lg">
            <div dir="rtl" className="w-full bg-white rounded-t-lg p-4">
              <div className="text-lg">دسته بندی</div>
            </div>
            <hr />
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="mostFavorite"
              />
              <div className="text-lg">محبوب ترین ها</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="ravayatAhd"
              />
              <div className="text-lg">روایت عهد ها</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="ghoranVaAhlbeyt"
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
                name="doshmanShenasi"
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
                name="siyasi"
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
                name="sazemanSeriShiee"
              />
              <div className="text-lg">سازمان سری شیعه</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="tamadonSaziAshora"
              />
              <div className="text-lg">ظرفیت تمدن سازی عاشورا</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="arbaeen"
              />
              <div className="text-lg">زیارت اربعین</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="maghamatZiyaratAshora"
              />
              <div className="text-lg">مقامات زیارت عاشورا</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="jonodAghlJahl"
              />
              <div className="text-lg">جنود عقل و جهل</div>
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
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="chegoneGonahNakonim"
              />
              <div className="text-lg">چگونه گناه نکنیم</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                onChange={changeFilter}
                name="resane"
              />
              <div className="text-lg">رسانه</div>
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
              <div
                onClick={() => setOrderBy(() => "mostPopular")}
                className="cursor-pointer hover:text-zomorod"
              >
                پربازدید ترین
              </div>
              <div
                onClick={() => setOrderBy(() => "newest")}
                className="cursor-pointer hover:text-zomorod"
              >
                جدید ترین
              </div>
              <div
                onClick={() => setOrderBy(() => "oldest")}
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
                  src={`http://localhost:8000/stream/thumbnail/${post.postThumbnail}`}
                  href={`/content/${post.id}`}
                  desc={post.content}
                  date={post.jalaliDate}
                  isAdmin={session?.user.isAdmin as boolean}
                  category={post.category}
                  postId={post.id}
                  authorId={post.userId}
                  title={post.title}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
