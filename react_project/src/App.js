import React, { useState, useEffect } from "react";

const App = () => {
  const [showing, setShowing] = useState(true);

  const onClick = () => setShowing((prev) => !prev);

  const Hello = () => {
    useEffect(() => {
      console.log('hi :)')
      return () => console.log('bye :(') //clean-up fn
    }, [])
    return <h1>Hello</h1>
  }

  return (
    <>
      <button onClick={onClick}>{showing ? 'show' : 'hide'}</button>
      {showing ? <Hello /> : null}
    </>
  );
};

export default App;
