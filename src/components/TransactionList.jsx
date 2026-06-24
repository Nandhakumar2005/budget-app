import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="list">
      {transactions.map((tx) => (
        <TransactionItem
          key={tx.id}
          tx={tx}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </div>
  );
}