"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="bg-[#ffff] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://app.ktern.com/assets/images/ktern.PNG"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-black font-bold text-md animate-pulse border-4 border-[#d84101] p-2 rounded-full mt-5"
      >
        Login With Google
      </button>
    </div>
  );
}

export default Login;
