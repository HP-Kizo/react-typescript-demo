import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoneyState {
  money: number;
}

const initialState: MoneyState = {
  money: 0,
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.money += action.payload;
    },
    withdraw: (state, action) => {
      state.money -= action.payload;
    },
    bankrupt: (state) => {
      state.money = 0;
    },
  },
});

export const { deposit, withdraw, bankrupt } = bankSlice.actions;
export default bankSlice.reducer;
