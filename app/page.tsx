"use client";
import Image from "next/image";
import { useState } from "react";
import NavBar from "@/components/nav/NavBar";
import VeergeAssist from "@/components/VeergeAssist";
import Overview from "@/components/overview/Overview";
import ListingOverview from "@/components/overview/ListingOverview.tsx";
import Outstanding from "@/components/overview/Outstanding";
import TopSelling from "@/components/overview/TopSelling";

export default function Home() {
  return (
    <div className="bg-[#e4e4e4]/10 w-full m-auto h-full">
      <NavBar />
      <div className="max-w-[1500px] w-full m-auto">
        <div className="w-full flex items-center mt-8 px-8">
          <div className="flex items-center flex flex-col w-fit">
            <div className="flex items-center justify-start gap-2 w-full">
              <Image alt="hi" src="/hand.png" width="30" height="30" />
              <p className="font-bold text-lg">Hi Ahmed</p>
            </div>
            <p className="text-sm mt-2">Welcome to your dashboard</p>
          </div>
        </div>

        <Overview />
        <div className="flex justify-center gap-6 mt-8">
          <ListingOverview />
          <Outstanding />
          <TopSelling />
        </div>
        <div className="w-full flex justify-center my-6">
          <div className="h-5 flex items-center gap-2 relative">
            <svg
              className="w-4 h-4 overflow-visible"
              style={{}}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6673 5.616V4.66667C12.6673 3.42899 12.1757 2.242 11.3005 1.36684C10.4253 0.491665 9.23833 0 8.00065 0C6.76297 0 5.57599 0.491665 4.70082 1.36684C3.82565 2.242 3.33398 3.42899 3.33398 4.66667V5.616C2.74022 5.87514 2.23485 6.30168 1.87965 6.84347C1.52445 7.38527 1.33484 8.01882 1.33398 8.66667V12.6667C1.33504 13.5504 1.68657 14.3976 2.31146 15.0225C2.93636 15.6474 3.78359 15.9989 4.66732 16H11.334C12.2177 15.9989 13.0649 15.6474 13.6898 15.0225C14.3147 14.3976 14.6663 13.5504 14.6673 12.6667V8.66667C14.6665 8.01882 14.4768 7.38527 14.1217 6.84347C13.7665 6.30168 13.2611 5.87514 12.6673 5.616ZM4.66732 4.66667C4.66732 3.78261 5.01851 2.93477 5.64363 2.30964C6.26875 1.68452 7.1166 1.33333 8.00065 1.33333C8.88471 1.33333 9.73255 1.68452 10.3577 2.30964C10.9828 2.93477 11.334 3.78261 11.334 4.66667V5.33333H4.66732V4.66667ZM13.334 12.6667C13.334 13.1971 13.1233 13.7058 12.7482 14.0809C12.3731 14.456 11.8644 14.6667 11.334 14.6667H4.66732C4.13688 14.6667 3.62818 14.456 3.2531 14.0809C2.87803 13.7058 2.66732 13.1971 2.66732 12.6667V8.66667C2.66732 8.13623 2.87803 7.62753 3.2531 7.25245C3.62818 6.87738 4.13688 6.66667 4.66732 6.66667H11.334C11.8644 6.66667 12.3731 6.87738 12.7482 7.25245C13.1233 7.62753 13.334 8.13623 13.334 8.66667V12.6667Z"
                fill="#919191"
              />
              <path
                d="M8.00065 9.33301C7.82384 9.33301 7.65427 9.40325 7.52925 9.52827C7.40422 9.65329 7.33398 9.82286 7.33398 9.99967V11.333C7.33398 11.5098 7.40422 11.6794 7.52925 11.8044C7.65427 11.9294 7.82384 11.9997 8.00065 11.9997C8.17747 11.9997 8.34704 11.9294 8.47206 11.8044C8.59709 11.6794 8.66733 11.5098 8.66733 11.333V9.99967C8.66733 9.82286 8.59709 9.65329 8.47206 9.52827C8.34704 9.40325 8.17747 9.33301 8.00065 9.33301Z"
                fill="#919191"
              />
            </svg>
            <p className="text-gray-400 text-right">
              End-to-end encryption
            </p>
          </div>
        </div>
        <VeergeAssist />
      </div>
    </div>
  );
}
