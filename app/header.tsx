import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200">
        Ryan Russon
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200">
        Software Engineer | Data Analyst
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        Optimize software solutions by leveraging data to solve complex
        problems.
      </p>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-base">
          <a
            className="block text-xl hover:text-red-600"
            href="https://github.com/rsrusson?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </li>
        <li className="mr-5 text-base">
          <a
            className="block text-xl hover:text-red-600"
            href="https://www.linkedin.com/in/ryan-russon-99b753270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
