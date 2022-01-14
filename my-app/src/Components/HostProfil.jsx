import React from "react";
import PropTypes from "prop-types";
import Utilities from "../Utils/Utilities";

class Host extends React.Component {
  render() {
    const [firstName, lastName] = this.props.name.split(" ");
    return (
      <div className={Utilities('host', this.props.className)}>
        <div className={'nameContainer'}>
          <p className={'name'}>{firstName}</p>
          <p className={'name'}>{lastName}</p>
        </div>
        <img
          className={'image'}
          src={this.props.imageUrl}
          alt={this.props.name}
        />
      </div>
    );
  }
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Host;