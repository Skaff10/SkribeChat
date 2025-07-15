import React from "react";

const ChatMessage = ({ chat }) => {
  const isBot = chat.role === "model";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[75%] backdrop-blur-md px-4 py-2 shadow
          ${
            isBot
              ? "bg-white/10 border border-white/20 text-white rounded-t-full rounded-br-full rounded-bl-xl"
              : "bg-violet-200 text-zinc-800 border border-white/20 rounded-t-full rounded-bl-full rounded-br-xl"
          }`}
      >
        <p>{chat.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
