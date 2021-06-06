import React from 'react';
import s from './Carousel.module.css'
import PlayButton from "../playButton/playButton";

const Slide = (props) => {
    const {img} = props;
    return (
        <div>
            <div className={s.container}>
                <img src={img} className={s.slideImg}/>
                <div className={s.sliderText}>
                    <h5>Star Wars The Force Awakens</h5>
                </div>
                <div className={s.playBtn}>
                    <PlayButton/>
                </div>
            </div>
        </div>
    );
};

export default Slide;