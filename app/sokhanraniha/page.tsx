import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function page() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex lg:gap-2 lg:flex-row-reverse flex-col">
        <div className="mt-10 font-IranYekanWebBold whitespace-nowrap w-full lg:w-fit">
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
        <div className="mt-10  border w-full">ss</div>
      </div>
    </div>
  );
}

export default page;
