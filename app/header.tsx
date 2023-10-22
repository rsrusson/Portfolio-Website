import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="z-1 text-slate-900 py-10">
      <h1 className="text-4xl font-bold tracking-tight py-3">
        {"Ryan Russon"}
      </h1>
      <h2 className="text-lg font-medium tracking-tight py-3">
        {"Software Engineer | Data Analytics"}
      </h2>
      <p className="py-3 max-w-xs leading-normal text-black">
        {
          "Optimize software solutions by leveraging data to solve complex problems."
        }
      </p>
      <ul className="ml-1 mt-8 flex items-center">
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
