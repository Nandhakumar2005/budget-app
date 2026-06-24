export default function TransactionItem({ tx, deleteTransaction }) {
  return (
    <div className={`item ${tx.type}`}>
      <span>{tx.text}</span>
      <span>₹{tx.amount}</span>
      <button onClick={() => deleteTransaction(tx.id)}>X</button>
    </div>
  );
}