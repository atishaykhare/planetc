import React from 'react';
import Slider from "react-slick";
import Slidecase from "./slidecase";

const Showcase = (props) => {
    const {sections} = props;
    const settings = {
        dots: false,
        autoplay:false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        className: "center",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    className: "center",
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    className: "center",
                    centerMode: false,
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                {sections.map(item => (
                    <Slidecase key={item} {...item}/>
                ))}
            </Slider>
        </div>
    );
};

export default Showcase;