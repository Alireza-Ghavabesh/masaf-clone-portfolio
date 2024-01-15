import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import filterIcon from "@/public/svgs/main/filter.svg";
import Image from "next/image";
import GridSingleVideo from "@/components/singleVideo/gridSingleVideo";

function page() {
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
              <input type="checkbox" className="w-5" />
              <div className="text-lg">محبوب ترین ها</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">روایت عهد ها</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">قرآن و اهل بیت</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">مهدویت و آخرالزمان</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">فراماسونری و شیطان پرستی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">دشمن شناسی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">فرهنگی و اجتماعی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">سیاسی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">جلسات دعای ندبه</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">سازمان سری شیعه</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">ظرفیت تمدن سازی عاشورا</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">زیارت اربعین</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">مقامات زیارت عاشورا</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">جنود عقل و جهل</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">خانواده و سبک زندگی</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">چگونه گناه نکنیم</div>
            </div>
            <div dir="rtl" className="w-full bg-white p-4 flex gap-2">
              <input type="checkbox" className="w-5" />
              <div className="text-lg">رسانه</div>
            </div>
          </div>
          <div className="mt-6 rounded-lg flex gap-2 items-center border p-1 bg-white">
            <input
              dir="rtl"
              type="text"
              className="w-full p-2 rounded-lg outline-none"
              placeholder="جستجو بر اساس کلمه"
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
              <div className="cursor-pointer hover:text-zomorod">
                پربازدید ترین
              </div>
              <div className="cursor-pointer hover:text-zomorod">جدید ترین</div>
              <div className="cursor-pointer hover:text-zomorod">
                قدیمی ترین
              </div>
            </div>
          </div>
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
            <GridSingleVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
