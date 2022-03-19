import { useContext, useRef, useEffect, useState } from "react";
import { ConfigContext } from "~/contexts/config-context";

interface Props {
  children: any;
}
export default function Content(props: Props) {
  const innerPane = useRef(null);
  const outerPane = useRef(null);
  const [showScrollIndicator, setShowIndicator] = useState<boolean>(false);

  let { sidebarWidth, isSidebarOpen, setIsSidebarOpen } =
    useContext<ConfigContext>(ConfigContext);

  useEffect(() => {
    if (!innerPane?.current || !outerPane.current) {
      return;
    }
    let innerEl: HTMLElement = innerPane.current;
    let outerEl: HTMLElement = outerPane.current;
    // TODO doesn't work every time
    setShowIndicator(innerEl.scrollHeight > outerEl.scrollHeight);
    console.log("Content scroll refresh", Date.now());
  });

  return (
    <div
      style={{ paddingLeft: `${isSidebarOpen ? sidebarWidth + 24 : 85}px` }}
      className="p-6 flex h-screen  relative"
      ref={outerPane}
    >
      {showScrollIndicator && (
        <div className="bg-cyan-400 text-white absolute bottom-0 right-0 mr-6 mb-6 w-8 text-center text-3xl">
          <div className="canScrollDown">⇣</div>
        </div>
      )}
      <div
        className="border border-gray-100 ml-6 p-6 w-full h-full overflow-y-scroll"
        style={{ scrollbarWidth: "none", scrollbarColor: "#000000" }}
        ref={innerPane}
      >
        {props.children}
      </div>
    </div>
  );
}
