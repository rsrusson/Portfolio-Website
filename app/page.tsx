import Image from "next/image";
import NavigationBar from "./NavigationBar";
import Header from "./header";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Links from "./links";
import React from "react";

export default function HomePage() {
  return (
    <main>
      <div className="2xl:flex flex-col">
        <div className="2xl:justify-start 2xl:flex-col 2xl:w-1/3 w-screen 2xl:h-screen h-screen 2xl:fixed relative mb-5">
          <img
            src="images/mountain.jpg"
            alt="Fire Background"
            className="2xl:object-cover 2xl:absolute 2xl:inset-0 2xl:z-0 2xl:h-full 2xl:rounded-lg absolute object-cover h-full"
          ></img>
          <div className="2xl:relative 2xl:pt-10 2xl:pl-10 sm:p-5 relative ml-5">
            <Header />
            <Links />
          </div>
        </div>
        <div className="2xl:justify-end sm:justify-start 2xl:w-2/3 sm:w-screen 2xl:h-screen sm:h-auto 2xl:ml-auto ml-0">
          <div className="2xl:relative 2xl:p-10" >
            <About />
            <Projects />
            <ContactMe />
          </div>
        </div>
      </div>
    </main>
  );
}
