import React from "react";

function SkeletonCard() {
  return (
    <div className="dark:bg-dark-blue rounded-5 flex h-[21rem] w-[16.5rem] animate-pulse flex-col bg-white px-6 pt-6 text-black shadow-sm dark:text-white">
      <div className="dark:bg-very-dark-blue-dm bg-very-light-gray rounded-5 h-40 w-full" />
      <div className="grid h-44 pt-6 pb-[2.875rem]">
        <span className="dark:bg-very-dark-blue-dm bg-very-light-gray h-[1.625rem] w-[4.8125rem] rounded-full" />
        <div className="mt-4 grid gap-2 text-sm">
          <span className="dark:bg-very-dark-blue-dm bg-very-light-gray h-4 w-[9.3125rem] rounded-full" />
          <span className="dark:bg-very-dark-blue-dm bg-very-light-gray h-4 w-[6rem] rounded-full" />
          <span className="dark:bg-very-dark-blue-dm bg-very-light-gray h-4 w-[5.4375rem] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
