import React, { useContext } from "react";
import { TransectionItem } from "./Transection";
import { GlobalContext } from "../context/GlobalContext";

export const TransactionList = () => {
  const { transections } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transections.map(transection => (
          <TransectionItem key={transection.id} transection={transection} />
        ))}
      </ul>
    </>
  );
};
