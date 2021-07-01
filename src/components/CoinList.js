import { queryAllByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

const coinURL = "https://api.coinlore.net/api/tickers/";

function CoinList() {
  const [coinList, setCoinList] = useState();

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
  }, []);

  const list = coinList?.map((data, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{data.name}</td>
        <td index={index}>{data.symbol}</td>
        <td>${data.price_usd}</td>
        <td>{data.percent_change_24h}%</td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price(USD)</th>
        <th>Price Change 24hr(%)</th>
      </tr>
      {list}
    </table>
  );
}

export default CoinList;
