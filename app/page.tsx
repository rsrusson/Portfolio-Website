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
      <div className="flex ">
        <div className="justify-start flex-col w-1/3 h-screen fixed">
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
        <div className="justify-end w-2/3 h-screen ml-auto">
          <div className="relative p-10" >
            <About />
            <Projects />
            <ContactMe />
          </div>
        </div>
      </div>
    </main>
  );
}
