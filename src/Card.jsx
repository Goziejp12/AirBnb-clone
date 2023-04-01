import React from 'react'

export default function Card(props) {
    let badgeText
    if(props.info.openSpots === 0) {
        badgeText = 'SOLD OUT'
    }
    else if(props.info.location === "Online") {
        badgeText = 'ONLINE'
    }
    return (
        <div className='card'>
            {badgeText && <p className='badge'>{badgeText}</p>}  {/* This means, if badgeText is truthy, render the <p> element */}
            <img src={`./images/${props.info.coverImg}`} className='card-img' />
            <div className='card-details'>
                <img src='./images/star.png' className='card-star' />
                <span> {props.info.stats.rating}</span>
                <span> ({props.info.stats.reviewCount}) • </span>
                <span>{props.info.location}</span>
            </div>
            <p className='title'>{props.info.title}</p>
            <p><strong>From ${props.info.price}</strong> / persons</p>
        </div>
    )
}