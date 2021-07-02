import "./App.css";
import React, { useState, useEffect } from "react";
import CoinList from "./components/CoinList";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import MarketCap from "./components/MarketCap";

const coinURL = "https://api.coinlore.net/api/tickers/";
const mcapURL = "https://api.coinlore.net/api/global/";

function App() {
  const [coinList, setCoinList] = useState();
  const [marketCap, setMarketCap] = useState(0);

  useEffect(() => {
    fetch(coinURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Bad Response");
      })
      .then((data) => setCoinList(data.data))
      .catch((error) => console.error(error));
  }, [coinList]);

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
  }, [marketCap]);

  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/top100"></Link>
      </nav>
      <main>
        <MarketCap data={marketCap} />
        <Switch>
          <Route exact path="/">
            <CoinList data={coinList} />
          </Route>
          <Route path="/"></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
