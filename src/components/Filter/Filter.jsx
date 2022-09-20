import React from "react";
import PropTypes from "prop-types";
import { AFRICA, AMERICA, ASIA, EUROPE, OCEANIA } from "../../utils/globals";

import { DownArrow } from "../Icons";

function Filter({ state, onFilterChange }) {
  const changeHandler = (event) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  };

  return (
    <details
      className="
      rounded-5 text-very-dark-blue-lm dark:bg-dark-blue relative z-50 h-12 w-full max-w-[12.5rem] cursor-pointer select-none bg-white text-start shadow-md transition-colors dark:text-white
      md:h-14"
    >
      <summary
        className="
        font-regular flex h-12 items-center justify-between px-6 text-xs leading-5 tracking-normal
        md:h-14 md:text-sm"
      >
        Filter by Region
        <i className="transition-transform">
          <DownArrow />
        </i>
      </summary>
      <div
        className="
        font-regular rounded-5 dark:bg-dark-blue absolute bottom-0 grid w-full max-w-[12.5rem] translate-y-[calc(100%+0.25rem)] gap-2 bg-white py-4 px-6 text-xs tracking-normal transition-colors
        md:text-sm"
      >
        <label className="flex">
          Africa
          <input
            className="ml-auto"
            type="checkbox"
            name={AFRICA}
            checked={state[AFRICA]}
            onChange={changeHandler}
          />
        </label>
        <label className="flex">
          America
          <input
            className="ml-auto"
            type="checkbox"
            name={AMERICA}
            checked={state[AMERICA]}
            onChange={changeHandler}
          />
        </label>
        <label className="flex">
          Asia
          <input
            className="ml-auto"
            type="checkbox"
            name={ASIA}
            checked={state[ASIA]}
            onChange={changeHandler}
          />
        </label>
        <label className="flex">
          Europe
          <input
            className="ml-auto"
            type="checkbox"
            name={EUROPE}
            checked={state[EUROPE]}
            onChange={changeHandler}
          />
        </label>
        <label className="flex">
          Oceania
          <input
            className="ml-auto"
            type="checkbox"
            name={OCEANIA}
            checked={state[OCEANIA]}
            onChange={changeHandler}
          />
        </label>
      </div>
    </details>
  );
}

Filter.propTypes = {
  state: PropTypes.shape({
    [AFRICA]: PropTypes.bool,
    [AMERICA]: PropTypes.bool,
    [ASIA]: PropTypes.bool,
    [EUROPE]: PropTypes.bool,
    [OCEANIA]: PropTypes.bool,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
