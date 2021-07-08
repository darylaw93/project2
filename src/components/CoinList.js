import React from "react";
import CoinTable from "./CoinTable";
import Header from "./CoinListHeader";
import { Link } from "react-router-dom";

function CoinList(props) {
  console.log(props)
  return (
    <>
      <table className="cryptoTable">
        <Header />
        <CoinTable data={props.data} />
      </table>
      <span className="right">
        <Link to="/page2">
        Next 100 →
        </Link>
      </span>
    </>
  );
}

export default CoinList;
