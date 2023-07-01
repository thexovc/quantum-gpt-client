"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Message from "./Message";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function ChatForm() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (): Promise<void> => {
    const chatContainer: HTMLElement | null =
      document.getElementById("chat_container");

    if (chatContainer) {
      const messageContainer = document.createElement("div");
      ReactDOM.render(<Message ai={false} msg={inputText} />, messageContainer);

      chatContainer.appendChild(messageContainer);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    setInputText("");
  };

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      handleSubmit();
      setInputText("");
    }
  };

  return (
    <div className="bottom-0 h-[7%] fixed flex justify-center w-full">
      <form className="bg-[#4e4f5c]  mb-2 flex items-center mx-3 w-5/6 md:w-2/3 p-1 rounded-md text-white">
        <input
          onKeyDown={handleKeyDown}
          value={inputText}
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          className="bg-[#4e4f5c] p-2 mx-2 h-full w-[95%] outline-none"
          placeholder="ask your questions..."
        />
        <PaperAirplaneIcon
          onClick={handleSubmit}
          className="w-6 h-6 hover:cursor-pointer hover:text-green-400 hover:font-bolder"
        />
      </form>
    </div>
  );
}
