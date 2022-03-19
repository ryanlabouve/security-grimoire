import { useContext } from "react";
import { ConfigContext } from "~/contexts/config-context";

interface Props {
  children: any;
}
export default function Content(props: Props) {
  let { sidebarWidth, isSidebarOpen, setIsSidebarOpen } =
    useContext<ConfigContext>(ConfigContext);

  return (
    <div
      style={{ paddingLeft: `${isSidebarOpen ? sidebarWidth + 24 : 85}px` }}
      className="p-6 flex h-screen"
    >
      <div className="border border-gray-100 ml-6 p-6 w-full h-full">
        {props.children}
      </div>
    </div>
  );
}
