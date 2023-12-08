'use client'

import Chart from "@/components/Chart";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="h-[100%] w-[1320px] px-[6%]">
      <div className="flexEnd gap-1 mt-[3rem] mb-[1rem] font-bold text-[14px] text-gray-500 mr-3">
        <Image src="/user.png" alt="profile-picture" width={20} height={20} />
        Nurse
      </div>
      <div className="bg-blue-900 h-[295px] rounded-box-lg flexCenter flex-col px-[5rem] text-center text-white">
        <Image src="/logo.png" alt="logo" width={110} height={120} className="mt-[-2%]" />
        <div className="font-bold text-[34px]">Welcome to CliniTrak!</div>
        <p className="font-medium mt-3">Your comprehensive solution for managing and tracking health records within the academic environment. Designed with the well-being of students and the efficiency of educational institutions in mind, CliniTrak offers a seamless and secure way to manage medical records, and health-related data on campus. </p>
      </div>
      <div className="grid grid-cols-5 gap-5 mt-3">
        <div className="box-title col-span-3">
            <p>Analytics</p>
          <Image src="/images/chart-histogram-dark.svg" alt="analytics" width={22} height={22} />
        </div>
        <div className="col-span-2 box-title">
          <Link href="/dashboard/messages" className="hover:font-semibold" >
            <p>Messages</p>
          </Link>
          <Image src="/images/mail-dark.svg" alt="messages" width={22} height={22} />
        </div>
        <div className="rounded-box-md flex chart-container col-span-3">
          <div className="bg-blue-500 w-2 mt-[-40px] ml-[-12px] h-[350px]"></div>
          <div className="relative inline-block h-full w-full  pl-6 pr-[4rem]">
            <p className="font-bold text-[20px] ml-2 mt-[-16px]">Statistics</p>
            <div className="flex flexEnd absolute gap-0 right-16 font-thin text-sm">
              <p id="visits" className="chart-selected chart-category">Visits</p>
            </div>
            <Chart />
          </div>
        </div>
        <div className="rounded-box-md box-container col-span-2 flex-col flex gap-1">
          <Link href="/dashboard/messages">
            <div className="message-box">
              <Image src="/man.png" alt="icon" width={45} height={45} />
              <div>
                <div className="grid grid-cols-5">
                  <p className="line-clamp-1 text-md font-bold col-span-4">Ceniza, Oliver Wendell (21100001011)</p>
                  <p className="font-light text-sm text-gray-400">12:00 PM</p>
                </div>
                <p className="line-clamp-1 text-md">You: A personnel will be with you shortly.</p>
              </div>
            </div>
          </Link>
          <Link href="/dashboard/messages">
            <div className="message-box">
              <Image src="/woman.png" alt="icon" width={45} height={45} />
              <div>
                <div className="grid grid-cols-5">
                  <p className="line-clamp-1 text-md font-bold col-span-4">Gitalada, Jona Mae (21100001053)</p>
                  <p className="font-light text-sm text-gray-400">11:00 AM</p>
                </div>
                <p className="line-clamp-1 text-md">You: Thank you for contacting us!</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}