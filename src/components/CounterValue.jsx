import * as React from "react";
import { useSelector } from "react-redux";

export const CounterValue = () => {
  const count = useSelector((state) => state);
  return (
    <>
      <h3>{count}</h3>
    </>
  );
};
