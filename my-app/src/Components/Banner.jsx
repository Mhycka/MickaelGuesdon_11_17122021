import React from "react";
import PropTypes from "prop-types";


class Banner extends React.Component {
  render() {
    return (
      <div className='banner' style={{ backgroundImage: `url("${this.props.background}")` }}>
        {this.props.children != null && (
          <h2 className='inside'>{this.props.children}</h2>
        )}
      </div>
    );
  }
}

Banner.propTypes = {
  children: PropTypes.string,
  background: PropTypes.string,
};

export default Banner;