import React from "react";
import { HostsData } from "../HostsData";
import Banner from "../Components/Banner";
import HostCard  from "../Components/HostCard";

import backgroundHome from "../Media/homePic.jpg"

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Banner background={backgroundHome}>
          Chez vous, partout et ailleurs
        </Banner>
        <section className ='hostsContainer'>
          {HostsData.map(Host => (
            <HostCard
              key={Host.id}
              id={Host.id}
              cover={Host.cover}
            >
              {Host.title}
            </HostCard>
          ))}
        </section>
      </>
    );
  }
}

export default HomePage;