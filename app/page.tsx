"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#1e1e1e] min-h-screen w-screen flex flex-col items-center justify-center snap-y snap-mandatory">
      <div className="min-h-screen w-screen flex flex-col items-center justify-center snap-center">
        <h1
          className="text-white text-4xl font-bold tracking-wide"
          style={{
            transform: `scale(${1 + Math.min(offset, 1600) / 100})`,
            transition: 'transform linear'
          }}
        >
          Tabula Rasa
        </h1>
      </div>
    <div className="min-h-screen w-screen flex flex-col items-center justify-center snap-center">
        <h1 className="text-white text-4xl font-bold tracking-wide">Guns are bad</h1>
      </div>
    </div>
  );
}
