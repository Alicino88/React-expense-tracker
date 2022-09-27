import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useContext } from "react";
import { DarkModeContext } from "../Context/LightModeContext";

function ExpenseItem(props) {
  const { lightMode } = useContext(DarkModeContext);
  const price = `€${props.amount}`;
  return (
    <li>
      <Card className={!lightMode ? "expense-item" : "expense-item-light"}>
        <ExpenseDate date={props.date} />
        <div
          className={
            !lightMode
              ? "expense-item__description"
              : "expense-item-light__description"
          }
        >
          <h2>{props.title}</h2>
          <div className="expense-item__price">{price}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
