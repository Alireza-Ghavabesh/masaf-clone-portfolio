import React from "react";

function page() {
  return (
    <>
      <div className="p-3 mt-10 font-IranYekanWebBold">
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
        <div className="mt-6 rounded-lg">
          <input
            dir="rtl"
            type="text"
            className="w-full p-2 rounded-lg"
            placeholder="جستجو بر اساس کلمه"
          />
        </div>
      </div>
    </>
  );
}

export default page;
