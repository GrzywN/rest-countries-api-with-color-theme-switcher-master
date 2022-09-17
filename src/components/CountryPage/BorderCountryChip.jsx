import React from "react";
import PropTypes from "prop-types";

function BorderCountryChip({ name }) {
  return (
    <li className="dark:bg-dark-blue grid h-7 w-max min-w-[6rem] place-items-center rounded-sm bg-white px-[0.625rem] shadow-lg">
      {name}
    </li>
  );
}

BorderCountryChip.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BorderCountryChip;
