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
        Content loading...
      </div>
    </div>
  );
}
