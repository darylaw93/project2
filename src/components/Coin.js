import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarketList from "./MarketList";
import MarketHeader from "./MarketHeader";
import CoinPercentage from "./CoinPercentage"


const Coin = () => {
  const [coin, setCoin] = useState();
  const params = useParams();
  const id = params.id;

  const coinURL = `https://api.nomics.com/v1/currencies/ticker?key=90cbf49ed7f5579b5b8c18dc354c3749d20705c9&ids=${id}&interval=&convert=USD&per-page=100&page=1`;

  useEffect(() => {
    fetch(coinURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Bad Response");
      })
      .then((data) => setCoin(data[0]))
      .catch((error) => console.log(error));
  }, [coin]);

  if (coin === undefined) {
    return "Loading...";
  } else if (coin.price < 0.01) {
    return (
      <div className="coins">
        <div>
          <h1>
            <img src={coin.logo_url} className="coinLogo"></img>
            {coin.name}({coin.symbol})
          </h1>
        </div>
        <div>Price(USD) (+/-%)</div>
        <h2 id="left">
          ${coin.price}  
          </h2>
          <CoinPercentage data={coin} />
        <table className="CoinsInfo">
          <tr>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
          </tr>
          <tr>
            <td>${parseInt(coin.market_cap).toLocaleString()}</td>
            <td>${parseInt(coin["1d"].volume).toLocaleString()}</td>
            <td>
              {parseInt(coin.circulating_supply).toLocaleString()} {id}
            </td>
          </tr>
          <tr>
            <th>All Time High</th>
            <th>Volume(24h)</th>
            <th>Total Supply</th>
          </tr>
          <tr>
            <td>${parseFloat(coin.high).toLocaleString()}</td>
            <td>${parseInt(coin["1d"].volume).toLocaleString()}</td>
            <td>
              {parseInt(coin.max_supply).toLocaleString()} {id}
            </td>
          </tr>
        </table>
      </div>
    );
  } else {
    return (
      <div className="coins">
        <div>
          <h1>
            <img src={coin.logo_url} className="coinLogo"></img>
            {coin.name} ({coin.symbol})
          </h1>
        </div>
        <div>Price(USD) (+/-%)</div>
        <h2 id="left">
          ${parseFloat(coin.price).toLocaleString()}{" "}
        </h2>
        <CoinPercentage data={coin} />
        <p></p>
        <table className="CoinsInfo">
          <tr>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
          </tr>
          <tr>
            <td>${parseInt(coin.market_cap).toLocaleString()}</td>
            <td>${parseInt(coin["1d"].volume).toLocaleString()}</td>
            <td>
              {parseInt(coin.circulating_supply).toLocaleString()} {id}
            </td>
          </tr>
          <tr>
            <th>All Time High</th>
            <th>Volume(24h)</th>
            <th>Total Supply</th>
          </tr>
          <tr>
            <td>${parseFloat(coin.high).toLocaleString()}</td>
            <td>${parseInt(coin["1d"].volume).toLocaleString()}</td>
            <td>
              {parseInt(coin.max_supply).toLocaleString()} {id}
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default Coin;
