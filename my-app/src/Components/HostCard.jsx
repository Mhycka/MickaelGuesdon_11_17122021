import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class HostCard extends React.Component {
  render() {
    return (
      <Link
        className='hostCard'
        style={{ backgroundImage: `url("${this.props.cover}")` }}
        to={`/Hosts/${this.props.id}`}
      >
        <span className='title'>{this.props.children}</span>
      </Link>
    );
  }
}
HostCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

export default HostCard;