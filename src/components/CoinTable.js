import React from "react";

const CoinTable = (props) => {

  const list = props.data;
  if (list === undefined) {
    return "Loading...";
  } else {
    return list?.map((data, index) => {
        const marketcap = parseInt(data.market_cap_usd).toLocaleString()
      if (data.percent_change_24h < 0) {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td index={index}>{data.symbol}</td>
            <td>${data.price_usd}</td>
            <td className="btc">{data.price_btc}</td>
            <td className="negative">{data.percent_change_24h}%</td>
            <td>${marketcap}</td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td index={index}>{data.symbol}</td>
            <td>${data.price_usd}</td>
            <td className="btc">{data.price_btc}</td>
            <td className="positive">{data.percent_change_24h}%</td>
            <td>${marketcap}</td>
          </tr>
        );
      }
    });
  }
};

export default CoinTable;
