import React, { useContext, useEffect, useReducer, useState } from "react";
import { Moahmmed } from "./factory";

const Two = (props) => {
  const myContext = useContext(Moahmmed);

  useEffect(() => {
    console.log("YOUSEF");
  }, []);

  const [data, setData] = useState(0);

  const reducer = (state, action) => {
    switch (action) {
      case "+":
      
      console.log("Sting");
      console.log(1234);
      console.log(true);
      console.log(false);
      console.log(99.9);
      return state + 1;

      case "-":
        return state - 1;
      case "reset":
        return (state = 0);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>TWO</h1>
      <h2>{props.friends}</h2>

      <h1>
        {myContext} <span onClick={() => setData(data + 1)}>Yousef</span>
      </h1>

      <mark>{data}</mark>

      <button onClick={() => dispatch("+")}>+</button>
      <button onClick={() => dispatch("-")}>-</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <h2>{state}</h2>
    </div>
  );
};

export default Two;
