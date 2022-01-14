import React from "react";
import PropTypes from "prop-types";
import Utilities from "../Utils/Utilities";

import chevronTop from "../Media/chevronTop.svg";

class UnrollElt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  toggle = () => {
    this.setState(state => ({
      ...state,
      isOpened: !state.isOpened,
    }));
  };

  render() {
    return (
      <div className={Utilities('UnrollElt', this.props.className)}>
        <button className={'trigger'} onClick={this.toggle}>
          {this.props.title}
          <img
            src={chevronTop}
            alt={`chevron vers le ${this.state.isOpened ? "bas" : "haut"}`}
            className={Utilities('chevron', {'down': this.state.isOpened,})}
          />
        </button>
        <div
          className={Utilities('content', {
            'opened': this.state.isOpened})}>
          <div className='wrapper'>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

UnrollElt.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
};

export default UnrollElt;