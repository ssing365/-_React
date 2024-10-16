import React, { useEffect, useState } from "react";
import styles from './Select.module.css';

const App = () => {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const onChange = (event) => setDollar(event.target.value);
  const onChangeOption = (event) => {
    console.log(event.target.value); 
    const coin = coins.find(c => c.id === event.target.value);
    setSelectedCoin(coin);
  };

  const API = "https://api.coinpaprika.com/v1/tickers";
  useEffect(() => {
    fetch(API).then((response) =>
      response.json().then((json) => {
        setLoding(false);
        setCoins(json);
        console.dir(json[0]);
        setSelectedCoin(json[0]);
      })
    );
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      <hr />
      <strong>{loding ? "Loading..." : <select onChange={onChangeOption} value={selectedCoin ? selectedCoin.id : ""} className={styles.select}>
        {coins.map((coin) =>
          <option key={coin.id} value={coin.id}> {coin.name} ({coin.symbol}) : ${(coin.quotes.USD.price)} </option>
        )}
      </select>}</strong>
      <b>{loding ? null : `(Total Number of Coins : ${coins.length})`}</b>

      <br /><br /><br /><br />

      {/*코드 챌린지 : 사용자에게 달러 입력 받고 비트코인 얼만큼 살 수 있는지 알려주기*/}
      <form>
        <label>Dollars you have : $ </label>
        <input value={dollar} onChange={onChange} type="number" placeholder="dollors" />
        <br /><br />

        <label>{`How Much You Can Buy ${selectedCoin ? selectedCoin.name : 'this coin'} with Your Dollars : `}</label>
        <input value={selectedCoin ? (dollar / selectedCoin.quotes.USD.price).toFixed(6) : 0} type="number" placeholder="0" disabled />
      </form>
    </div>
  );
};

export default App;
