"use client";

import ChatForm from "@/components/ChatForm";
import Image from "next/image";
import bot from "@/assets/bot.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[100%] flex-col bg-[#343541] ">
      <div className="h-[5%] flex justify-center p-1 items-center ">
        <a
          target="_blank"
          href="https://twitter.com/thexovc"
          className="text-orange-200  cursor-pointer hover:text-orange-500"
        >
          Meet the developer 👨🏽‍💻
        </a>
      </div>

      <div
        className="bg-[#343541] w-[100%] h-[90%] pb-40 mt-2"
        id="chat_container"
      >
        <div className={`w-full bg-[#343541]`}>
          <div className={`w-full bg-[#40414F] `}>
            <div className="md:w-2/3 w-5/6 mx-auto py-4 flex gap-4">
              <div className="p-2 w-8 h-8 bg-green-600 rounded-sm">
                <Image src={bot} alt="bot" />
              </div>
              <div className="flex-1 text-[#dcdcdc]  max-w-[100%] whitespace-pre-wrap ">
                Hello Welcome to Quantum ...
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatForm />
    </main>
  );
}
