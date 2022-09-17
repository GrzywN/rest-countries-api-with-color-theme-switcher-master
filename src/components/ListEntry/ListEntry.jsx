import React from "react";
import PropTypes from "prop-types";

function ListEntry({ attribute, value }) {
  return (
    <li>
      <span className="font-semi-bold">{attribute}</span>
      {value}
    </li>
  );
}

ListEntry.propTypes = {
  attribute: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default ListEntry;
