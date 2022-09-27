import React from "react";
import "./ExpensesFilter.css";
import { useContext } from "react";
import { DarkModeContext } from "../Context/LightModeContext";

const ExpensesFilter = (props) => {
  const { lightMode } = useContext(DarkModeContext);
  const filterYear = (e) => {
    let year = e.target.value;
    /*below we pass the state to the Expenses component as a function argument */
    props.onSelectYear(year);
  };
  return (
    <div className={!lightMode ? "expenses-filter" : "expenses-filter-light"}>
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.visibleYear} onChange={filterYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
