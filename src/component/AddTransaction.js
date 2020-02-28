import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransection } = useContext(GlobalContext);

  // Submit Controler
  const onSubmitHandler = e => {
    e.preventDefault();
    const newTransection = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount
    };
    addTransection(newTransection);
    setText("");
    setAmount("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
