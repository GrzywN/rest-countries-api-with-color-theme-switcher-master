import { useState, useEffect } from "react";

const DARK = "dark";
const LIGHT = "light";

function useDarkTheme() {
  const root = document.documentElement;

  const isThemeDark = () => {
    if (localStorage.theme === LIGHT) return false;
    if (localStorage.theme === DARK) return true;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkTheme, setDarkTheme] = useState(isThemeDark());

  useEffect(() => {
    if (darkTheme) {
      localStorage.theme = DARK;
      root.classList.add(DARK);
    } else {
      localStorage.theme = LIGHT;
      root.classList.remove(DARK);
    }
  }, [darkTheme]);

  const switchDarkTheme = () => {
    setDarkTheme((prevMode) => !prevMode);
  };

  return { darkTheme, switchDarkTheme };
}

export default useDarkTheme;
