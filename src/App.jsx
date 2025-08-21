import { useState } from "react";
import Summary from "./Summary";

function App() {
  const [budget, setBudget] = useState("");
  const [detail, setDetail] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    if (!budget || !detail || !amount) {
      alert("Please enter all detail");
      return;
    }

    const spent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const newAmount = Number(amount);

    if (spent + newAmount > Number(budget)) {
      alert("Your expense is more than your budget!");
      return;
    }

    setExpenses([...expenses, { detail, amount: newAmount }]);
    setDetail("");
    setAmount("");
  }

  return (
    <div className="p-4">

      <input
        type="number"
        placeholder="Enter Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="border p-1 m-1"
      />
      <br />

      <input
        type="text"
        placeholder="Expense Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        className="border p-1 m-1"
      />
      <br />

      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-1 m-1"
      />
      <br />

      <button onClick={addExpense} className="border p-2 bg-blue-300">
        Add Expense
      </button>

      <div className="mt-4">
        <div className="flex font-bold">
          <p className="px-4 border">S.NO</p>
          <p className="px-4 border">Info</p>
          <p className="px-4 border">Amount</p>
        </div>

        {expenses.map((exp, i) => (
          <div key={i} className="flex">
            <p className="px-4 border">{i + 1}</p>
            <p className="px-4 border">{exp.detail}</p>
            <p className="px-4 border">{exp.amount}</p>
          </div>
        ))}
      </div>

      <Summary budget={Number(budget)} expenses={expenses} />
    </div>
  );
}
export default App;
