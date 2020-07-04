import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

import slide1 from '../../images/banner/slide1.png';
import slide2 from '../../images/banner/slide2.png';

function Banner () {
    const params = {
        autoplay: {
            delay: 2000,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    return(
        <section id="banner">
            <Swiper {...params}>
                <div className="slide">
                    <Link to=""><img src={slide1} alt="Inclusão" /></Link>
                </div>

                <div className="slide">
                    <Link to="/clube"><img src={slide2} alt="Inclusão" /></Link>
                </div>
            </Swiper>
        </section>
    );
}

export default Banner;