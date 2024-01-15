"use client";
import React, { useState } from "react";

function page() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="mt-[10px] font-IRANSansWeb container mx-auto lg:w-[900px] pt-20 pb-40">
      <div className="flex justify-center mt-4 px-3">
        <button
          onClick={() => {
            setIsLogin(() => true);
            setIsRegister(() => false);
          }}
          className={`${
            isLogin ? "isLogin" : ""
          } border-b-[10px] w-full p-2 flex justify-center`}
        >
          ورود
        </button>
        <button
          onClick={() => {
            setIsRegister(() => true);
            setIsLogin(() => false);
          }}
          className={`${
            isRegister ? "isRegister" : ""
          } border-b-[10px] p-2 w-full flex justify-center`}
        >
          ثبت نام
        </button>
      </div>
      {isLogin && (
        <div className="flex flex-col px-3 gap-2">
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
      )}
      {isRegister && (
        <div className="flex flex-col px-3 gap-2">
          <input
            className="p-2 outline-none mt-2 border"
            dir="rtl"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          <input
            className="p-2 outline-none border"
            dir="rtl"
            type="number"
            placeholder="شماره همراه خود را وارد کنید"
          />
          <button className="bg-[#1bd5f6] text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-green-800">
            ثبت نام و ارسال کد تایید
          </button>
        </div>
      )}
    </div>
  );
}

export default page;
