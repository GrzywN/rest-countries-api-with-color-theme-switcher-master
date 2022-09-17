import React from "react";

import useDarkTheme from "../../hooks/useDarkTheme";
import { Moon } from "../Icons";

function DarkModeSwitcher() {
  const { switchDarkTheme } = useDarkTheme();

  return (
    <button
      className="flex items-center gap-2"
      type="button"
      onClick={switchDarkTheme}
    >
      <i className="md:scale-125">
        <Moon />
      </i>
      <span
        className="
        font-semi-bold text-xs tracking-normal 
        md:text-base md:leading-[1.375rem]"
      >
        Dark Mode
      </span>
    </button>
  );
}

export default DarkModeSwitcher;
