import React from "react";

interface ConfigContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> | Function;
  sidebarWidth: number;
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>> | Function;
}
const ConfigContext = React.createContext<ConfigContext>({
  isSidebarOpen: true,
  sidebarWidth: 400,
  setIsSidebarOpen: () => {
    throw "Implement #setSidebarOpen";
  },
  setSidebarWidth: () => {
    throw "Implement #setSidebarOpen";
  },
});

export { ConfigContext };
