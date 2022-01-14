import React from 'react'
import chevronLeftImg from "../Media/chevronLeft.svg"
import chevronRightImg from "../Media/chevronRight.svg"

export default function BtnSlide({direction, goTo}) {
    return (
        <button onClick={goTo} type="button" className={direction === 'next' ? 'slider-button next' : 'slider-button previous'}>
            <img 
            src={direction === 'next' ? chevronRightImg : chevronLeftImg}
            alt={direction === 'next' ? 'Next image' : 'Previous image'}
            />
        </button>
    )
}