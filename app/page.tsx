import Image from "next/image";
import NavigationBar from "./NavigationBar";
import Header from "./header";
import Projects from "./projects/Projects";

export default function HomePage() {
  return (
    <main>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="pt-16 pl-16 lg:w-1/2">
          <Header />
        </div>
        <div className="pt-16 pr-16 lg:w-1/2">
          <Projects />
        </div>
      </div>
    </main>
  );
}
