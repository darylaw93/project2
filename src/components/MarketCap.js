import React  from "react";

function MarketCap(props) {
    return (
        <table>
        <td>
          Total Marketcap: ${(props?.data?.total_mcap)?.toLocaleString()}
        </td>
        <td>Total Market Volume: ${(props?.data?.total_volume)?.toLocaleString()}
        </td>
      </table>
    );
}

export default MarketCap;