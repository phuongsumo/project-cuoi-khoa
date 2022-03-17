import React from 'react';
import style from './HomePage.module.css';
import HomeCarousel from './Carousel/HomeCarousel'

const HomePage = () => {
    return (
        <div className={style.home}>
            <HomeCarousel />
        </div>
    )
}

export default HomePage