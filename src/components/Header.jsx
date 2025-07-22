import { DiOpenshift } from "react-icons/di";
import { PiHamburgerLight } from "react-icons/pi";
const Header = ({ setContent }) => {
  return (
    <div
      className="flex  w-full justify-between border-b-1 font-home"
      style={{
        backgroundImage: "linear-gradient(315deg, #000000 0%, #5e5368 74%)",
      }}
    >
      <div className="flex font-mich font-bold">
        <DiOpenshift className="size-13 text-amber-100 p-1" />
        <h1 className="h-full flex text-2xl items-center self-center -mt-1 text-amber-50">
          Skribe
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-3 pr-2 mr-2 text-amber-50">
        <span
          className="cursor-pointer glow-white "
          onClick={() => setContent("Home")}
        >
          Home
        </span>
        <span
          className="cursor-pointer glow-white"
          onClick={() => setContent("Chatbot")}
        >
          Chat
        </span>
        
      </div>
      <div className="flex md:hidden items-center mr-2 text-xl">
        <PiHamburgerLight className="text-amber-50 cursor-pointer " />
      </div>
    </div>
  );
};

export default Header;
