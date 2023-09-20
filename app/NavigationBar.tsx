import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="bg-slate-700 p-8">
      <div className="flex justify-between">
        <div className="text-white hover:text-red-500">
          <Link href="/">Home</Link>
        </div>
        <div className="text-white hover:text-red-500">
          <Link href="/about">About</Link>
        </div>
        <div className="text-white hover:text-red-500">
          <Link href="/projects">Projects</Link>
        </div>
        <div className="text-white hover:text-red-500">
          <Link href="/contact">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
