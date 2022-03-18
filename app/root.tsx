import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import { ConfigContext } from "~/contexts/config-context";

import { useState } from "react";

import type { MetaFunction } from "remix";

import Sidebar from "~/components/sidebar";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

import tailwindStyles from "./tailwind.css";
import globalStyles from "~/styles/global.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: tailwindStyles,
    },
    {
      rel: "stylesheet",
      href: globalStyles,
    },
  ];
}
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [sidebarWidth, setSidebarWidth] = useState<number>(250);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigContext.Provider
          value={{
            isSidebarOpen,
            sidebarWidth,
            setIsSidebarOpen,
            setSidebarWidth,
          }}
        >
          <Sidebar />
          <Outlet />
        </ConfigContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
