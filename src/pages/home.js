//search https://reactjs.org/link/controlled-components

import React, { useRef, useState } from "react";

const Home = () => {
  const click = function (data, e) {
    console.log("Click From Function ." + data);
    console.log("-------------------");
    console.log(e);
  };

  const click2 = (data, e) => {
    console.log(e);
    console.log(data);
  };

  const click3 = function (e) {
    console.log(e);
  };

  const [data, setData] = useState("");

  const click4 = (e, data, arr = [], obj = {}) => {
    // console.log(`This From Function e = ${e}`);
    console.log("This From Function e = ");
    console.log(e.target);
    console.log(`And this is data = ${data}`);
    console.log("Array :");
    console.log(arr);
    console.log("Object :");
    console.log(obj);
  };

  return (
    <div>
      <button
        onClick={(e) =>
          click4(e, "Yousef", ["Yousef", "ali", "Mohammed"], {
            name: "Yousef",
            age: 20,
          })
        }
      >
        BTN
      </button>
      <br />
      <button
        value={"Value"}
        id="id"
        className="classname"
        onClick={(e) => console.log(e.target.className)}
      >
        DICOVER
      </button>
      <br />
      <input
        value={data}
        onChange={(e) => {
          setData(e.target.value);
          console.log(data);
        }}
        type="text"
      />
      <br />
      <input
        value={data}
        onChange={(e) => {
          let data = e.target.value;
          if (data === data.toUpperCase()) {
            setData(data);
          }
        }}
        type="text"
      />
      <br />
      {/* <input
        onChange={(e) => {
          // console.log(e.nativeEvent);
          let obj = e.nativeEvent;
          console.log(obj.data);
        }}
        type="text"
      /> */}
      <br />
      {data}
    </div>
  );
};

export default Home;
