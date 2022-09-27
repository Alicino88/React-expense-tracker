import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //below state to show error when title input is left empty
  const [titleIsValid, setTitleIsValid] = useState(true);

  /*the event object we get it automatically when the change event occurs
  throught the event object we can access the value typed inside the input field */
  const titleChageHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTitleIsValid(true);
    }
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountChageHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChageHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  /*form submission*/
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    /*below we clear the form */
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    /*the function onSaveExpenseData is passed down as a prop from the parent component NewExpenses
    by passing in here the arguments expenseData, these become available inside the parent component. From NewExpense we then pass them up to App component*/
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input
            type="text"
            /* below added two-way binding: when I click on "add expense" button then the content of the input fields is erased*/
            value={enteredTitle}
            onChange={titleChageHandler}
            className={`title  ${!titleIsValid ? "invalid" : ""}`}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChageHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChageHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
