import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  function onClick() {
    setCounter((prev) => prev + 1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    console.log("this code run only once. call an API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) { //이건 처음 렌더링할 때도 실행되지 않음.
      console.log(
        `this code run when keyword changes and length of keyword is more than 5. search for ${keyword}`
      );
    }
  }, [keyword]);
  useEffect(() => {
    console.log(`this code run when counter changes`);
  }, [counter]);
  useEffect(() => {
    console.log(`this code run when counter and keyword changes`);
  }, [counter, keyword]);

  return (
    <>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>up!</button>
    </>
  );
};

export default App;
