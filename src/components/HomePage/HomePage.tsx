import React from 'react';
import style from './HomePage.module.css';
import HomeCarousel from './Carousel/HomeCarousel';
import HotProduct from './HotProduct/HotProduct';

const HomePage = () => {
    return (
        <div className={style.home}>
            <HomeCarousel />
            <HotProduct />
        </div>
    )
}

export default HomePage