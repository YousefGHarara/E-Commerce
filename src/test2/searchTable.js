import { replace, useSearchParams } from "react-router-dom";
import "./style.css";

import React, { useState } from "react";
// import DATA from "./serach.json";

// console.log(DATA);

const data_array = [
  "Yousef is here",
  "Good Moring",
  "Hava a lovely day",
  "Good after noon",
  "The best place is my home",
  "Yelina is dead Ohh",
  "Mohammed is begger than Ahmed",
  "Yousef is here",
  "Good Moring",
  "Hava a lovely day",
  "Good after noon",
  "The best place is my home",
  "Yelina is dead Ohh",
  "Mohammed is begger than Ahmed",
];

const SearchTable = () => {
  // const [value, setValue] = useState("");

  const [serachParams, setSerachParams] = useSearchParams({ value: "" });

  const value = serachParams.get("value");

  const handleOnSerach = (serachTerm) => {
    setSerachParams((prev) => {
      prev.set("value", serachTerm);
      return prev;
    });
  };

  return (
    <div className="container">
      <div className="content">
        <input placeholder="Serach with name"
          value={value}
          type="text"
          onChange={(e) => {
            setSerachParams((prev) => {
              prev.set("value", e.target.value);
              return prev;
            });
          }}
        />
        
        <div className="box">
          {data_array
            .filter((f) => {
              const searchTerm = value.toLowerCase();
              const list = f.toLowerCase();
              console.log(list.startsWith(searchTerm) && value);
              return list.startsWith(searchTerm) && value;
            })
            .map((e, i) => {
              return (
                <p onClick={() => handleOnSerach(e)} key={i}>
                  {e}
                </p>
              );
            })
            .slice(0, 5)}
        </div>
      </div>
    </div>
  );
};

export default SearchTable;
