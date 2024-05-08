import React from "react";
import masafLogo from "../../../public/svgs/auth/masafLogo.svg";
import dashIcon from "../../../public/svgs/auth/dash.svg";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col px-3 gap-2 py-10">
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex justify-center mt-10">
        <Image src={masafLogo} alt="" />
        </div>
        <div className="flex gap-2 justify-center">
          <div>به مصاف خوش آمدید</div>
          <Image src={dashIcon} alt="" />
        </div>
        <div className="flex justify-center">
          جهت ورود به سایت مصاف شماره همراه / ایمیل خود را وارد کنید
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-96 gap-2">
        <input
          className="rounded-lg focus:border-1 focus:border-zzomorod p-2 outline-none mt-2 border"
          dir="rtl"
          type="text"
        />
        <button className="bg-[#1bd5f6] hover:bg-zzomorod text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-green-800">
          ورود به حساب کاربری
        </button>
        </div>
      </div>
    </div>
  );
}
