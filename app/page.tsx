import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <img
        src="https://app.ktern.com/assets/images/ktern.PNG"
        className="text-5xl font-bold mb-24"
      />

      <div>
        <div>
          <div>
            {/* Sun Icons */}
            <h2>Examples</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
