import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const ContactMe = () => {
  return (
    <>
      <div className="text-center text-6xl">ContactMe</div>
      <div className="mx-40 mb-40 text-xl flex-col justify-center">
        <div className="text-center">Email: rsrusson1@gmail.com</div>
        <div className="flex justify-center">
          <a
            className="block text-xl hover:text-red-600 mr-10"
            href="https://github.com/rsrusson?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            className="block text-xl hover:text-red-600"
            href="https://www.linkedin.com/in/ryan-russon-99b753270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub />
          </a>
        </div>
        <div className="text-center">Downloadable Resume</div>
      </div>
    </>
  );
};

export default ContactMe;
