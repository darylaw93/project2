import React from "react";

const CoinPercentage = (props) => {
  const coins = props.data;
  if (coins["1d"].price_change_pct > 0) {
    return (
      <h5 className="positive" id="rightp">
         ↑{(coins["1d"].price_change_pct * 100).toFixed(2)}%
      </h5>
    );
  } else {
    return (
      <h5 className="negative" id="rightp">
        ↓{(coins["1d"].price_change_pct * 100).toFixed(2)}%
      </h5>
    );
  }
};
export default CoinPercentage;
