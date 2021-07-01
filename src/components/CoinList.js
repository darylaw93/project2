import { queryAllByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

const coinURL = "https://api.coinlore.net/api/tickers/";

function CoinList() {
  const [coinList, setCoinList] = useState();


  fetch(coinURL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Bad Response");
    })
    .then((data) => setCoinList(data?.data))
    .catch((error) => console.error(error));

  const list = coinList?.map((data, index) => {
    return <tr>
        <td>{data.name}</td>
        <td index={index}>{data.symbol}</td>
        <td>${data.price_usd}</td>
        <td>{data}</td>
        </tr>;
  });

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price(USD)</th>
        <th>Price Change 24hr</th>
      </tr>
      {list}
    </table>
  );
}

export default CoinList;
