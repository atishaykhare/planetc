import React from 'react';
import s from './showcase.module.css';
import PlayButton from "../playButton/playButton";

const Slidecase = (props) => {
    const {thumbnail, movie, duration} = props
    return (
        <div className={s.aBox}>
            <div className={s.imgContainer}>
                <div>
                    <div className={s.innerSkew}>
                        <div className={s.playButton}>
                            <PlayButton/>
                        </div>
                        <img src={thumbnail}/>
                    </div>
                </div>
            </div>
            <div className={s.textContainer}>
                <h3>{movie}</h3>
                <p>{duration}</p>
            </div>
        </div>
    );
};

export default Slidecase;