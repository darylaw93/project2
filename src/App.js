import "./App.css";
import React, { useState, useEffect } from "react";
import CoinList from "./components/CoinList";
import CoinList2 from "./components/CoinList2";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import MarketCap from "./components/MarketCap";
import Coin from "./components/Coin"


const coinURL = "https://api.nomics.com/v1/currencies/ticker?key=90cbf49ed7f5579b5b8c18dc354c3749d20705c9&ids=&interval=&convert=USD&per-page=100&page=1";
const coinURL2 = "https://api.nomics.com/v1/currencies/ticker?key=90cbf49ed7f5579b5b8c18dc354c3749d20705c9&ids=&interval=&convert=USD&per-page=100&page=2";
const mcapURL = "https://api.coinlore.net/api/global/";

function App() {
  const [coinList, setCoinList] = useState();
  const [coinList2, setCoinList2] = useState();
  const [marketCap, setMarketCap] = useState(0);

  useEffect(() => {
    fetch(coinURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Bad Response");
      })
      .then((data) => setCoinList(data))
      .catch((error) => console.error(error));
  }, [coinURL]);

  useEffect(() => {
    fetch(coinURL2)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Bad Response");
      })
      .then((data) => setCoinList2(data))
      .catch((error) => console.error(error));
  }, [coinURL2]);

  useEffect(() => {
    fetch(mcapURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Bad Response");
      })
      .then((data) => setMarketCap(data[0]))
      .catch((error) => console.error(error));
  }, [mcapURL]);




  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>Cryptocurrencies</h1>
        </Link>
        <MarketCap data={marketCap} />
      </nav>
      <main>
        
        <Switch>
          <Route exact path="/">
            <CoinList data={coinList}/>
          </Route>
          <Route path="/page2">
            <CoinList2 data={coinList2}/>
          </Route>
          <Route path ="/id/:id/:name">
            <Coin />
          </Route>
          <Redirect to="/" />
          </Switch>
      </main>
    </div>
  );
}

export default App;
