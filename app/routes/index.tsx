import { useContext } from "react";
import { ConfigContext } from "~/contexts/config-context";
import clsx from "clsx";

export default function Index() {
  let { sidebarWidth, isSidebarOpen, setIsSidebarOpen } =
    useContext<ConfigContext>(ConfigContext);

  return (
    <div
      style={{ paddingLeft: `${isSidebarOpen ? sidebarWidth + 24 : 85}px` }}
      className="p-6 flex h-screen"
    >
      <div className="border border-gray-100 ml-6 p-6 w-full h-full">
        <div className="text-7xl mb-3">SECURITY GRIMOIRE</div>
        <p className="pb-3">Welcome to my security grimoire.</p>
        <p className="pb-3">
          A collection of things I've learned / resources / approaches.
        </p>
        <p>
          Feel free to
          <a href="https://github.com/ryalabouve/security-grimoire">
            contribute
          </a>
        </p>
      </div>
    </div>
  );
}
