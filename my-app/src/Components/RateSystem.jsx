import React from "react";
import { HostsData } from "../HostsData";
import starFullImg from "../Media/Starfull.svg";
import starEmptyImg from "../Media/Starempty.svg";
// import Utilities from "../Utils/Utilities";

class RateSystem extends React.Component {
  render() {
  let hostRate = '';
  let hostRating = HostsData.forEach(host => {
    hostRate = host.rating;
    return hostRate;
  })
  hostRating = hostRate;

  const rate = []
    for(let i = 1; i <= 5; i++) {
        rate.push(i <= hostRating)
    }
    return (
      <ul className={'rating'}>
          { rate.map((star, index) => (
                <li className={star ? 'ratingStar active' : 'ratingStar'} key={`star-${index}`}>
                    <img src={star ? starFullImg : starEmptyImg} alt={star ? 'Star full' : 'Star empty'} />
                </li>
          ))}
      </ul>
    )
  }
} 



export default RateSystem;