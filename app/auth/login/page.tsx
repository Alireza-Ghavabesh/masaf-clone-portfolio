import React from "react";
import masafLogo from '../../../public/svgs/auth/masafLogo.svg'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="flex flex-col px-3 gap-2">
      <div className="flex "></div>
      <input
        className="p-2 outline-none mt-2 border"
        dir="rtl"
        type="number"
        placeholder="شماره همراه خود را وارد کنید"
      />
      <button className="bg-[#1bd5f6] text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-green-800">
        ارسال کد
      </button>
    </div>
  );
}
