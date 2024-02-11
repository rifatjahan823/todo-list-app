import React from "react";
import { Dropdown, DropdownButton} from "react-bootstrap";
import '../../styles/FilterOptions.css'

const FilterOptions = ({ setFilter }) => {
  return (
    <div className="filter_option">
      <DropdownButton id="dropdown-basic-button" title="Filter by Priority">
        <Dropdown.Item onClick={() => setFilter("all")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("low")}>Low</Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("medium")}>
          Medium
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("high")}>High</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default FilterOptions;
