import "./style.css";

import React, { useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);

  const Language = [
    "HTML",
    "React js",
    "CSS",
    "Vue js",
    "Next js",
    "JavaScript",
  ];

  const handleOnChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setData([...data, value]);
    } else {
      const filterdData = data.filter((e) => {
        return value !== e;
      });
      setData(filterdData);
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <h1 className="title">Programming Language</h1>

        <div className="body">
          <div>
          <label htmlFor="">Select Language : </label>
          <ul className="selected-item">
            {data.map((e) => {
              return <li>{e}</li>;
            })}
          </ul>
          </div>

          <div>
            {Language.map((e) => {
              return (
                <>
                  <label htmlFor={e}>
                    <input
                      value={e}
                      onChange={handleOnChange}
                      id={e}
                      type="checkbox"
                    />
                    {e}
                  </label>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
