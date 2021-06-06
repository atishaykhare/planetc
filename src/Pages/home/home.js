import React from 'react';
import Carousel from "../../Components/banner/Carousel";
import s from './home.module.css'
import Original from "../../Modules/original/original";
import Trailers from "../../Modules/trailers/trailers";
import Footer from "../../Components/footer/footer";

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Original s={s}/>
            <Trailers s={s}/>
            <Footer/>
        </div>
    );
};

export default Home;