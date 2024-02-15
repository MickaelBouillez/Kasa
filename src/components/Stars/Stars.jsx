import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function Star({ filled }) {
    return <i className={`fa${filled ? 's' : 'r'} fa-star`} style={{ color: filled ? '#FF6060' : '#CCCCCC' }}></i>;
}

function RatingStars({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<Star key={i} filled={i <= rating} />);
    }
    return <div>{stars}</div>;
}

export default RatingStars;
