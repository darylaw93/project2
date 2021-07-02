import React from "react";

const CoinTable = (props) => {
  console.log("props.data", props.data);
  const list = props.data;

  if (list === undefined) {
    return "Loading...";
  } else {
    return list?.map((data, index) => {
      if (data.percent_change_24h < 0) {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td index={index}>{data.symbol}</td>
            <td>${data.price_usd}</td>
            <td className="negative">{data.percent_change_24h}%</td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td index={index}>{data.symbol}</td>
            <td>${data.price_usd}</td>
            <td className="positive">{data.percent_change_24h}%</td>
          </tr>
        );
      }
    });
  }
};

export default CoinTable;
