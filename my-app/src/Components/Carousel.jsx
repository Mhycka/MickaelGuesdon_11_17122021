import React from "react";
import PropTypes from "prop-types";
import Utilities from "../Utils/Utilities";
import CarouselUtils from "../Utils/CarouselUtils";


import ChevronRight from "../Media/chevronRight.svg";
import ChevronLeft from "../Media/chevronLeft.svg";


class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      slide: null,
    };
  }

  changeCurrentImage = step => {
    this.setState(state => {
      const imagesLength = this.props.images.length;
      return {
        currentImageIndex: CarouselUtils(state.currentImageIndex + step, imagesLength),
        slide: step > 0 ? "left" : "right",
      };
    });
  };

  render() {
    const { images } = this.props;
    const { currentImageIndex, slide } = this.state;

    const currentImage = images[currentImageIndex];
    const previousImage = images[CarouselUtils(currentImageIndex - 1, images.length)];
    const nextImage = images[CarouselUtils(currentImageIndex + 1, images.length)];

    return (
      <div className="carousel">
        <div
          className="picBanner"
          onAnimationEnd={() => {
            this.setState(state => ({ ...state, slide: null }));
            }}
          >
          <img
            src={previousImage}
            key={images.length > 2 || slide !== "right" ? previousImage : ""}
            alt=""
            className={Utilities('picture', 'previous', {
              'slideLeft': slide === "left",
              'slideRight': slide === "right",
            })}
          />
          <img
            key={currentImage}
            src={currentImage}
            alt=""
            className={Utilities('picture', {
              'slideLeft': slide === "left",
              'slideRight': slide === "right",
            })}
          />
          <img
            src={nextImage}
            key={images.length > 2 || slide === "right" ? nextImage : ""}
            alt=""
            className={Utilities('picture', 'next', {
              'slideLeft': slide === "left",
              'slideRight': slide === "right",
            })}
          />
        </div>
        <div className="overlay">
          <button onClick={() => this.changeCurrentImage(-1)} className="button">
            <img src={ChevronLeft} alt="chevron vers la gauche" className={Utilities('chevron', 'chevronLeft')}/>
          </button>
          <p className="displayedImageNumber">{this.state.currentImageIndex + 1}/{images.length}</p>
          <button onClick={() => this.changeCurrentImage(1)} className="button">
            <img src={ChevronRight} alt="chevron vers la droite" className={Utilities('chevron', 'chevronRight')}/>
          </button>          
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;