import React, { useReducer } from "react";

type CounterState = {
  count: number;
};
type UpdateAction = {
  type: "increment" | "descrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction;

const initialState = {
  count: 0,
};
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
      break;
    case "descrement":
      return { count: state.count - action.payload };
      break;
    case "reset":
      return initialState;
      break;

    default:
      return state;
      break;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => dispatch({ type: "increment", payload: 10 });
  const decrement = () => dispatch({ type: "descrement", payload: 10 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>Count: {state.count}</span>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
