import * as React from "react";
import { CounterValue } from "./CounterValue";
import { useDispatch } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <CounterValue />
        <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};
