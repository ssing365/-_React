import React, { useEffect, useState } from "react";

const App = () => {
  const [loding, setLoding] = useState(true);
  const [coins, setCoin] = useState([]);
  const API = "https://api.coinpaprika.com/v1/tickers";
  useEffect(() => {
    fetch(API).then((response) =>
      response.json().then((json) => {
        setLoding(false);
        setCoin(json);
        console.dir(json[0])
      })
    );
  }, []);
  return (
    <div>
      <h1>The Coins! {loding ? null : `(${coins.length})` }</h1>
      <hr />
      <strong>{loding ? "Loading..." : <select>
        {coins.map((coin, index) => 
          <option key={index}> {coin.name} ({coin.symbol}) : ${(coin.quotes.USD.price)} </option>
        )}
      </select>}</strong>
      {/*코드 챌린지 : 사용자에게 달러 입력 받고 비트코인 얼만큼 살 수 있는지 알려주기*/}
    </div>
  );
};

export default App;
