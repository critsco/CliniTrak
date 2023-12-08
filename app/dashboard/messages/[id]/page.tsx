import MessagesContainer from "@/components/MessagesContainer";
import Image from "next/image";

export default function Messages() {
  return (
    <section className="h-full w-[1320px] px-[6%]">
      <div className="flexEnd gap-1 mt-[3rem] mb-[1rem] font-bold text-[14px] text-gray-500 mr-3">
        <Image src="/user.png" alt="profile-picture" width={20} height={20} />
        Nurse
      </div>
      <MessagesContainer />
    </section>
  )
}