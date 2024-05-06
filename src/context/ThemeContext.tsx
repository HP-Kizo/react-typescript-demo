import React, { createContext } from "react";
import { theme } from "./theme";

// export const ThemeContext = createContext(theme);

// type ThemeContextProdviderProps = {
//   children: React.ReactNode;
// };

// export const ThemeContextProdvider = ({
//   children,
// }: ThemeContextProdviderProps) => {
//   return (
//     <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
//   );
// };

export const ThemeContext = createContext(theme);

type ThemeContextProdviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProdvider = ({
  children,
}: ThemeContextProdviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
