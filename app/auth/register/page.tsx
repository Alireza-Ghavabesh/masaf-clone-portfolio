import React from "react";

function RegisterPage() {
  return (
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
  );
}

export default RegisterPage;
