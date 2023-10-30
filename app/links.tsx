import Link from "next/link";
import React from "react";

const Links = () => {
  return (      
      <ul className="h-1/2 z-1 mt-autotext-left">
        <li className="h-1/3">
          <Link href="#about" className="p-1 rounded-full hover:bg-slate-400 bg-sky-800">
            About
          </Link>
        </li>
        <li className="h-1/3">
          <Link href="#projects" className="p-1 rounded-full hover:bg-slate-400 bg-sky-800">
            Projects
          </Link>
        </li>
        <li className="h-1/3">
          <Link href="#contact-me" className="p-1 rounded-full hover:bg-slate-400 bg-sky-800">
            Contact Me
          </Link>
        </li>
      </ul>
  );
};

export default Links;
