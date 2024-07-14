"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Etelaatkarbari() {
  const { data: session, status } = useSession();
  return (
    <div className="font-bold">
      <div className="text-4xl">اطلاعات حساب کاربری</div>
      <div className="flex flex-col gap-2">
      <div>نام : {session?.user.firstName}</div>
      <div>نام خانوادگی : {session?.user.lastName}</div>
        <div>ایمیل : {session?.user.email}</div>
        {session?.user.isAdmin === "true" && (
          <div>شما مدیر هستید</div>
        )}
      </div>
    </div>
  );
}

export default Etelaatkarbari;
