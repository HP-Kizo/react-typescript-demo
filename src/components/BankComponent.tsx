import React, { useState } from "react";
import { deposit, withdraw, bankrupt } from "../store/bankSlice";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

function BankComponent() {
  const [value, setValue] = useState<number>(0);
  const money = useSelector((state: RootState) => state.bank.money);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Money: {money}</span>
      <br />
      <input
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(deposit(value));
          setValue(0);
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(value));
          setValue(0);
        }}
      >
        Withdraw
      </button>
      <button
        onClick={() => {
          dispatch(bankrupt());
          setValue(0);
        }}
      >
        Bankrupt
      </button>
    </div>
  );
}

export default BankComponent;
