import React, { createContext } from "react";
import Main from "./main";



export const Moahmmed = createContext();



const Factory = () => {

  return (
    <div>
      <Moahmmed.Provider value={"Order-IPhone"}>
        <Main />
      </Moahmmed.Provider>
    </div>
  );
};

export default Factory;
