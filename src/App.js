/*State lifting: The new expense data ("expense" )are brought in here through the concept of "state lifting". The data travel from children component to parent component using a function prop.
how it works->we define a function in the parent component that takes as arguments the coming data from the child component. The function is then passed down as a prop
to the component that has the data (the children one) and it is fired there by passing in the data arguments. Here the the new expense data travel from ExpenseForm to NewExpense and then App component. */

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import { DarkModeProvider } from "./components/Context/LightModeContext";

function App() {
  const INITIAL_EXPENSES = [
    {
      id: "e1",
      title: "Cookies",
      amount: 4,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "new shoes", amount: 150, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "New pc",
      amount: 1300,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New bed",
      amount: 800,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  /*The below function is fired when we click on "add expense" button on the expenseform*/
  const addExpenseHandler = (expense) => {
    /*below the new state depends on the previous one */

    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <DarkModeProvider>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </DarkModeProvider>
    </>
  );
}

export default App;
