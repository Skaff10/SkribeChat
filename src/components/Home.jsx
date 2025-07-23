import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = ({ setContent }) => {
  return (
    <div
      className="flex flex-col w-full font-sans text-zinc-400 "
      style={{
        backgroundImage: "linear-gradient(315deg, #000000 0%, #5e5368 74%)",
      }}
    >
      {/* Hero Section */}
      <header className=" text-white py-10 text-center px-4 rounded-sm">
        <h1 className="text-zinc-400 text-4xl font-bold">
          Skribe - Where Conversations Become Knowledge
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Ask, learn, and grow — Skribe is your AI-powered companion for turning
          questions into insight.
        </p>

        <button
          onClick={() => setContent("Chatbot")}
          className="cursor-pointer hover:bg-violet-100 border lg:border-0  hover:text-myclr mt-6 px-6 py-2 bg-myclr text-white font-semibold rounded transition"
        >
          Start Chatting
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-10  mx-auto space-y-16 w-full ">
        {/* About Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold">Why Skribe?</h2>
          <p className="mt-4 text-amber-50 max-w-3xl mx-auto">
            Skribe is more than just a chatbot — it's your intelligent companion
            built to transform everyday conversations into meaningful insights.
            Whether you're asking questions, seeking advice, or exploring new
            ideas, Skribe listens, understands, and responds with clarity and
            depth. It bridges the gap between curiosity and instant knowledge,
            making learning effortless and conversations smarter.
          </p>
        </section>

        {/* Features Section */}
        <section className="w-full flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center mb-6">
            What Skribe Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 glow-border  shadow rounded text-center w-60">
              <h3 className="text-lg font-semibold text-zinc-400">Instant Answers</h3>
              <p className="text-gray-300">
                Get quick, accurate replies on any topic.
              </p>
            </div>
            <div className="p-6 glow-border shadow rounded text-center w-60">
              <h3 className="text-lg font-semibold text-zinc-400">Smart Learning</h3>
              <p className="text-gray-300">
                Converse your way to understanding and insight.
              </p> 
            </div>
            <div className="p-6 glow-border  shadow rounded text-center w-60">
              <h3 className="text-lg font-semibold text-zinc-400">Always On</h3>
              <p className="text-gray-300">
                Available 24/7 for questions, tasks, or just chat.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="text-center w-full">
          <h2 className="text-2xl font-bold mb-4">What Users Say</h2>
          <blockquote className="italic text-amber-50 max-w-xl mx-auto">
            “Skribe helps me study smarter and faster — it's like having a
            genius study buddy in my pocket!”
          </blockquote>
        </section>

        {/* FAQ */}
        <section className="rounded-sm p-2">
          <h2 className="text-2xl font-bold text-center mb-3">FAQs</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div>
              <h3 className="font-semibold">Is Skribe free to use?</h3>
              <p className="text-amber-50">
                Yes, Skribe is completely free to use for all users.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">How accurate is Skribe?</h3>
              <p className="text-amber-50">
                Skribe uses state-of-the-art AI to ensure reliable and helpful
                responses.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="hidden md:block text-center">
          <h2 className=" text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-amber-50 mb-4">
            Subscribe to our newsletter for updates and features.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter Your email"
              className="px-4 py-2 border border-myclr rounded w-64"
            />
            <button className="px-4 py-2 hover:bg-violet-100 hover:text-myclr bg-myclr font-semibold text-white rounded cursor-pointer">
              Subscribe
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-1 border-black text-gray-400 text-sm py-6 px-4 text-center mb-1">
        <p>
          © 2025 <b>Skribe</b> . All rights reserved.
        </p>
        <p>Made with 💡 to turn conversations into knowledge.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-4 text-lg">
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-white">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
