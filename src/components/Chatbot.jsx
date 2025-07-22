import { useState } from "react";
import { DiOpenshift } from "react-icons/di";
import { FaArrowDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
const Chatbot = ({ setChatHistory, chatHistory, generateBotResponse }) => {
  const [bg, setBg] = useState(true);
  return (
    <div
      className="w-full h-[calc(100vh-53px)] flex items-center justify-center scroll-smooth font-onemono font-semibold text-sm"
      style={{
        backgroundImage: "linear-gradient(315deg, #000000 0%, #5e5368 74%)",
      }}
    >
      <div
        className={` transition-all ease-in duration-300  ${
          bg ? "flex" : "hidden"
        }  bg-myclr md:h-3/4 md:w-2xl h-full w-full  flex-col border border-white/20 rounded-md overflow-hidden`}
      >
        <header className="flex justify-between items-center px-4 py-2 bg-myclr border-b border-white/20 mb-2">
          <div className="flex gap-2 items-center">
            <DiOpenshift className="size-10 text-amber-100 p-1" />
            <h2 className="text-xl font-mich text-white">SkribeChat</h2>
          </div>
          <button
            className="hidden md:flex p-2 cursor-pointer"
            onClick={() => setBg(false)}
          >
            <FaArrowDown className="text-white" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
          <div className="flex justify-start model">
            <div className="max-w-[75%] backdrop-blur-md bg-white/10  border-white/20 text-white px-4 py-2 rounded-t-full rounded-br-full rounded-bl-xl shadow">
              <p>
                Hey there
                <br />
                How can I help you?
              </p>
            </div>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        <ChatForm
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
          chatHistory={chatHistory} 
        />
      </div>
      <div
        className={`${
          bg ? "hidden" : "flex"
        } fixed ml-5 right-22 bottom-28 border-1 border-none rounded-full p-1 bg-zinc-700 text-white`}
      >
        <FaAngleDoubleUp
          onClick={() => setBg(true)}
          className="cursor-pointer  size-8 p-1"
        />
      </div>
    </div>
  );
};

export default Chatbot;
