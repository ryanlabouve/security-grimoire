import { Link } from "remix";
import { useContext } from "react";
import { ConfigContext } from "~/contexts/config-context";
import clsx from "clsx";
export default function Sidebar() {
  let { sidebarWidth, isSidebarOpen, setIsSidebarOpen } =
    useContext<ConfigContext>(ConfigContext);
  return (
    <div className="fixed left-0 top-0 h-screen p-6 flex">
      {!isSidebarOpen && (
        <div className="border border-gray-100 p-6">
          <div
            className="cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            &gt;&gt;
          </div>
        </div>
      )}
      <div
        style={{
          width: `${isSidebarOpen ? sidebarWidth : 0}px`,
        }}
        className={clsx("bg-gray-900 border-gray-100 overflow-hidden", {
          "p-6 border": isSidebarOpen,
        })}
      >
        <div className="cursor-pointer" onClick={() => setIsSidebarOpen(false)}>
          &lt;&lt;
        </div>
        <div>Domains</div>
        <div>Tools</div>
        <div>Methodology</div>
        <Link to="/books">Books</Link>
      </div>
    </div>
  );
}
