import React from "react";
import CoinTable from "./CoinTable";
import Header from "./CoinListHeader";

function CoinList(props) {

  return (
    <table className="cryptoTable">
      <Header />
      <CoinTable data={props.data} datap={props.coinData}/>
    </table>
  );
}

export default CoinList;
