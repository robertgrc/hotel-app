import { TornadoSharp } from "@mui/icons-material";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementBy,
} from "../store/slices/counter/counterSlice";

const AppRedux = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>count is {counter}</p>
      <button type="button" onClick={() => dispatch(increment())}>
        <h1>Incrementar </h1>
      </button>

      <button type="button" onClick={() => dispatch(decrement())}>
        <h1>decrementar</h1>
      </button>
      <button type="button" onClick={() => dispatch(incrementBy(3))}>
        <h1>incrementar en 3</h1>
      </button>
    </div>
  );
};

export default AppRedux;
