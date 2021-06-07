import React from 'react';
import img1 from '../../Assets/Movies/img1.png'
import img2 from '../../Assets/Movies/img2.jpg'
import img3 from '../../Assets/Movies/img3.jpg'
import ContentSlider from "../contentSlider";


const Original = (props) => {
    const {s} = props;
    const sections = [{
        thumbnail: img1,
        movie: 'The Vampire Dairies',
        duration: '28 Min'
    },
        {
            thumbnail: img2,
            movie: 'Game of thrones',
            duration: '20 Min'
        },
        {
            thumbnail: img3,
            movie: 'The Big Bang Theory',
            duration: '24 min'
        }
    ]
    return (
        <div>
            <ContentSlider {...props} sections={sections} heading="originals"/>
        </div>
    );
};

export default Original;