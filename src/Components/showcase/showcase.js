import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import Slidecase from "./slidecase";

const Showcase = (props) => {
    const {sections} = props;
    const settings = {
        dots: false,
        autoplay:false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "center",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    className: "center",
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    className: "center",
                    centerMode: false,
                    arrows:false,
                }
            }
        ]
    };
    return (
        <Link to='/watch'>
            <Slider {...settings}>
                {sections.map(item => (
                    <Slidecase key={item} {...item}/>
                ))}
            </Slider>
        </Link>
    );
};

export default Showcase;