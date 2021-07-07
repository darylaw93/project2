import React from "react";


const MarketList = (props) => {

const list = props.data;
      if (list === undefined){ 
          return "Loading..."
      }else{
           return list.map((data) => {
               return (<tr>
               <td>{data.name}</td>
               <td>${parseInt(data.volume_usd).toLocaleString()}</td>
               <td>${parseInt(data.price_usd).toLocaleString()}</td>
               </tr>)
            })
      }
}

export default MarketList