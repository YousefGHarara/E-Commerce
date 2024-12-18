import React, { useEffect, useState } from "react";
import One from "./one";
var DATA = require("./data.json");

const Main = () => {
  console.log(DATA);

// ////////////////////////////////////////////////////////

//   const myAPI = function (apiLink) {
  //     return new Promise((res, rej) => {
//       let myRequest = new XMLHttpRequest();
//       myRequest.onload = function () {
//         if (this.status === 400 && this.readyState === 4) {
//           res(JSON.parse(this.responseText));
//         } else {
//           rej(Error("Data Not Found !"));
//         }
//       };

//       myRequest.open("get", apiLink);
//       myRequest.send();
//     });
//   };

//   myAPI(`
    
//     [
//   {
//     "name": "Yousef",
//     "age": 20,
//     "coutnry": "Palestine"
//   },
//   {
//     "name": "Eren",
//     "age": 22,
//     "coutnry": "Anime"
//   },
//   {
//     "name": "Mostafa",
//     "age": 12,
//     "coutnry": "Egypt"
//   }
// ]

//     `);

// ////////////////////////////////////////////////////////


  const [friends, setFriends] = useState(DATA.map((e) => e.name));
  return (
    <div>
      <One title={friends.join(" | ")} />
    </div>
  );
};

export default Main;
