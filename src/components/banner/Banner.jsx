import React from 'react';
import './banner.css';

function Banner ()  {
    return (
        <div className='banner'>
            <img src="/banner.jpg" alt="banner"></img>
            <h1>Chez vous,<br className="mobile-break"/> partout et ailleurs</h1>
        </div>
    )
}

export default Banner;