import React from 'react';
import img1 from '../../Assets/Movies/img4.jpg'
import img2 from '../../Assets/Movies/img5.jpg'
import img3 from '../../Assets/Movies/img6.jpg'
import img4 from '../../Assets/Movies/img7.jpg'
import img5 from '../../Assets/Movies/img8.jpg'
import img6 from '../../Assets/Movies/img9.jpg'
import img7 from '../../Assets/Movies/img10.jpg'
import ContentSlider from "../contentSlider";


const Trailers = (props) => {
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
            <ContentSlider {...props} sections={sections} heading="trailers"/>
        </div>
    );
};

export default Trailers;