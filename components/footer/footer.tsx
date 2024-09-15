import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import footerIcon from "@/public/svgs/footer/masaf-footer-icon.svg";
import telegramIcon from "@/public/svgs/footer/telegram-icon.svg";
import twiiterIcon from "@/public/svgs/footer/twitter.svg";
import instagramIcon from "@/public/svgs/footer/instagram-icon.svg";
import eitaIcon from "@/public/svgs/footer/eita-icon.svg";
import soroshIcon from "@/public/svgs/footer/Sorosh-icon.svg";
import rubikaIcon from "@/public/svgs/footer/rubika-icon.svg";
import callIcon from "@/public/svgs/footer/call-icon.svg";
import mailIcon from "@/public/svgs/footer/mail-icon.svg";
import { convertToPersianNumbers } from "@/utils/utils";
import masafendIcon from "@/public/svgs/footer/masaf-endFooter.svg";
function Footer() {
  return (
    <footer className="bg-[#16202A] text-white text-center px-1">
      <div className="container mx-auto px-2 sm:px-8 max-w-[1530px]">
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 py-14 border-b border-white/20">
          <div className="text-right space-y-4 font-IranYekanWebBold">
            <div className="text-xl font-semibold">ثبت نام در خبرنامه مصاف</div>
            <div dir="rtl" className="text-sm font-IRANSansWeb font-bold">
              *شما میتوانید با وارد کردن ایمیل خود از جدید ترین اخبار سایت مصاف
              مطلع شوید.
            </div>
          </div>
          <div className="flex gap-2 w-full border justify-between rounded-lg overflow-hidden p-2">
            <button className="flex font-IRANSansWeb gap-2 items-center text-sm whitespace-nowrap p-2 rounded-lg bg-[#00586A]">
              ارسال خبرنامه
              <FontAwesomeIcon icon={faEnvelope} className="opacity-60" />
            </button>
            <input
              className="bg-[#16202A] font-IRANSansWeb outline-none w-full placeholder:text-right placeholder:text-sm lg:placeholder:text-md"
              type="text"
              placeholder="پست الکترونیکی خود را وارد کنید"
            />
          </div>
        </section>
      </div>
      <div className="container mx-auto">
        <hr className="mb-10 opacity-50" />
      </div>

      <section className="container mx-auto ">
        <div className="flex gap-1 items-center justify-end pr-2 pb-2 font-IRANSansWeb">
          <div>درباره مصاف بدانیم</div>
          <Image src={footerIcon} alt="" />
        </div>
        <div
          dir="rtl"
          className="px-2 text-justify leading-7 py-9 font-IRANSansWeb"
        >
          مطالب این وبگاه با هدف روشنگری در فتنه‌های آخرالزمانی و آشنایی
          مسلمانان با موضوعات و معارف مهدوی تهیه و تدوین شده است. امیدواریم که
          این تلاش ناچیز ما در تعجیل فرج مولایمان، مهدی موعود ارواحنا فداه، مؤثر
          باشد.
        </div>
        <ul className="flex gap-2 justify-center px-2">
          <li>
            <Image
              src={telegramIcon}
              className="w-[60px] h-[60px] flex items-center justify-center bg-neutral-900 rounded-lg p-4 hover:opacity-60 transition-all duration-150"
              alt=""
            />
          </li>
          <li>
            <Image
              src={twiiterIcon}
              className="w-[60px] h-[60px] flex items-center justify-center bg-neutral-900 rounded-lg p-4 hover:opacity-60 transition-all duration-150"
              alt=""
            />
          </li>
          <li>
            <Image
              className="w-[60px] h-[60px] flex items-center justify-center bg-neutral-900 rounded-lg p-4 hover:opacity-60 transition-all duration-150"
              src={instagramIcon}
              alt=""
            />
          </li>
          <li>
            <Image
              className="w-[60px] h-[60px] flex items-center justify-center bg-neutral-900 rounded-lg p-4 hover:opacity-60 transition-all duration-150"
              src={eitaIcon}
              alt=""
            />
          </li>
          <li>
            <Image
              className="w-[60px] h-[60px] flex items-center justify-center bg-neutral-900 rounded-lg p-4 hover:opacity-60 transition-all duration-150"
              src={soroshIcon}
              alt=""
            />
          </li>
          <li>
            <Image
              className="w-[60px] h-[60px] flex items-center justify-center bg-neutral-900 rounded-lg p-4 hover:opacity-60 transition-all duration-150"
              src={rubikaIcon}
              alt=""
            />
          </li>
        </ul>
        <div className="flex flex-col text-right font-IRANSansWeb mt-5 lg:hidden">
          <ul className="pr-5 my-2">
            <li>واحدها</li>
          </ul>
          <div className="flex gap-4 justify-end pr-5">
            <ul className="flex flex-col gap-2">
              <li>سدن پوش</li>
              <li>اهل بیت مدیا</li>
              <li>مهندسی</li>
              <li>نویسا</li>
              <li>موکب مع امام منصور</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>مهدیاران</li>
              <li>قندآب</li>
              <li>برنا</li>
              <li>بین الملل</li>
              <li>نجوا</li>
            </ul>
          </div>
          <ul className="pr-5 mt-10 my-2">
            <li>صفحات</li>
          </ul>
          <div className="flex gap-4 justify-end pr-5">
            <ul className="flex flex-col gap-2">
              <li key={1}>منتخب مطالب واحد ها</li>
              <li key={2}>سخنرانی ها</li>
              <li key={3}>کلیپ ها</li>
              <li key={4}>گالری مراسم</li>
              <li key={5}>توییت ها</li>
              <li key={6}>اطلاع رسانی</li>
              <li key={7}>نظرسنجی ها</li>
              <li key={8}>دعوت از استاد</li>
              <li key={9}>درباره ما و ارتباط با ما</li>
            </ul>
          </div>
          <div className="text-xl font-IRANSansWeb font-bold mt-5 pr-5">
            ارتباط با ما
          </div>
          <div className="flex justify-between px-5 mt-4">
            <div>{convertToPersianNumbers("021-75098000")}</div>
            <div className="flex gap-2">
              <div>تلفن تماس</div>
              <Image src={callIcon} alt="" />
            </div>
          </div>
          <div className="flex justify-between px-5 mt-4 mb-4">
            <div>@masaf</div>
            <div className="flex gap-2">
              <div>آی دی ارتباطی شبکه های مجازی مصاف</div>
              <Image src={mailIcon} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <hr className="mt-5" />
      </div>

      <section className="container mx-auto flex flex-row-reverse justify-center lg:justify-between lg:gap-10 items-center font-IRANSansWeb gap-2 px-2 py-2">
        <Image src={masafendIcon} alt="" />
        <p>
          تمامی حقوق این وبگاه متعلق به مؤسسهٔ مصاف ایرانیان، بزرگ‌ترین جنبش
          سایبری کاملاً مستقل در فضای اینترنتی است.
        </p>
        <p>{convertToPersianNumbers("v.1.0.2")}</p>
      </section>
    </footer>
  );
}

export default Footer;
