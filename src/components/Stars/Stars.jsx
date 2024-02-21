import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function Star({ filled, starSize }) {
    return <FontAwesomeIcon icon={filled ? solidStar : regularStar} style={{ color: filled ? '#FF6060' : '#CCCCCC', marginRight: '5px', fontSize: starSize, height: starSize }} />;
}

function RatingStars({ rating }) {
    const [starSize, setStarSize] = useState(window.innerWidth < 768 ? '18px' : '24px');

    useEffect(() => {
        const handleResize = () => {
            setStarSize(window.innerWidth < 768 ? '18px' : '24px');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<Star key={i} filled={i <= rating} starSize={starSize} />);
    }
    return <div className='rate_stars'>{stars}</div>;
}

export default RatingStars;
