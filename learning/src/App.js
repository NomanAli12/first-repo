import ExpanseItem from "./components/ExpanseItem";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./components/NewExpense/ExpenseChart";

const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses, setExpenses] = useState(DummyExpenses);
  // console.log('expense wala data ', expenses);

  const filteredExpense = expenses.filter((value) => {
    // console.log(value.date.getFullYear().toString());
    // const date2 = new Date()
    // console.log(value.date.getFullYear());
    
    return value.date.getFullYear().toString() === filteredYear;
  });

  const addExpenseDataHandler = (expanse) => {
    console.log("in app.js");
    setExpenses((prevExpense) => {
      return [expanse, ...prevExpense];
    });
  };
  const filterChangeHandler = (selectedYear) => {
    console.log("in app.js");
    setFilteredYear(selectedYear);
  };

  return (
    <div className="App">
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <ExpenseFilter
        selected={filteredYear}
        filterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense} />
      {filteredExpense.length === 0 ? (
        <p>No item found</p>
      ) : (
        filteredExpense.map((value) => {
          return (
            <ExpanseItem
              key={value.id}
              title={value.title}
              amount={value.amount}
              date={value.date}
            />
          );
        })
      )}
          
      {/* <ExpanseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpanseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpanseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      /> */}
    </div>
  );
}

export default App;
