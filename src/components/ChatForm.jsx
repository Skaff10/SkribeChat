import { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";

const ChatForm = ({ setChatHistory }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";
    setInput("");
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() =>
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking...." },
      ]) ,600
    );
  };
  return (
    <form className="h-18" onSubmit={handleSubmit}>
      <div className="flex h-full w-full items-center pr-2 overflow-hidden rounded bg-zinc-800">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
          placeholder="Ask anything..."
          className="flex-1 px-4 py-2 bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
        />
        {input.trim() && (
          <button
            type="submit"
            className="cursor-pointer size-13 bg-zinc-700 hover:bg-violet-200 hover:text-zinc-800 text-white transition flex items-center justify-center rounded-full"
          >
            <IoMdSend className="" />
          </button>
        )}
      </div>
    </form>
  );
};

export default ChatForm;
