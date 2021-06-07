import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import ContentSlider from "../../Modules/contentSlider";
import img1 from "../../Assets/Movies/img4.jpg";
import img2 from "../../Assets/Movies/img5.jpg";
import img3 from "../../Assets/Movies/img6.jpg";
import img4 from "../../Assets/Movies/img7.jpg";
import img5 from "../../Assets/Movies/img8.jpg";
import img6 from "../../Assets/Movies/img9.jpg";
import img7 from "../../Assets/Movies/img10.jpg";
import s from './watch.module.css'

const Watch = (props) => {

    const sections = [{
        thumbnail: img1,
        movie: 'Friends',
        duration: '10 min'
    },
        {
            thumbnail: img2,
            movie: 'How i met your mother',
            duration: '13 min'
        },
        {
            thumbnail: img3,
            movie: 'Arrow',
            duration: '20 min'
        },
        {
            thumbnail: img4,
            movie: 'Gotham',
            duration: '25 min'
        },
        {
            thumbnail: img5,
            movie: 'Penguin',
            duration: '12 min'
        },
        {
            thumbnail: img6,
            movie: 'The Riddler',
            duration: '20 min'
        },
        {
            thumbnail: img7,
            movie: 'Need for Speed Most Wanted',
            duration: '8 min'
        },

    ]
    return (
        <div>
            <ReactHlsPlayer
                src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                autoPlay={true}
                controls={true}
                className={s.player}
            />

            <section className={s.details}>
                <h2>Avatar the Last Airbender</h2>
                <div className={s.playtime}>
                    <span>2:12:00</span>
                    <span>2021</span>
                    <span className={s.like}>
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        25</span>
                    <span className={s.dislike}>
                        <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                        1</span>
                    <span><i className="fa fa-share"/> Share </span>
                    <span><i className="fa fa-list"/> Add to Watchlist </span>
                </div>
                <div>
                    <p className={s.descriptions}>
                        The Last Airbender is set in a world where human civilization consists of four nations, named
                        after the four classical elements: the Water Tribes, the Earth Kingdom, the Fire Nation, and the
                        Air Nomads. The Avatar is the only person with the ability to bend all four elements.
                    </p>
                </div>
            </section>
            <ContentSlider s={s} sections={sections} heading="Up next"/>
        </div>
    );
}

export default Watch;