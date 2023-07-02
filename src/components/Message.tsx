"use client";

import user from "@/assets/user.svg";
import bot from "@/assets/bot.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useQuery } from "react-query";
import axios from "axios";

interface MessageProps {
  ai: any;
  msg: string;
}

const Message: React.FC<MessageProps> = ({ ai, msg }: MessageProps) => {
  const [aiRes, setAiRes] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getAIResponse = async () => {
      axios
        .post("https://quantum-server.onrender.com", {
          prompt: msg,
        })
        .then((res) => {
          setisLoading(false);
          console.log(res);
          setAiRes(res.data.bot.trim());
        })
        .catch((err) => {
          setisLoading(false);
          console.log(err);
          setAiRes("Internal Server Error Try again");
        });
    };

    getAIResponse();
  }, [aiRes]);

  return (
    <>
      <div className={`w-full bg-[#343541]`}>
        <div className="md:w-2/3 w-5/6 mx-auto p-4 flex gap-4">
          <div className="p-2 w-8 h-8 bg-blue-600 rounded-sm">
            <Image src={user} alt="user" />
          </div>
          <div className="flex-1 text-[#dcdcdc]  max-w-[100%] whitespace-pre-wrap ">
            {msg}
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className={`w-full bg-[#40414F]`}>
          <div className="md:w-2/3 w-5/6 mx-auto p-4 flex gap-4">
            <div className="p-2 w-8 h-8 bg-green-600 rounded-sm">
              <Image src={bot} alt="bot" />
            </div>
            <div className="flex-1 text-[#dcdcdc]  max-w-[100%] whitespace-pre-wrap ">
              <BeatLoader color="#fff" size={8} />
            </div>
          </div>
        </div>
      ) : (
        <div className={`w-full bg-[#40414F]`}>
          <div className="md:w-2/3 w-5/6 mx-auto p-4 flex gap-4">
            <div className="p-2 w-8 h-8 bg-green-600 rounded-sm">
              <Image src={bot} alt="bot" />
            </div>
            <div className="flex-1 text-[#dcdcdc]  max-w-[100%] whitespace-pre-wrap ">
              {aiRes}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
