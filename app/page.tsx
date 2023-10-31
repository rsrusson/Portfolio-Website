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
      <div className="sm:flex-row flex-col">
        <div className="sm:justify-start sm:flex-col sm:w-1/3 sm:h-screen sm:fixed relative w-screen h-screen mb-5">
          <img
            src="images/mountain.jpg"
            alt="Fire Background"
            className="absolute inset-0 z-0 h-full w-full rounded-lg"
          ></img>
          <div className="sm:h-full sm:fixed sm:pl-5 sm:w-1/3 pl-5 h-full relative">
            <Header />
            <Links />
          </div>
        </div>
        <div className="sm:justify-end sm:w-2/3 sm:h-auto sm:ml-auto sm:relative sm:p-10 w-screen px-2">
            <About />
            <Projects />
            <ContactMe />
        </div>
      </div>
    </main>
  );
}
