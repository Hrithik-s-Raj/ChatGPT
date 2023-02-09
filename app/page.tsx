"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import {
  BoltIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="text-white  ml-[1050px] mt-5 bg-[#d84101] p-2 rounded-full login-img2 text-bold hover:bg-slate-300/50"
      >
        Signout
      </button>

      <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <img
          src="https://app.ktern.com/assets/images/ktern.PNG"
          className="font-bold mb-24 h-12 "
        />

        <div className="flex space-x-2 text-center">
          <div>
            <div className="text-black flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8 text-blue-500" />

              <h2>Examples</h2>
            </div>
            <div className="space-y-2 text-black ">
              <p className="infoText">
                "Explain quantum computing in simple terms"
              </p>
              <p className="infoText">
                "Got any creative ideas for a 10 year old’s birthday?"
              </p>
              <p className="infoText">
                "How do I make an HTTP request in Javascript?"
              </p>
            </div>
          </div>
          <div>
            <div className="text-black flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8 text-blue-500" />

              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2 text-black">
              <p className="infoText">
                "Explain quantum computing in simple terms"
              </p>
              <p className="infoText">
                "Got any creative ideas for a 10 year old’s birthday?"
              </p>
              <p className="infoText">
                "How do I make an HTTP request in Javascript?"
              </p>
            </div>
          </div>
          <div>
            <div className="text-black flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8 text-blue-500" />

              <h2>Limitations</h2>
            </div>
            <div className="space-y-2 text-black">
              <p className="infoText">
                "Explain quantum computing in simple terms"
              </p>
              <p className="infoText">
                "Got any creative ideas for a 10 year old’s birthday?"
              </p>
              <p className="infoText">
                "How do I make an HTTP request in Javascript?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
