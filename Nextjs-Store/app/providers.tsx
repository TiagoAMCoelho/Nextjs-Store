"use client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";

import { ReactNode } from "react";

function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
