import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import CoinTable from './CoinTable'

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
      .then((data) => setCoinList(data.data),)
      .catch((error) => console.error(error));
  }, [coinList]);

  // const list = coinList?.map((data, index) => {
  //   if (data.percent_change_24h < 0){
  //     return (
  //     <tr>
  //     <td>{index + 1}</td>
  //     <td>{data.name}</td>
  //     <td index={index}>{data.symbol}</td>
  //     <td >${data.price_usd}</td>
  //     <td className="btc">{data.price_btc}</td>
  //     <td className="negative">{data.percent_change_24h}%</td>
  //   </tr>
  //   )
  //   }else{
  //     return (
  //     <tr>
  //       <td>{index + 1}</td>
  //       <td>{data.name}</td>
  //       <td index={index}>{data.symbol}</td>
  //       <td >${data.price_usd}</td>
  //       <td className="btc">{data.price_btc}</td>
  //       <td className="positive">{data.percent_change_24h}%</td>
  //     </tr>
  //   );
  // }});


  return (
    <table>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price(USD)</th>
        <th>Price(BTC)</th>
        <th>+/- 24h(%)</th>
      </tr>
      {/* {list} */}
      <CoinTable data={coinList}/>
    </table>
  );
}

export default CoinList;
