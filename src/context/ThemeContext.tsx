"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
  }
  return "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialise from the data-theme set by the pre-paint inline script, so the
  // first client render already matches the painted theme (no flash).
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Enable colour transitions only after first paint to avoid a FOUC flash.
    document.documentElement.classList.add("theme-ready");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      /* ignore storage errors (private mode) */
    }
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values for SSR/prerendering
    return {
      theme: "dark" as const,
      toggleTheme: () => {},
    };
  }
  return context;
}
