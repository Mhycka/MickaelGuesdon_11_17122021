import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import withRouteParams from "../Utils/RouteParam";
import { getHostById } from "../HostsData";
import UnrollElt from "../Components/UnrollElt";
import Rating from "../Components/RateSystem";
import Host from "../Components/HostProfil";
import Carousel from "../Components/Carousel";
import Tags from "../Components/Tags";


class HostPage extends React.Component {
  render() {
    const host = getHostById(this.props.params.id);
    if (host == null) {
      console.log(host)

      return <Navigate to="/404" />;
    }
    return (
      <>{host.pictures.length > 1 ? (
          <Carousel images={host.pictures} />
        ) : (
          <img
            src={host.pictures[0]}
            alt=""
            className='hostPicture'
          />
        )}
        <div className='hostInfo'>
          <h2 className='title'>{host.title}</h2>
          <Host
            className='host'
            name={host.host.name}
            imageUrl={host.host.picture}
          />
          <p className='location'>{host.location}</p>
          <Tags tags = {host.tags} />
          <Rating className='rating'>
            {Number(host.rating)}
          </Rating>
        </div>
        <div className='sectionCard'>
          <UnrollElt title="Description" className='collapsible'>
            {host.description}
          </UnrollElt>
          <UnrollElt title="Equipements" className='collapsible'>
            <ul className='equipmentList'>
              {host.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          </UnrollElt>
        </div>
      </>
    );
  }
}

HostPage.propTypes = {
  params: PropTypes.objectOf(PropTypes.string).isRequired,
  navigate: PropTypes.func,
};

export default withRouteParams(HostPage);