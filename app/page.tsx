import Image from "next/image";
import NavigationBar from "./NavigationBar";
import Header from "./header";
import Projects from "./projects/Projects";

export default function HomePage() {
  return (
    <main>
      <div className="flex">
        <div className="mt-10 ml-5 w-1/4 h-screen fixed">
          <Header />
        </div>
        <div className="mt-10 ml-[25%] w-3/4 h-screen">
          <Projects />
        </div>
      </div>
    </main>
  );
}
