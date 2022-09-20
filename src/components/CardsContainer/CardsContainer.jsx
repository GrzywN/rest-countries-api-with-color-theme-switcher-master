import React from "react";
import PropTypes from "prop-types";
import ScrollToTop from "react-scroll-to-top";

import Search from "../Search";
import Filter from "../Filter";
import { DownArrow } from "../Icons";

function CardsContainer(props) {
  const { searchHandler, filterChangeHandler, filterState, children } = props;

  const scrollToTopArrow = (
    <i className="rotate-180 scale-150">
      <DownArrow />
    </i>
  );

  return (
    <div
      className="
      px-4 py-6
      md:px-20 md:py-12"
    >
      <div
        className="
        flex flex-col gap-10
        md:flex-row md:justify-between"
      >
        <Search onSearch={searchHandler} />
        <Filter onFilterChange={filterChangeHandler} state={filterState} />
      </div>
      <div
        className="
        mt-8 flex flex-wrap justify-center gap-10
        md:mt-12 md:gap-[4.625rem]"
      >
        {children}
      </div>
      <ScrollToTop
        className="
        md:dark:!bg-dark-blue
        hidden md:!grid md:place-items-center md:!rounded-full md:bg-white md:!p-2 md:!shadow-md"
        smooth
        component={scrollToTopArrow}
      />
    </div>
  );
}

CardsContainer.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  filterChangeHandler: PropTypes.func.isRequired,
  filterState: PropTypes.objectOf(PropTypes.bool).isRequired,
  children: PropTypes.node.isRequired,
};

export default CardsContainer;
