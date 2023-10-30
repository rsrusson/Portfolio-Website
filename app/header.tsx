import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="h-1/2 z-1 text-slate-900 pt-3">
      <h1 className="text-4xl font-bold tracking-tight h-1/4 mb-2">
        {"Ryan Russon"}
      </h1>
      <h2 className="text-lg font-medium tracking-tight h-1/4">
        {"Software Engineer | Data Analytics"}
      </h2>
      <p className="py-3 leading-normal text-black h-1/4">
        {
          "Optimize software solutions by leveraging data to solve complex problems."
        }
      </p>
      <ul className="flex items-center h-1/4">
        <li className="mr-5 text-base">
          <a
            className="block text-xl hover:text-red-600"
            href="https://github.com/rsrusson?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub />
          </a>
        </li>
        <li className="mr-5 text-base">
          <a
            className="block text-xl hover:text-red-600"
            href="https://www.linkedin.com/in/ryan-russon-99b753270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
