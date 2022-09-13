import React, { useMemo } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import { Magnifier } from "../Icons";

function Search({ onSearch }) {
  const changeHandler = (event) => {
    onSearch(event.target.value);
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, 400);
  }, []);

  return (
    <label
      className="relative w-full max-w-[30rem]"
      aria-label="Search for a country"
    >
      <i className="absolute left-8 top-1/2 -translate-y-1/2">
        <Magnifier />
      </i>
      <input
        className="
      dark:bg-dark-blue rounded-5 h-12 w-full bg-white pl-[4.625rem] text-xs leading-5
          tracking-normal text-black shadow-md transition-colors placeholder:text-[#848484] placeholder:opacity-100 dark:text-white dark:placeholder:text-white
        md:h-14 md:text-sm"
        id="search"
        type="text"
        placeholder="Search for a country..."
        onChange={debouncedChangeHandler}
      />
    </label>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
