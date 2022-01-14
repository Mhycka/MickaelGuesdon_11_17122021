import React from 'react'
import starFullImg from "../Media/StarFull.svg"
import starEmptyImg from "../Media/StarEmpty.svg"

export default function Rating({stars}) {
    const rate = []
    for(let i = 1; i <= 5; i++) {
        rate.push(i <= stars)
    }
    return (
        <ul className="rating">
            { rate.map((star, index) => (
                <li className={star ? 'rating-star active' : 'rating-star'} key={`star-${index}`}>
                    <img src={star ? starFullImg : starEmptyImg} alt={star ? 'Star full' : 'Star empty'} />
                </li>
            ))}
        </ul>
    )
}