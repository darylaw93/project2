import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import CoinList from "./components/CoinList"
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>Home</h1>
          </Link>
          <Link to="/currencies">
          <h1>Top 100 Cryptos</h1>
          </Link >
      </nav>
      <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/currencies">
          <CoinList />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </div>
  );
}

export default App;
