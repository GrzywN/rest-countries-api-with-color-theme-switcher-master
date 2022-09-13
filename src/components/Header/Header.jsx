import React from "react";
import { Link } from "react-router-dom";
import DarkModeSwitcher from "./DarkModeSwitcher";

function Header() {
  return (
    <header
      className="
      dark:bg-dark-blue text-very-dark-blue-lm flex h-20 items-center justify-between bg-white px-4 py-[1.875rem] shadow-lg transition-colors dark:text-white
      md:px-20 md:py-6"
    >
      <Link to="/">
        <h1 className="font-extra-bold font-sans text-sm tracking-normal md:text-2xl">
          Where in the world?
        </h1>
      </Link>
      <DarkModeSwitcher />
    </header>
  );
}

export default Header;
