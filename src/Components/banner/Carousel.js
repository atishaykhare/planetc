import React from 'react';
import Slider from "react-slick";

import Slide from "./slide";
import banner1 from '../../Assets/Banner/banner1.jpg'
import banner2 from '../../Assets/Banner/banner2.jpg'
import banner3 from '../../Assets/Banner/banner3.jpg'
import banner4 from '../../Assets/Banner/banner4.jpg'


const Carousel = () => {
    const images = [banner1, banner2, banner3, banner4];

    const settings = {
        dots: true,
        infinite: true,
        className: "center",
        centerMode: true,
        lazyLoad: false,
        autoplay: true,
        speed: 3000,
        // autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        adaptiveHeight: true,

        appendDots: dots => (
            <div>
                <ul style={{
                    margin: '0px',
                    position: 'absolute',
                    bottom: '50px',
                    right: '25%',
                    fontSize: 'large',
                }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "10px",
                    height: '10px',
                    color: "white",
                    border: "2px white solid",
                    borderRadius: '50%'
                }}
            >
                &nbsp;
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };
    return (
        <div style={{color: 'white'}} className="bannerSlider">
            <Slider {...settings}>
                {images.map(item => <Slide key={item} img={item}/>)}
            </Slider>
        </div>
    );
};

export default Carousel;