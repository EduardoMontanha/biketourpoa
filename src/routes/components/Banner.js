import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import slide1 from '../../images/banner/slide1.png';
import slide2 from '../../images/banner/slide2.png';

function Banner () {
    const params = {
        autoplay: {
            delay: 5000
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
    }

    return(
        <section id="banner">
            <Swiper {...params}>
                <div>
                    <Link to="/inclusao"><img src={slide1} alt="Inclusão" /></Link>
                </div>

                <div>
                    <Link to="/clube"><img src={slide2} alt="Inclusão" /></Link>
                </div>
            </Swiper>
        </section>
    );
}

export default Banner;