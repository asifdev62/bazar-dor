"use client"
import Link from "next/link";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-green-50 px-4 py-12">
      <div className="w-full max-w-lg text-center">
      
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-700 text-white shadow-lg shadow-green-700/20">
          <TbCurrencyTaka className="text-5xl" />
        </div>

      
        <h1 className="text-8xl font-extrabold tracking-tight text-green-700 sm:text-9xl">
          404
        </h1>

      
        <h2 className="mt-4 text-2xl font-bold text-gray-800 sm:text-3xl">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
          নাম পরিবর্তন করা হয়েছে অথবা লিংকটি ভুল।
        </p>

     
        <div className="mx-auto my-8 flex max-w-xs items-center justify-center gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
          <span className="text-5xl">🛒</span>
          <div className="text-left">
            <p className="font-bold text-gray-800">
              বাজার দর
            </p>
            <p className="mt-1 text-sm text-gray-500">
              সঠিক দামে সঠিক বাজার
            </p>
          </div>
        </div>

       
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 active:scale-95"
          >
            <FaHouse />
            হোম পেজে ফিরে যান
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-100 active:scale-95"
          >
            <FaArrowLeft />
            আগের পেজে ফিরুন
          </button>
        </div>

    
        <p className="mt-8 text-xs text-gray-400 sm:text-sm">
          <FaSearch className="mr-1 inline-block" />
          বাজার দর — প্রতিদিনের বাজারের বিশ্বস্ত ঠিকানা
        </p>
      </div>
    </main>
  );
}
