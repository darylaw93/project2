import React from "react";

const Header = () => {

  return (
    <tr>
      <th className="cryptoTable">Rank</th>
      <th className="cryptoTable">Name</th>
      <th className="cryptoTable"> Symbol</th>
      <th className="cryptoTable">Price(USD)</th>
      <th className="cryptoTable">+/- 24h(%)</th>
      <th className="cryptoTable">Volume(24h)</th>
      <th className="cryptoTable">Market Cap(USD)</th>
    </tr>
  );
};

export default Header;
