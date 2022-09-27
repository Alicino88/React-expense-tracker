import "./ExpenseDate.css";
import { useContext } from "react";
import { DarkModeContext } from "../Context/LightModeContext";

function ExpenseDate(props) {
  const { lightMode } = useContext(DarkModeContext);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className={!lightMode ? "expense-date" : "expense-date-light"}>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
