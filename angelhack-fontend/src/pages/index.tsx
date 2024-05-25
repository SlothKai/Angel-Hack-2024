import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import HomePage from "@/containers/Home";
import LoginPage from "@/containers/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // ></main>
    <main>
      <HomePage />
    </main>
  );
}
