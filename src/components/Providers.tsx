"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import GlowPointer from "@/components/GlowPointer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <GlowPointer />
      {children}
    </ThemeProvider>
  );
}
