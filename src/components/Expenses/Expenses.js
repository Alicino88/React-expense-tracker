import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (data) => {
    console.log(data);
    setSelectedYear(data);
  };

  /*below we filter the expenses by year, create a new array and pass it to ExpenseList component */
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/*visibleYear is passesd as a prop to create two-way binding. It's set as the initial value of the select element */}
        <ExpensesFilter
          visibleYear={selectedYear}
          onSelectYear={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>

      {/*the conditional rendering can be rewritten as:
      1.Using && operator:
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.lentgh >0 && 
        filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
            ))} 
            

       2. Using ternary operator:    
            {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        )}*/}
    </div>
  );
}

export default Expenses;
