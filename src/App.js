import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import One from "./pages/one";
import Main from "./pages/main";
import Factory from "./pages/factory";
import Primary from "./notes/primary";
import Secondary from "./notes/secondary";
import Search from "./test1/search";
import SearchTable from "./test2/searchTable";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Primary />} />
      <Route path="/secondary" element={<Secondary />} /> */}
      {/* <Route path="/" element={<Search />} /> */}
      <Route path="/" element={<SearchTable />} />
      <Route path="/*" element={<h1>Oopse !! 🥹🥹</h1>} />
    </Routes>
  );
};

export default App;
