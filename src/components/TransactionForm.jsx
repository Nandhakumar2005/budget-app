import { useState } from "react";

export default function TransactionForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTx = {
      id: Date.now(),
      text,
      amount,
      type,
    };

    addTransaction(newTx);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}