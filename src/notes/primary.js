import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "./card";
import "./style.css";
import Data from "./items.json";

import React, { useEffect } from "react";

var jsonData = require("./items.json");


const Primary = () => {
  // useEffect(() => {
  //   const data = fetch("./items.json");
  //   data.then((e) => console.log(e.json()))
  // })

  const [serachParams, setSerachParams] = useSearchParams({
    q: "",
    onlySearch: false,
    name: "Yousef",
    age: 20,
    country: "gaza",
  });

  const q = serachParams.get("q");
  const onlySearch = serachParams.get("onlySearch") === "true";

  console.log(onlySearch);
  console.log(typeof onlySearch);
  console.log(Data);

  const navigate = useNavigate();

  return (
    <div className="primary">
      <header>
        {jsonData.map((e, i) => {
          return (
            <Card
              // click={ _ => {
              //   navigate("/secondary?id=" + e.id)
              // }}
              key={i}
              itemName={e.itemName}
              passport={e.passport}
            >
              <button
                onClick={() => {
                  navigate("/secondary?id=" + e.id);
                  // if you need to use this [ more security, data hidden, just only one tab ] ///////////////////////
                  // And you need to use [ use location to handling ]
                  // navigate("/secondary", {state : {id: e.id}});
                }}
              >
                Details
              </button>
              {/* <h1>Heloo</h1>
                <q><mark><del>YOUSEF</del></mark></q> */}
            </Card>
          );
        })}
        <div>
          <input
            value={q}
            type="text"
            onChange={(e) =>
              setSerachParams(
                (prev) => {
                  prev.set("q", e.target.value);
                  return prev;
                },
                { replace: false }
              )
            }
          />
          <br />
          <label htmlFor="ch">Only Search Compouter </label>
          <input
            checked={onlySearch}
            id="ch"
            type="checkbox"
            onChange={(e) => {
              setSerachParams((prev) => {
                prev.set("onlySearch", e.target.checked);
                return prev;
              });
            }}
          />
        </div>
      </header>
    </div>
  );
};

export default Primary;
