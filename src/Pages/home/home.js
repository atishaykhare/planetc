import React from 'react';
import Header from "../../Components/header/header";
import Carousel from "../../Components/banner/Carousel";
import s from './home.module.css'
import Original from "../original/original";
import Trailers from "../trailers/trailers";

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Original s={s}/>
            <Trailers s={s}/>
        </div>
    );
};

export default Home;