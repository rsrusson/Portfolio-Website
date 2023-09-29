import Image from "next/image";
import NavigationBar from "./NavigationBar";
import Header from "./header";
import Projects from "./projects/Projects";
import Links from "./links"

export default function HomePage() {
  return (
    <main>
      <div className="flex">
        <div className="my-10 ml-5 w-1/4 h-screen fixed">
          <Header />
          <Links />
        </div>
        <div className="mt-10 ml-[25%] w-3/4 h-screen">
          <Projects />
        </div>
      </div>
    </main>
  );
}
