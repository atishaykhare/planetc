import React from 'react';
import Carousel from "../../Components/banner/Carousel";
import s from './home.module.css'
import Original from "../../Modules/original/original";
import Trailers from "../../Modules/trailers/trailers";

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Original s={s}/>
            <Trailers s={s}/>
        </div>
    );
};

export default Home;