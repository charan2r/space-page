"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import nightsky from "./fonts/night-sky.json"; 
import space from "./fonts/space.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center text-white text-center">
      {isMounted && (
        <>
          <Lottie 
            animationData={nightsky} 
            loop={true} 
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" /> 
        </>
      )}
      <div className="relative z-10 p-4">
        <h1 className="text-6xl font-bold shadow-lg mb-4 mt-20">Welcome</h1>
        <p className="text-xl mb-8">
          Discover the wonders of the night sky and explore the universe with us.
        </p>
        <a
          href="#explore"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
        >
          Explore Now
        </a>
        <Lottie animationData={space} loop={true} className="w-1/3 h-auto mx-auto " />

      </div>
    </div>
  );
}
