import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import { useContext } from "react";
import { DarkModeContext } from "../Context/LightModeContext";
const NewExpense = (props) => {
  const { lightMode } = useContext(DarkModeContext);
  /*isEditing is initially false and Add new expense button is shown*/
  const [isEditing, setIsEditing] = useState(false);
  /*enteredExpenseData arguments arrive from ExpenseForm child component(the data we put into the form) */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    /*onAddExpense is a function passed down as a prop from the parent component App. By passing in here the arguments expenseData
    we are able to "sending them up" to the parent component App.*/
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={!lightMode ? "new-expense" : "new-expense-light"}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* OnSaveExpenseData is a function prop (saveExpenseDataHandler) passed down to ExpenseForm component*/}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
