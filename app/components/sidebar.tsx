import { Link } from "remix";
import { useContext } from "react";
import { ConfigContext } from "~/contexts/config-context";
import clsx from "clsx";
export default function Sidebar() {
  let { sidebarWidth, isSidebarOpen, setIsSidebarOpen } =
    useContext<ConfigContext>(ConfigContext);
  return (
    <div className="fixed left-0 top-0 h-screen p-6 flex">
      <div
        className="bg-cyan-400 fixed bottom-0 left-0 -rotate-90 px-3 z-10"
        style={{
          transformOrigin: "top left",
          marginBottom: "24px",
          marginLeft: "12px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          RL, SECURITY GRIMOIRE
        </Link>
      </div>
      {!isSidebarOpen && (
        <div className="p-2 absolute top-0 left-0 bg-cyan-400 text-sm font-bold">
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
        className={clsx(
          "bg-gray-900 border-gray-100 overflow-hidden relative pt-12",
          {
            "p-6 border": isSidebarOpen,
          }
        )}
      >
        <div
          className="cursor-pointer bg-cyan-400 absolute top-0 left-0 p-1 text-sm font-bold"
          onClick={() => setIsSidebarOpen(false)}
        >
          &lt;&lt;
        </div>
        <div>
          <Link to="/methodology">Methodology</Link>
        </div>
        <div>
          <Link to="/domains">Domains</Link>
        </div>
        <div>
          <Link to="/tools">Tools</Link>
        </div>
        <div>
          <Link to="/books">Books</Link>
        </div>
      </div>
    </div>
  );
}
