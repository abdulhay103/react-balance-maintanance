import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const IncomeExpese = () => {
  const { transections } = useContext(GlobalContext);
  const amounts = transections.map(transection => transection.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expence = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expence}</p>
      </div>
    </div>
  );
};
