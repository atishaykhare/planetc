import React from 'react';
import Showcase from "../../Components/showcase/showcase";
import img1 from '../../Assets/Movies/img1.jpg'
import img2 from '../../Assets/Movies/img2.jpg'
import img3 from '../../Assets/Movies/img3.jpg'


const Original = (props) => {
    const {s} = props;
    const sections = [{
        thumbnail: img1,
        movie: 'The Vampire Dairies',
        duration: '1 hrs 20 min'
    },
        {
            thumbnail: img2,
            movie: 'Game of thrones',
            duration: '1 hrs 20 min'
        },
        {
            thumbnail: img3,
            movie: 'The Big Bang Theory',
            duration: '1 hrs 20 min'
        }
    ]
    return (
        <div>
            <section className={s.sections}>
                <h3>original</h3>
                <Showcase sections={sections}/>
            </section>
        </div>
    );
};

export default Original;