import Header from "./components/Header.jsx";
import Chatbot from "./components/Chatbot.jsx";
import Home from "./components/Home.jsx";
import Setting from "./components/Setting.jsx";
import { useState } from "react";
const App = () => {
  const [main, setMain] = useState("Home");
  const [chatHistory, setChatHistory] = useState([]);
  let content;
  if (main == "Home") content = <Home setContent={setMain} />;
  else if (main == "Chatbot") content = <Chatbot setChatHistory={setChatHistory} chatHistory={chatHistory}/>;
  else content = <Setting />
  return (
    <div className="">
      <Header setContent={setMain}/>
      <div className="flex overflow-auto">
        
        {content}
      </div>
    </div>
  );
};

export default App;
