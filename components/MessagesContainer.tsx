import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MessagesContainer = () => {
  return (
    <div className="flex flexCenter rounded-lg shadow-lg bg-white h-[602px] w-full">
        <div className="border-2 border-r-0 rounded-l-lg border-gray-200 w-1/3 h-full flex flex-col p-6">
          <div className="flex gap-[220px]">
            <p className="font-bold text-lg">Messages</p>
            <Image src="/images/edit.svg" alt="edit" width={22} height={22} />
          </div>
          <div>
            <form id="listmsg" method="post" autoComplete="off" className="flex items-center gap-[2.5px]">
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Search..."
                className="block w-4/5 rounded-l-md mt-3 py-1.5 pl-3 text-gray-900 bg-white shadow-sm placeholder:text-gray-400 ring-2 ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button id="search-btn" className="w-1/5 mt-3 py-[9px] rounded-r-lg bg-blue-900 flex items-center justify-center">
                <Image src="/images/search.svg" alt="search" width={22} height={22} />
              </button>
            </form>
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <Link href="/dashboard/messages">
              <div className="messages">
                <Image src="/man.png" alt="icon" width={40} height={40} />
                <div>
                  <div className="grid grid-cols-5">
                    <p className="line-clamp-1 text-[15px] font-bold col-span-4">Ceniza, Oliver Wendell (21100001011)</p>
                    <p className="font-light text-[12px] text-gray-400">12:00 PM</p>
                  </div>
                  <p className="line-clamp-1 text-[15px]">You: A personnel will be with you shortly.</p>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/messages">
              <div className="messages border-2 border-gray-300">
                <Image src="/woman.png" alt="icon" width={40} height={40} />
                <div>
                  <div className="grid grid-cols-5">
                    <p className="line-clamp-1 text-[15px] font-bold col-span-4">Gitalada, Jona Mae (21100001053)</p>
                    <p className="font-light text-[12px] text-gray-400">11:00 AM</p>
                  </div>
                  <p className="line-clamp-1 text-[15px]">You: Thank you for contacting us!</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-2 rounded-r-lg border-gray-200 w-2/3 h-full flex flex-col flexCenter gap-2">
          <Image src="/selection.png" alt="selection" width={50} height={20} />
          <p className="font-bold">No message selected</p>
        </div>
      </div>
  )
}

export default MessagesContainer