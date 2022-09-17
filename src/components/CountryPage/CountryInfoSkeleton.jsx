import React from "react";

import BorderCountryChip from "./BorderCountryChip";

function CountryInfoSkeleton() {
  return (
    <div
      className="
      mt-16 flex animate-pulse flex-col items-center gap-11
      lg:flex-row lg:justify-center lg:gap-36"
      aria-hidden
    >
      <div
        className="
        dark:bg-dark-blue bg-very-light-gray rounded-5 h-[14.3125rem] w-full max-w-[20rem]
        md:h-[25.0625rem] md:max-w-[35rem]"
      />
      <div
        className="
        text-very-dark-blue-lm w-full max-w-[20rem] dark:text-white
        md:max-w-[35.875rem]"
      >
        <div
          className="
        dark:bg-dark-blue bg-very-light-gray h-[1.875rem] w-[5.4375rem] rounded-full
          md:h-[2.75rem] md:w-[7.75rem]"
        />
        <div className="md:mt-[1.4375rem] md:flex md:items-start md:justify-between">
          <div className="mt-4 md:mt-0">
            <div className="dark:bg-dark-blue bg-very-light-gray my-[1.125rem] h-[0.875rem] w-[8.0625rem] rounded-full" />
            <div className="dark:bg-dark-blue bg-very-light-gray my-[1.125rem] h-[0.875rem] w-[9.375rem] rounded-full" />
            <div className="dark:bg-dark-blue bg-very-light-gray my-[1.125rem] h-[0.875rem] w-[6rem] rounded-full" />
            <div className="dark:bg-dark-blue bg-very-light-gray my-[1.125rem] h-[0.875rem] w-[11.3125rem] rounded-full" />
            <div className="dark:bg-dark-blue bg-very-light-gray my-[1.125rem] h-[0.875rem] w-[6.625rem] rounded-full" />
          </div>
          <div className="mt-8 md:mt-0">
            <div className="dark:bg-dark-blue bg-very-light-gray my-[1.125rem] h-[0.875rem] w-[8.8125rem] rounded-full" />
            <div className="dark:bg-dark-blue bg-very-light-gray my-[1.125rem] h-[0.875rem] w-[6.4375rem] rounded-full" />
            <div className="dark:bg-dark-blue bg-very-light-gray my-[1.125rem] h-[0.875rem] w-[13.625rem] rounded-full" />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <div className="dark:bg-dark-blue bg-very-light-gray my-1 h-4 w-[8.8125rem] rounded-full" />
          <ul
            className="
            flex max-w-[19.25rem] flex-wrap gap-[0.625rem]
            md:max-w-[26.875rem] md:justify-center"
          >
            <BorderCountryChip />
            <BorderCountryChip />
            <BorderCountryChip />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CountryInfoSkeleton;
