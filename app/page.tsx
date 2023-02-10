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
import { signOut, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image}
          alt="Profile Picture"
          className=" absolute h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 mt-4 z-50 right-0 mr-5
      "
        />
      )}

      <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <img
          src="https://app.ktern.com/assets/images/ktern.PNG"
          className="font-bold mb-20 h-12 "
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
