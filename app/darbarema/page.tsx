import React from "react";

const page = () => {
  return (
    <section
      dir="rtl"
      className="container mx-auto my-10 px-2 sm:px-8 max-w-[1336px] font-IRANSansWeb"
    >
      <div className="bg-white rounded-none md:rounded-2xl border py-8 px-5">
        <div className="py-9 text-center border-b">
          <h1 className="text-2xl font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex ml-2"
              width="35"
              height="3"
              fill="none"
              viewBox="0 0 35 3"
            >
              <path
                stroke="#3998AC"
                stroke-linecap="round"
                stroke-width="3"
                d="M1.5 1.5h31.859"
              ></path>
            </svg>
            تماس با ما موسسه مصاف ایرانیان
          </h1>
        </div>
        <div className="p-10 text-neutral-600 space-y-24 font-medium text-justify">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium mb-8">
              ارتباط از طریق&nbsp;
              <a
                className="text-blue-500 underline mr-1 hover:opacity-70"
                href="https://my.masaf.ir/r/site"
              >
                مصاف من
              </a>
            </h1>
            <p>
              شماره تماس دفتر مصاف : 75098000-021 (ساعت پاسخگویی روابط عمومی:
              "شنبه تا چهارشنبه" 9:00 تا اذان ظهر ، از یک ساعت بعد از اذان ظهر
              تا 16:30 )
            </p>
            <p>سامانه پیام کوتاه : 2000313313</p>
            <p>صندوق پستی :158751149</p>
            <p>
              جهت ارتباط مستقیم با واحدهای موسسه مصاف ابتدا در سایت ثبت نام کنید
              وتیکت ایجاد نمایید و سوال خود را بپرسید
            </p>
            <p>ارسال تیکت</p>
          </div>
          <div className="text-center">
            شما عزیزان می‌توانید نذورات و هدایای خود را به شماره کارت
            6037691990014623 و یا شماره حساب 0103555185003 و یا شماره شبا IR
            050190000000103555185003 نزد بانک صادرات ایران به نام موسسه مصاف
            ایرانیان واریز نمائید.
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
