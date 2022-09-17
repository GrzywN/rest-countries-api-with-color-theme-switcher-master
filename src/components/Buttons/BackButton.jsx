import React from "react";
import { Link } from "react-router-dom";

import LeftArrow from "../Icons/LeftArrow";

function BackButton() {
  return (
    <Link
      className="dark:bg-dark-blue rounded-6 inline-flex h-10 w-[8.5rem] items-center justify-center gap-2 bg-white shadow-xl"
      to="/"
    >
      <LeftArrow />
      <span className="text-very-dark-blue-lm font-sans text-sm font-light tracking-normal dark:text-white">
        Back
      </span>
    </Link>
  );
}

export default BackButton;
