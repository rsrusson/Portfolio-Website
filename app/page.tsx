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
            className="object-cover absolute inset-0 z-0 h-full rounded-lg"
          ></img>
          <div className="fixed pt-10 pl-10">
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
      </div>
    </main>
  );
}
