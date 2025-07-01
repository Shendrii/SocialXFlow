"use client";
import { createContext, useState, ReactNode } from "react";

export const AppStateContext = createContext({ building: true });

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [building] = useState(true);
  return (
    <AppStateContext.Provider value={{ building }}>
      {children}
    </AppStateContext.Provider>
  );
} 