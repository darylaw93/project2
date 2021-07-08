import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinPercentage from "./CoinPercentage";

const Coin = () => {
  const [coin, setCoin] = useState();
  const [coinInfo, setCoinInfo] = useState();
  const params = useParams();
  const id = params.id;
  const name = params.name.toLowerCase();

  const coinURL =`https://api.nomics.com/v1/currencies/ticker?key=90cbf49ed7f5579b5b8c18dc354c3749d20705c9&ids=${id}&interval=&convert=USD&per-page=100&page=1`;
  const coinInfoURL =`https://api.coingecko.com/api/v3/coins/${name}?tickers=true&market_data=true&community_data=false&developer_data=false`;

  useEffect(() => {
    fetch(coinURL, {headers:{"Accept": "application/json"}})
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Bad Response");
      })
      .then((data) => setCoin(data[0]))
      .catch((error) => console.log(error));
      // eslint-disable-next-line
  }, [coin]);

  useEffect(() => {
    fetch(coinInfoURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Bad Response");
      })
      .then((data) => setCoinInfo(data))
      .catch((error) => console.log(error));
      // eslint-disable-next-line
  }, [coinInfo]);

  if (coin === undefined || coinInfo === undefined) {
    return "Loading...";
  } else if (coin.price < 0.01) {
    return (
      <div>
        <div className="coinsL">
          <h1>
            <img src={coin.logo_url} alt="" className="coinLogo"></img>
            {coin.name}({coin.symbol})
          </h1>
          <div id="center">Price(USD) (+/-%)</div>
          <h2 id="center">
            ${coin.price}
            <CoinPercentage data={coin} />
          </h2>
        </div>
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
            <th>Homepage</th>
            <th>Total Supply</th>
          </tr>
          <tr>
            <td>${parseFloat(coin.high).toLocaleString()}</td>
            <td>
              <a href={coinInfo.links.homepage}>{coinInfo.links.homepage}</a>
            </td>
            <td>
              {parseInt(coin.max_supply).toLocaleString()} {id}
            </td>
          </tr>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <div className="coins">
          <h1>
            <img src={coin.logo_url} alt="" className="coinLogo"></img>
            {coin.name} ({coin.symbol})
          </h1>
          <div>Price(USD) (+/-%)</div>
          <h2 id="center">
            ${parseFloat(coin.price).toLocaleString()}
            <CoinPercentage data={coin} />
          </h2>
        </div>
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
            <th>Homepage</th>
            <th>Total Supply</th>
          </tr>
          <tr>
            <td>${parseFloat(coin.high).toLocaleString()}</td>
            <td>
              <a href={coinInfo.links.homepage}>{coinInfo.links.homepage}</a>
            </td>
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
