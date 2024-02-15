import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function Star({ filled }) {
    return <FontAwesomeIcon icon={filled ? solidStar : regularStar} style={{ color: filled ? '#FF6060' : '#CCCCCC', marginRight: '15px' }} />;
}

function RatingStars({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<Star key={i} filled={i <= rating} />);
    }
    return <div>{stars}</div>;
}

export default RatingStars;
