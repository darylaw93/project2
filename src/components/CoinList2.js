import React from "react";
import CoinTable2 from "./CoinTable2";
import Header from "./CoinListHeader";
import { Link } from "react-router-dom";

function CoinList(props) {
  return (
    <>
      <table className="cryptoTable">
        <Header />
        <CoinTable2 data={props.data} />
      </table>
      <span className="left">
        <Link to="/">
          Prev 100
        </Link>
      </span>
    </>
  );
}

export default CoinList;
