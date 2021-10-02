import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);

  return <p>Counter : {value} </p>;
};

export default Counter;
