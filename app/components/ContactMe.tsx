"use client";
import React, { useEffect } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const ContactMe = () => {
    const handleDownload = () => {
      // Fetch the Word document as ArrayBuffer or binary data first
      fetch("downloadable/Ryan Russon Resume 0-9 SE.docx")
        .then(response => response.arrayBuffer())
        .then(buffer => {
          const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Ryan Russon Resume.docx";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    };
    
  return (
    <div className="pb-20 pt-10" id="contact-me">
      <div className="text-center text-6xl bg-sky-900 rounded-3xl">ContactMe</div>
      <div className="mt-10 text-xl flex flex-col justify-center">
        <div className="p-3 text-center">Email: rsrusson1@gmail.com</div>
        <div className="p-3 flex justify-center">
          <a
            className="block text-xl hover:text-red-600 mr-10"
            href="https://github.com/rsrusson?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub />
          </a>
          <a
            className="block text-xl hover:text-red-600"
            href="https://www.linkedin.com/in/ryan-russon-99b753270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </div>
        <button className="p-3 text-center hover:text-red-600" onClick={handleDownload}>Downloadable Resume</button>
      </div>
    </div>
  );
};

export default ContactMe;
