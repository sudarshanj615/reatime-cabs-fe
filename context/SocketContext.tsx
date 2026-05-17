"use client";

import { createContext, useContext } from "react";

type SocketContextValue = {
  connected: boolean;
};

const SocketContext = createContext<SocketContextValue>({ connected: false });

export function SocketContextProvider({ children }: { children: React.ReactNode }) {
  return <SocketContext.Provider value={{ connected: false }}>{children}</SocketContext.Provider>;
}

export function useSocketContext() {
  return useContext(SocketContext);
}
