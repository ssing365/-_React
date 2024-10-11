import React, { useState } from 'react';

const App = () => {
    const [counter, setCounter] = React.useState(0);
    
    const onClick = () => {
      setCounter((current) => current+10)
    }
  
    return(
      <div>
        <h3>{counter}번 클릭되었습니다.</h3>
        <button onClick={onClick}>click me</button>
      </div>
    )
  };

export default App;