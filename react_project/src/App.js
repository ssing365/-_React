import React, { useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  function onClick() {
    setCounter((prev) => prev + 1);
  }
  return (
    <>
      <h1 className={styles.potato}>Welcome!</h1>
      <h1>{counter}</h1>
      <Button onClick={onClick} text="up!" />
    </>
  );
};

export default App;
