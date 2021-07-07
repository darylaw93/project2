import "./App.css";
import React, { useState, useEffect } from "react";
import CoinList from "./components/CoinList";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import MarketCap from "./components/MarketCap";
import Coin from "./components/Coin"



const coinURL = "https://api.nomics.com/v1/currencies/ticker?key=90cbf49ed7f5579b5b8c18dc354c3749d20705c9&ids=&interval=&convert=USD&per-page=100&page=1";
const mcapURL = "https://api.coinlore.net/api/global/";

function App() {
  const [coinList, setCoinList] = useState();
  const [marketCap, setMarketCap] = useState(0);
  const [map, setMap] = useState()

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
  }, []);

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
  }, []);



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
            <CoinList data={coinList}/>
          </Route>
          <Route path ="/id/:id">
            <Coin />
          </Route>
          <Route path="/"></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
