import React, { useEffect, useState } from "react";

const roles = ["Aspiring Frontend Developer", "React Developer", "UI Engineer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (subIndex === roles[index].length) return;

    const timeout = setTimeout(() => {
      setText((prev) => prev + roles[index][subIndex]);
      setSubIndex((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  useEffect(() => {
    if (text === roles[index]) {
      setTimeout(() => {
        setText("");
        setSubIndex(0);
        setIndex((index + 1) % roles.length);
      }, 1500);
    }
  }, [text]);

  return (
    <section
      id="hero"
      className="scroll-mt-5 min-h-screen flex justify-center items-center px-6 py-16"
    >
      <div className="max-w-7xl w-full bg-white dark:bg-black rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center p-12 md:p-16 min-h-96">
          {/* Image on Left */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
              alt="Profile"
              className="w-100 h-150 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Text Content on Right */}
          <div className="space-y-8">
            <h1 className="text-7xl md:text-8xl font-extrabold text-sky-900 dark:text-white">
              Hi!, I am <span className="text-sky-700">Hanee Nayak</span>
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold text-sky-700 dark:text-white">
              {text}
              <span className="text-sky-700">|</span>
            </h2>

            <p className="text-xl font-semibold text-sky-900 dark:text-white leading-relaxed">
              Frontend-focused Web Developer with experience in building
              responsive and accessible interfaces using modern web
              technologies. I have a working understanding of backend
              integration and RESTful APIs and am actively seeking frontend
              roles with opportunities for professional growth.
            </p>

            <div className="flex gap-6 pt-6">
              <button className="px-8 py-4 bg-sky-900 text-white border-4 border-sky-900 rounded-3xl hover:bg-sky-800 transition font-bold text-xl">
                View Work <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
              <button className="px-8 py-4 border-2 border-sky-700 text-sky-600 dark:text-white dark:border-sky-600 rounded-3xl hover:bg-sky-900 hover:text-white transition font-bold text-xl">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
