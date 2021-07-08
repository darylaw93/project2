import React from "react";
import { Link } from "react-router-dom";

const CoinTable = (props) => {
  const List = props.data;
  if (List === undefined) {
    return "Loading...";
  } else {
    return List?.map((data, index) => {
      const marketcap = parseInt(data.market_cap).toLocaleString();
      const percent = (data["1d"].price_change_pct * 100).toFixed(2);
      const volume = parseInt(data["1d"].volume);
      const price = data.price.toLocaleString();
      if (percent < 0 && price > 0.01) {
        return (
          <tr className="cryptoTable">
            <td>{data.rank}</td>
            <td className="name">
              <Link to={`/id/${data.id}/${data.name}`}>
                <img src={data.logo_url} className="logo"></img> {data.name}
              </Link>
            </td>
            <td index={index}>{data.symbol}</td>
            <td>${parseFloat(price).toFixed(2)}</td>
            <td className="negative">↓{percent}%</td>
            <td>${volume.toLocaleString()}</td>
            <td>${marketcap}</td>
          </tr>
        );
      } else if (percent > 0 && price > 0.01) {
        return (
          <tr className="cryptoTable">
            <td>{data.rank}</td>
            <td className="name">
              <Link to={`/id/${data.id}/${data.name}`}>
                <img src={data.logo_url} className="logo"></img> {data.name}
              </Link>
            </td>
            <td index={index}>{data.symbol}</td>
            <td>${parseFloat(price).toFixed(2)}</td>
            <td className="positive">↑{percent}%</td>
            <td>${volume.toLocaleString()}</td>
            <td>${marketcap}</td>
          </tr>
        );
      } else if (percent < 0 && price < 0.01) {
        return (
          <tr className="cryptoTable">
            <td>{data.rank}</td>
            <td className="name">
              <Link to={`/id/${data.id}/${data.name}`}>
                <img src={data.logo_url} className="logo"></img> {data.name}
              </Link>
            </td>
            <td index={index}>{data.symbol}</td>
            <td>${price}</td>
            <td className="negative">↓{percent}%</td>
            <td>${volume.toLocaleString()}</td>
            <td>${marketcap}</td>
          </tr>
        );
      } else {
        return (
          <tr className="cryptoTable">
            <td>{data.rank}</td>
            <td className="name">
              <Link to={`/id/${data.id}/${data.name}`}>
                <img src={data.logo_url} className="logo"></img> {data.name}
              </Link>
            </td>
            <td index={index}>{data.symbol}</td>
            <td>${price}</td>
            <td className="positive">↑{percent}%</td>
            <td>${volume.toLocaleString()}</td>
            <td>${marketcap}</td>
          </tr>
        );
      }
    });
  }
};

export default CoinTable;
