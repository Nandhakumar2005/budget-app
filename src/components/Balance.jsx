export default function Balance({ income, expense }) {
  return (
    <div className="balance">
      <h2>Balance: ₹{income - expense}</h2>
      <p className="income">Income: ₹{income}</p>
      <p className="expense">Expense: ₹{expense}</p>
    </div>
  );
}