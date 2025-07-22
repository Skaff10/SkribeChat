import Header from "./components/Header.jsx";
import Chatbot from "./components/Chatbot.jsx";
import Home from "./components/Home.jsx";

import { useState } from "react";
const App = () => {
  const [main, setMain] = useState("Home");
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (history) => {

    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking...."), {role: 'model', text}])
    }

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something Went Wrong");

      const responseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

        updateHistory(responseText);

    } catch (error) {
      console.log(error);
    }
  };

  let content;
  if (main == "Home") content = <Home setContent={setMain} />;
  else if (main == "Chatbot")
    content = (
      <Chatbot
        setChatHistory={setChatHistory}
        chatHistory={chatHistory}
        generateBotResponse={generateBotResponse}
      />
    );

  return (
    <div className="">
      <Header setContent={setMain} />
      <div className="flex overflow-auto">{content}</div>
    </div>
  );
};

export default App;
