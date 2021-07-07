import React  from "react";

function MarketCap(props) {
    return (
        <table className="cryptoTable">
        <td className="cryptoTable">
          Total Marketcap: ${(props?.data?.total_mcap)?.toLocaleString()}
        </td>
        <td className="cryptoTable">Total Market Volume (24H): ${(props?.data?.total_volume)?.toLocaleString()}
        </td>
      </table>
    );
}

export default MarketCap;