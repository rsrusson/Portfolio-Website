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
      <div className="sm:max-2xl:flex-row flex-col">
        <div className="sm:max-2xl:justify-start sm:max-2xl:flex-col sm:max-2xl:w-1/3 sm:max-2xl:h-screen sm:fixed relative w-screen h-screen">
          <img
            src="images/mountain.jpg"
            alt="Fire Background"
            className="sm:max-2xl:absolute sm:max-2xl:inset-0 sm:max-2xl:z-0 sm:max-2xl:h-screen sm:max-2xl:rounded-lg absolute h-full"
          ></img>
          <div className="sm:max-2xl:px-3 relative h-full justify-between flex-col px-3">
            <Header />
            <Links />
          </div>
        </div>
        <div className="sm:max-2xl:justify-end sm:max-2xl:w-2/3 sm:h-auto sm:max-2xl:mx-auto sm:max-2xl:relative sm:p-10 w-screen px-2">
            <About />
            <Projects />
            <ContactMe />
        </div>
      </div>
    </main>
  );
}
