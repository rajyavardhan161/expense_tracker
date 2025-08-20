function Summary({ budget, expenses }) {
  const spent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = budget - spent;

  return (
    <div className="flex mt-6 font-bold">
      <p className="px-4 border">Total: {budget}</p>
      <p className="px-4 border">Spent: {spent}</p>
      <p className="px-4 border">Remaining: {remaining}</p>
    </div>
  );
}

export default Summary;
