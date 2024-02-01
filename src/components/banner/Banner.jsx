import React from 'react';
import './banner.css';

function Banner ()  {
    return (
        <div className='banner'>
            {/*<img src="/Projet-8/kasa/public/banner.jpg" alt="banner"></img>*/}
            <img src="https://unsplash.it/1440/700" alt="banner" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;