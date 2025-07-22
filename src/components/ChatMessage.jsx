const ChatMessage = ({ chat }) => {
  const isBot = chat.role === "model";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[75%] backdrop-blur-md px-4 py-2 shadow
          ${
            isBot
              ? "bg-white/10  border-white/20 text-zinc-900 "
              : "bg-white/10 text-gray-100  border-white/20 "
          }`}
      >
        <p style={{ whiteSpace: "pre-line" }}>{chat.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
